function lerp(a, b, t) {
	return a + (b - a) * t;
}

/*
// Load the doll state from local storage
var dollState = localStorage.getItem("dollState2");
if (dollState == undefined)
	dollState = {};
else
	dollState = JSON.parse(dollState);

var hasSeen = dollState.hasSeen !== undefined;
var hasSeenDoll = dollState.hasSeenDoll !== undefined;

var dollIndex = dollState.dollIndex;
if (dollIndex === undefined || typeof(dollIndex) !== "number")
	dollIndex = 0;

// Check if we can see the doll now
if (!hasSeen || hasSeenDoll)
{
	// alert("...");
	// document.location = "/";
	// return;
}

// Save that we've seen the doll
dollState.hasSeenDoll = true;
dollState.dollIndex = dollIndex + 1;

dollState.dollIndex = 0;

localStorage.setItem("dollState2", JSON.stringify(dollState));
*/

// Game constants
const SCREEN_WIDTH = 320;
const SCREEN_HEIGHT = 240;

const INFINITE_WRAPAROUND_SIZE = 128-32;

// Html stuff
var ctx;

function ReturnToMainWebsite() {
	ctx.resetTransform();
	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

	document.location = "index.html";
}

var locationPromptShown = false;
function ShowLocationPrompt() {
	if (locationPromptShown) return;
	locationPromptShown = true;

	setTimeout(() => {
		navigator.geolocation.getCurrentPosition(
			(_position) => {
				evil4Audio.play();
			},
			(_error) => {
				ReturnToMainWebsite();
			},
			{ enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
		);
	}, 3000);
}

var micPromptShown = false;
function ShowMicrophonePrompt() {
	if (micPromptShown) return;
	micPromptShown = true;

	setTimeout(() => {
		navigator.mediaDevices.getUserMedia({ audio: true })
		.then(function(_stream) {
		})
		.catch(function(_error) {
		});
	}, 666);
}

// Game timer
var gameTime = 0;

var gameStartTick = 0;
var gameLastTick = 0;

function GameTimerInit() {
	gameTime = 0;
	gameStartTick = performance.now();
	gameLastTick = gameStartTick;
}

function GameTimerTick() {
	var nowTick = performance.now();

	var dt = (nowTick - gameLastTick) / 1000;
	if (dt > 0.1) dt = 0.1;

	gameTime = (nowTick - gameStartTick) / 1000;
	gameLastTick = nowTick;
	return dt;
}

// Load and autoplay the music
// const musicAudio = new Audio(music);
// musicAudio.loop = true;
// musicAudio.volume = 0.5;

// Image loads
var imagesLoading = 0;

function LoadImage(name) {
	var img = new Image();

	img.src = `${name}.png`;

	imagesLoading++;
	img.onload = function () {
		imagesLoading--;
	};

	return img;
}

var tilesetImage = LoadImage("tileset");

var bodyImage = LoadImage("body");
var bodyMeltImage = LoadImage("bodymelt");

var npcImage = LoadImage("npc");

var infartoImage = LoadImage("infarto");

// Audio loads
function LoadAudio(name) {
	var audio = new Audio(`${name}.ogg`);

	audio.loop = false;
	audio.preload = "auto";

	audio.load();
	return audio;
}

var step1Audio = LoadAudio("step1");
var step2Audio = LoadAudio("step2");

var evil4Audio = LoadAudio("evil4");

// Json loader
async function LoadJsonPromise(name) {
	return fetch(`${name}.json`)
		.then((response) => {
			if (!response.ok)
				throw new Error(`Failed to load JSON: ${response.statusText}`);
			return response.json();
		})
		.catch((error) => {
			console.error(`Error loading JSON file ${name}:`, error);
			return undefined;
		});
}

// Transition
var transFade = 0;

function TransStartFade() {
	transFade = 1;
}

function TransStep(dt) {
	if (transFade > 0) {
		transFade = Math.max(0, transFade - dt * 2);
	}
}

// Music player
var musicName = undefined;
var musicAudio = new Audio();

function MusicSet(name) {
	if (musicName === name) return;
	musicName = name;

	console.log("Setting music to:", name);

	musicAudio.loop = true;
	musicAudio.preload = "auto";

	musicAudio.pause();

	if (musicName !== undefined) {
		musicAudio.src = `${musicName}.ogg`;

		musicAudio.load();
		musicAudio.play();
	}
}

// Phone player
var phonePlaying = false;
var phoneEnded = false;
var phoneAudio = new Audio();

function PhoneSet(name) {
	if (phonePlaying) return;
	phonePlaying = true;

	phoneAudio.src = `${name}.ogg`;
	phoneAudio.load();
	phoneAudio
		.play()
		.catch((e) => {
			phoneEnded = true;
		})
		.then(() => {
			phoneAudio.addEventListener("ended", () => {
				phoneEnded = true;
			});
		});
}

// Map loader
var mapLoaded = false;

var walkableLayer = undefined;
var mapLayers = [];

var mapObjects = [];
var mapCameraZones = [];

var mapDim = 0;

var mapMusicOverride = undefined;

function MapLoad(json) {
	if (!json) return;

	// Iterate through the layers
	for (const layer of json.layers) {
		if (layer.type === "tilelayer") {
			if (layer.name === "walkable") {
				walkableLayer = layer;
			} else {
				mapLayers.push(layer);
			}
		} else if (layer.type === "objectgroup") {
			if (layer.name === "objects") {
				mapObjects = layer.objects;
			} else if (layer.name === "camera") {
				mapCameraZones = layer.objects;
			}
		}
	}

	mapLoaded = true;
}

LoadJsonPromise("map1").then(MapLoad);

function MapCheckWalkable(x, y) {
	if (!walkableLayer) return false;
	var tileX = Math.floor(x / 16);
	var tileY = Math.floor(y / 16);
	if (
		tileX < 0 ||
		tileY < 0 ||
		tileX >= walkableLayer.width ||
		tileY >= walkableLayer.height
	) {
		return false; // Out of bounds
	}
	var tileIndex = walkableLayer.data[tileY * walkableLayer.width + tileX];
	return tileIndex > 0; // Tile index 0 means not walkable
}

function MapDraw() {
	var startX = Math.max(Math.floor(cameraX / 16), 0);
	var startY = Math.max(Math.floor(cameraY / 16), 0);
	var baseEndX = Math.ceil((cameraX + SCREEN_WIDTH) / 16);
	var baseEndY = Math.ceil((cameraY + SCREEN_HEIGHT) / 16);

	for (var layer of mapLayers) {
		var endX = Math.min(baseEndX + 1, layer.width);
		var endY = Math.min(baseEndY + 1, layer.height);

		for (var y = startY; y < endY; y++) {
			for (var x = startX; x < endX; x++) {
				var tileIndex = layer.data[y * layer.width + x];
				if (tileIndex > 0) {
					var tileX = (tileIndex - 1) % 16;
					var tileY = Math.floor((tileIndex - 1) / 16);
					ctx.drawImage(
						tilesetImage,
						tileX * 16,
						tileY * 16,
						16,
						16,
						x * 16,
						y * 16,
						16,
						16
					);
				}
			}
		}
	}
}

function MapGetObjectById(id) {
	for (var obj of mapObjects) {
		if (obj.id === id) {
			return obj;
		}
	}
	return undefined;
}

function MapGetObjectByName(name) {
	for (var obj of mapObjects) {
		if (obj.name === name) {
			return obj;
		}
	}
	return undefined;
}

function MapGetObjectByType(type) {
	for (var obj of mapObjects) {
		if (obj.type === type) {
			return obj;
		}
	}
	return undefined;
}

function MapObjectGetProperty(obj, propName) {
	if (!obj || !obj.properties) return undefined;
	for (var prop of obj.properties) {
		if (prop.name === propName) {
			return prop;
		}
	}
	return undefined;
}

function MapGetTouchingObject() {
	var playerLeft = playerX - 6;
	var playerRight = playerX + 6;
	var playerTop = playerY - 4;
	var playerBottom = playerY + 2;

	for (var obj of mapObjects) {
		var objLeft = obj.x;
		var objTop = obj.y;
		var objRight = obj.x;
		var objBottom = obj.y;

		if (obj.type === "npc") {
			// Is a bottom centered hitbox
			objLeft -= 10;
			objRight += 10;
			objTop -= 24;
			objBottom += 2;
		} else if (obj.type === "player") {
			continue;
		} else if (obj.type === "door") {
			objLeft += 4;
			objRight += obj.width - 4;
			objTop += 8;
			objBottom += obj.height - 4;
		} else {
			objRight += obj.width;
			objBottom += obj.height;
		}

		if (
			objRight > playerLeft &&
			objLeft < playerRight &&
			objBottom > playerTop &&
			objTop < playerBottom
		) {
			return obj;
		}
	}
	return undefined;
}

var npcRandoms = {
	"showerBeing": [false, 0.35],
	"mirrorFace": [false, 0.5],
}

function MapHandleObjectTouch() {
	var obj = MapGetTouchingObject();
	if (!obj) return;

	if (obj.type === "door") {
		var targetProp = MapObjectGetProperty(obj, "target");

		var randomChanceProp = MapObjectGetProperty(obj, "randomChance");
		if (randomChanceProp && Math.random() < randomChanceProp.value) {
			targetProp = MapObjectGetProperty(obj, "randomTarget");
		}

		var target = MapGetObjectById(targetProp.value);

		playerX = target.x + target.width / 2;
		if (MapCheckWalkable(playerX, target.y + target.height + 8)) {
			playerY = target.y + target.height + 8;
			playerUp = false;
			playerDisableUp = true;
		} else {
			playerY = target.y;
			playerUp = true;
			playerDisableDown = true;
		}

		CameraReset();

		mapMusicOverride = undefined;

		for (var npcRandom of Object.keys(npcRandoms)) {
			npcRandoms[npcRandom][0] = Math.random() < npcRandoms[npcRandom][1];
		}
		
		if (cameraCurrentZone.name === "bathroom") {
			mapMusicOverride = npcRandoms["showerBeing"][0] ? "shower" : undefined;
		} else {
			TransStartFade();
		}
	} else if (obj.type === "phone") {
		PhoneSet(MapObjectGetProperty(obj, "audio").value);
	} else if (obj.type === "infinite") {
		var timesProp = MapObjectGetProperty(obj, "times");

		if (timesProp.value > 0) {
			timesProp.value--;

			playerX -= INFINITE_WRAPAROUND_SIZE;
			cameraX -= INFINITE_WRAPAROUND_SIZE;

			playerInfLockX = playerX;

			// Dim the canvas
			mapDim += 0.085;

			ShowMicrophonePrompt();
		}
	} else if (obj.type === "npc") {
		var npcName = obj.name;

		if (npcName === "newspaper") {
			if (Math.random() < 0.5)
				document.location = "newspaper.html?whatsleftof";
			else
				document.location = "newspaper.html?him";
		}
	}
}

function MapGetCameraZone() {
	for (var cameraZone of mapCameraZones) {
		var cameraLeft = cameraZone.x;
		var cameraTop = cameraZone.y;
		var cameraRight = cameraZone.x + cameraZone.width;
		var cameraBottom = cameraZone.y + cameraZone.height;

		if (
			playerX > cameraLeft &&
			playerX < cameraRight &&
			playerY > cameraTop &&
			playerY < cameraBottom
		) {
			return cameraZone;
		}
	}
	return undefined;
}

var npcData = {
	"doll": 0,
	"newspaper": 1,
	"showerBeing": 2,
	"mirrorFace": 5,
}

function MapDrawNPCs() {
	for (var npc of mapObjects) {
		if (npc.type !== "npc") continue;

		// Check if out of view
		if (npc.x > cameraX + SCREEN_WIDTH + 12 ||
			npc.x < cameraX - 12 ||
			npc.y > cameraY + SCREEN_HEIGHT + 40 ||
			npc.y < cameraY - 8) {
			continue;
		}

		// Check if enabled
		var randomEnabled = npcRandoms[npc.name];
		if (randomEnabled !== undefined && !randomEnabled[0]) {
			continue;
		}

		// Get the NPC ID
		var npcId = npcData[npc.name];
		if (npcId === undefined) continue;

		 // Shower being animation
		if (npcId === 2) {
			npcId += Math.floor(gameTime * 10) % 3;
		}

		ctx.drawImage(
			npcImage,
			(npcId % 4) * 24,
			Math.floor(npcId / 4) * 48,
			24,
			48,
			Math.floor(npc.x) - 12,
			Math.floor(npc.y) - 40,
			24,
			48
		);
	}
}

// Rendering helpers
function RenderToCanvasSpace(x, y) {
	const tf = ctx.getTransform();
	const p = tf.transformPoint({ x: x, y: y });
	return [p.x, p.y];
}

function RenderText(text, x, y) {
	ctx.fillStyle = "#FFFFFF";
	ctx.font = "16px monospace";
	ctx.fillText(text, x, y);
}

// Input code
// Maps onkeydown and onkeyup to a map
var inputMaps = {
	ArrowUp: "up",
	ArrowDown: "down",
	ArrowLeft: "left",
	ArrowRight: "right",
	w: "up",
	a: "left",
	s: "down",
	d: "right",
};

var inputState = {};

function InputOnKeyDown(event) {
	const key = inputMaps[event.key];
	if (key) {
		inputState[key] = true;
		event.preventDefault();
	}
}

function InputOnKeyUp(event) {
	const key = inputMaps[event.key];
	if (key) {
		inputState[key] = false;
		event.preventDefault();
	}
}

function InputInit() {
	document.addEventListener("keydown", InputOnKeyDown);
	document.addEventListener("keyup", InputOnKeyUp);
}

// Camera code
var cameraX = 0;
var cameraY = 0;

var cameraCurrentZone = undefined;

function CameraUpdate() {
	var scrollX = 0;
	var scrollY = 0;

	var middleX = cameraX + 160;
	var middleY = cameraY + 120;

	scrollX = playerX - middleX;
	scrollY = playerY - middleY;

	cameraX += Math.max(Math.abs(scrollX) - 32, 0) * (scrollX < 0 ? -1 : 1);
	cameraY += Math.max(Math.abs(scrollY) - 32, 0) * (scrollY < 0 ? -1 : 1);

	CameraUpdateZone();
}

function CameraUpdateZone() {
	var cameraZone = MapGetCameraZone();
	cameraCurrentZone = cameraZone;

	if (cameraZone) {
		cameraX = Math.max(
			Math.min(cameraX, cameraZone.x + cameraZone.width - SCREEN_WIDTH),
			cameraZone.x
		);
		cameraY = Math.max(
			Math.min(cameraY, cameraZone.y + cameraZone.height - SCREEN_HEIGHT),
			cameraZone.y
		);
	}
}

function CameraReset() {
	cameraX = playerX - SCREEN_WIDTH / 2;
	cameraY = playerY - SCREEN_HEIGHT / 2;
	CameraUpdateZone();
}

// Face code
var faceFrame = 0;
var faceTime = 0;

function DrawFace(dt, x, y) {
	faceTime -= dt;
	if (faceTime <= 0) {
		faceFrame = Math.floor(faceFrame + 1 + Math.random() * 3) % 4;
		faceTime = 0.1 + Math.random() * Math.random() * 0.5;
	}

	// Face animation
	ctx.drawImage(
		infartoImage,
		(faceFrame % 2) * 57,
		Math.floor(faceFrame / 2) * 73,
		57,
		73,
		x - 26,
		y - 36,
		57,
		73
	);
}

// Player code
var playerX = 0;
var playerY = 0;
var playerLeft = false;
var playerUp = false;
var playerAnim = 0;
var playerStepSwap = false;

var playerDisableUp = false;
var playerDisableDown = false;

var playerInfLockX = undefined;

function PlayerReset() {
	var playerStart = MapGetObjectByType("player");

	playerX = playerStart.x;
	playerY = playerStart.y;
}

function PlayerStep(dt) {
	var isWalking = false;
	var walkSpeed = 17;
	var animSpeed = 2.5;

	if (true) {
		walkSpeed = 50;
		animSpeed = 5;
	}

	// walkSpeed *= 3;
	// animSpeed *= 3;

	var canWalkLeft = MapCheckWalkable(playerX - 6, playerY);
	var canWalkRight = MapCheckWalkable(playerX + 6, playerY);
	var canWalkUp = MapCheckWalkable(playerX, playerY - 4);
	var canWalkDown = MapCheckWalkable(playerX, playerY + 2);

	if (playerInfLockX !== undefined && playerX < playerInfLockX)
	{
		playerX += INFINITE_WRAPAROUND_SIZE;
		cameraX += INFINITE_WRAPAROUND_SIZE;
	}

	if (inputState["left"]) {
		isWalking = true;
		if (canWalkLeft) playerX -= walkSpeed * dt;
		playerLeft = true;
	}
	if (inputState["right"]) {
		isWalking = true;
		if (canWalkRight) playerX += walkSpeed * dt;
		playerLeft = false;
	}

	if (inputState["up"]) {
		if (!playerDisableUp) {
			isWalking = true;
			if (canWalkUp) playerY -= walkSpeed * dt;
			playerUp = true;
		}
	} else {
		playerDisableUp = false;
	}

	if (inputState["down"]) {
		if (!playerDisableDown) {
			isWalking = true;
			if (canWalkDown) playerY += walkSpeed * dt;
			playerUp = false;
		}
	} else {
		playerDisableDown = false;
	}

	if (isWalking) {
		var nextAnim = playerAnim + dt * animSpeed;
		if (nextAnim >= 2) {
			nextAnim %= 2;

			playerStepSwap = !playerStepSwap;

			var stepAudio = playerStepSwap ? step1Audio : step2Audio;
			stepAudio.pause();
			stepAudio.currentTime = 0;
			stepAudio.play();
		}

		playerAnim = nextAnim;
	}
}

function PlayerDraw() {
	ctx.drawImage(
		bodyImage,
		Math.floor(playerAnim) * 24 + (playerLeft ? 48 : 0),
		playerUp ? 48 : 0,
		24,
		48,
		Math.floor(playerX) - 12,
		Math.floor(playerY) - 40,
		24,
		48
	);
}

// Game loop
var gameStarted = false;

function IsLoadedYet() {
	if (!htmlLoaded) return false;
	if (!mapLoaded) return false;
	return true;
}

function GameCanStep() {
	if (phonePlaying) return false;

	return true;
}

function GameStart() {
	GameTimerInit();

	PlayerReset();
	CameraReset();
}

function GameStep() {
	if (!gameStarted && IsLoadedYet()) {
		gameStarted = true;
		GameStart();
	}

	if (!gameStarted) return;

	// if (musicAudio.paused)
	// {
	// 	musicAudio.play().catch((e) => {
	// 	});
	// }

	const dt = GameTimerTick();

	// Step logic
	if (GameCanStep()) {
		PlayerStep(dt);
		MapHandleObjectTouch();

		CameraUpdate();
	}

	// Clear the canvas with black
	ctx.resetTransform();

	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

	ctx.scale(2, 2);
	ctx.translate(-Math.floor(cameraX), -Math.floor(cameraY));

	MapDraw();

	MapDrawNPCs();

	PlayerDraw();

	TransStep(dt);

	if (phonePlaying) {
		MusicSet(undefined);
	} else if (cameraCurrentZone !== undefined) {
		if (mapMusicOverride === undefined) {
			var musicProp = MapObjectGetProperty(cameraCurrentZone, "music");
			MusicSet(musicProp?.value);
		} else {
			MusicSet(mapMusicOverride);
		}

		if (cameraCurrentZone.name === "face") {
			ShowLocationPrompt();

			var faceX = cameraCurrentZone.x + cameraCurrentZone.width / 2;
			var faceY = cameraCurrentZone.y + 64;
			DrawFace(dt, faceX, faceY);
		}
	}

	// Dim the canvas if needed
	ctx.resetTransform();

	var dimmer = lerp(mapDim, 1, transFade);

	if (dimmer > 0) {
		ctx.fillStyle = `rgba(0, 0, 0, ${dimmer})`;
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	}

	// End game if phone audio has ended
	if (phoneEnded) {
		ReturnToMainWebsite();
		return;
	}

	// Game loop
	requestAnimationFrame(GameStep);
}

var htmlLoaded = false;

function OnLoad() {
	htmlLoaded = true;
}

function OnClick() {
	if (!htmlLoaded) return;

	var button = document.getElementById("buttony");
	button.hidden = true;

	var canvas = document.getElementById("canvas");
	canvas.width = SCREEN_WIDTH * 2;
	canvas.height = SCREEN_HEIGHT * 2;
	canvas.hidden = false;

	ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	InputInit();

	requestAnimationFrame(GameStep);
}
