const vers = [
    {
        title: "Update 0",
        date: "May 2022",
        link: "u0",
        info: "The first iteration of the site.",
        changelog: [],
        status: true
    },
    {
        title: "Update 1",
        date: "August 2023",
        link: "u1",
        info: "The first site update.",
        changelog: [
            "Added 'Michael the game coming soon'"
        ],
        status: true
    },
    {
        title: "Update 1.5",
        date: "August 2023",
        link: "u1-5",
        info: "Site closes operations.",
        changelog: [],
        status: true
    },
    {
        title: "Update 2",
        date: "August 2023",
        link: "u2",
        info: "Site resumes operations.",
        changelog: [
            "Adds graphic for Michael"
        ],
        status: true
    },
    {
        title: "Update 3",
        date: "April 2025",
        link: "u3",
        info: "Alt site update.",
        changelog: [
            "Adds %doll.html%", 
            "Removes Michael from the homepage"
        ],
        status: true
    },
    {
        title: "Update 4",
        date: "August 1, 2025",
        link: "u4",
        info: "Reviews update.<br>Archived by <b>@digitalswirl</b> (Discord) with help from <b>@realzoeygreen</b> (Discord)",
        changelog: [
            "Removes doll.html", 
            "Adds Tobias's Game ( %tobias.html% )", 
            "Adds the reviews page", 
            "Adds %newspaper.html%", 
            "Adds %michael.html%"
        ],
        status: true
    },
    {
        title: "Update 5",
        date: "August 3, 2025",
        link: "u5",
        info: "Coupon update.",
        changelog: [
            "Adds the deals page ( %coupon.html% )", 
            "Adds 2 new coupon codes (KZ392, ft23)", 
            "Adds %mother.html%", "Adds %father.html%", 
            "Adds more content to Tobias's Game ( %tobias.html% )", 
            "Obfuscated the source code"
        ],
        status: true
    },
    {
        title: "Update 6",
        date: "August 6, 2025",
        link: "u6",
        info: "Michael update.",
        changelog: [
            "Adds %autumn.html%", 
            "One new coupon code (988549849898598999990)", 
            "New room in Tobias's Game ( %tobias.html )", 
            "Adds Michael's Game after entering the secret room in Tobias's ( %michael.html% )", 
            "Adds Tobias The Game ( %tobias0.html% )", 
            "1 new newspaper on %newspaper.html% ( %newspaper.html?sorry% )", 
            "Encrypts certain strings in the code"
        ],
        status: true
    },
    {
        title: "Update 7 (Latest)",
        date: "August 13, 2025",
        link: "u7",
        info: "Tobias + Tobias0 update.",
        changelog: [
            "Adds new content to Tobias's Game ( %tobias.html% ) after completing Michael.",
            "One new coupon code (erehllitsmi)",
            "Adds new content to Tobias The Game ( %tobias0.html ) when accessed through the new Tobias route",
            "Adds 'a dataminer secret' ( %michaelBattle.html% )",
            "Adds one new newspaper for the dataminer secret ( %newspaper.html?supermanthat% )",
            "Modifies some reviews on the reviews page",
            "Encrypts even more strings in the source code"
        ],
        status: true
    }
];

const coupons = [
    {
        coupon: "KZ392",
        introduced: "u5",
        intended_unlock: "Posted on the superfuckingmario.com Bluesky account."
    },
    {
        coupon: "ft23",
        introduced: "u5",
        intended_unlock: "Looking at the entire map for the school spells out this code."
    },
    {
        coupon: "988549849898598999990",
        introduced: "u6",
        intended_unlock: "Can be solved either by deleted posts on the superfuckingmario.com Bluesky account, or Father's review."
    },
    {
        coupon: "erehllitsmi",
        introduced: "u7",
        intended_unlock: "Found through posts on the superfuckingmario.com Bluesky account. Spells 'imstillhere' backwards."
    }
];


let latestUpdate = 0;

function setup_navbar()
{
    const barDiv = document.getElementById("navbar");
    barDiv.innerHTML = `
        <div style="display: inline-block;">
            <button onclick="window.location = '/sfmva';">Home</button>
            <button onclick="window.location = '/sfmva/browser';">Asset Browser</button>
            <button onclick="window.location = '/sfmva/honey-dew';">Coupons</button>
        </div><hr>
    `;
}

/*
    CODE TAKEN FROM SUPERFUCKINGMARIO.COM
*/
function setup_logo()
{
	// Initialize pallete
	var palette = [];
	for(var i = 0; i <= 36; i++)
	{
		palette[i] = {
			r : 0xFF, 
			g : 0xFF, 
			b : 0xFF 
		}
	}
	// Load palette
	var firepal_image = new Image();
	firepal_image.onload = function()
	{
		var temp_canvas = document.createElement("canvas");
		var temp_ctx = temp_canvas.getContext("2d");
		temp_canvas.width = 1;
		temp_canvas.height = 37;
		temp_ctx.drawImage(firepal_image, 0, 0);
		var firepal_data = temp_ctx.getImageData(0, 0, 1, 37);
		for(var i = 0; i <= 36; i++)
		{
			palette[i].r = firepal_data.data[i * 4 + 0];
			palette[i].g = firepal_data.data[i * 4 + 1];
			palette[i].b = firepal_data.data[i * 4 + 2];
		}
		console.log("loaded firepal!");
	};

	firepal_image.src = "/assets/images/sfmva/firepal.png";

	// Get canvas context
	var canvas = document.getElementById("logo");
	var ctx = canvas.getContext("2d");
	
	// Load image
	var logo_image = new Image();
	function OnImageLoad()
	{
		// Get logo image data
		ctx.drawImage(logo_image, 0, 0);
		var image_data = ctx.getImageData(0, 0, canvas.width, canvas.height);

		// Setup framebuffer
		var framebuffer = ctx.createImageData(image_data);
		var framebuffer_out = ctx.createImageData(image_data);
		
		// Judge which pixels are top
		for (var x = 0; x < canvas.width; x++)
		{
			var i = x * 4;
			var judg = false;
			for (var y = 0; y < canvas.height; y++)
			{
				var judg_now = image_data.data[i] == 0;
				framebuffer.data[i + 0] = 0x00;
				if (judg_now && !judg)
					framebuffer.data[i + 1] = 0xFF;
				else
					framebuffer.data[i + 1] = 0x00;
				if (judg_now)
					framebuffer.data[i + 2] = 0x00;
				else
					framebuffer.data[i + 2] = 0xFF;
				judg = judg_now;
				i += canvas.width * 4;
			}
		}

		// Setup tick clock
		function Tick()
		{
			// Simulate framebuffer
			for (var y = 1; y < canvas.height; y++)
			{
				var i = y * canvas.width * 4;
				for (var x = 0; x < canvas.width; x++)
				{
					if (framebuffer.data[i + 1])
						framebuffer.data[i + 0] = 36;
					if (framebuffer.data[i + 0])
					{
						var upi = i - canvas.width * 4;
						var rand = Math.round(Math.random() * 2.0);
						var xoff = -rand + 1;
						if (x + xoff < 0)
							upi = y * canvas.width * 4;
						else if (x + xoff >= canvas.width)
							upi = (y * canvas.width - 1) * 4;
						else
							upi += xoff * 4;
						if (framebuffer.data[upi + 2])
							framebuffer.data[upi + 0] = framebuffer.data[i + 0] - 1;
						var rand2 = Math.round(Math.random() * 2.0);
						framebuffer.data[upi + 0] -= rand2 & 1;
					}
					i += 4;
				}
			}

			// Palettize framebuffer
			for (var i = 0; i < framebuffer.data.length; i += 4)
			{
				if (framebuffer.data[i + 2])
				{
					framebuffer_out.data[i + 0] = palette[framebuffer.data[i + 0]].r;
					framebuffer_out.data[i + 1] = palette[framebuffer.data[i + 0]].g;
					framebuffer_out.data[i + 2] = palette[framebuffer.data[i + 0]].b;
					framebuffer_out.data[i + 3] = 0xFF;
				}
				else
				{
					framebuffer_out.data[i + 0] = 0x00;
					framebuffer_out.data[i + 1] = 0x00;
					framebuffer_out.data[i + 2] = 0x00;
					framebuffer_out.data[i + 3] = 0xFF;
				}
			}

			ctx.putImageData(framebuffer_out, 0, 0);
		}

		setInterval(Tick, 100);
	}
	
	logo_image.onload = OnImageLoad;
	logo_image.src = "/assets/images/sfmva/logo.png";
}

function setup_versions()
{
    const container = document.getElementById("list");

    vers.forEach(ver => {
        let title = ver.status ? `<a href="${ver.link}">${ver.title}</a>` : `${ver.title} <b><div style="color:red; display: inline;">(UNARCHIVED)</div></b>`;
        let info = linkFormat(ver.info, ver.link);
        let changelog = ver.changelog.length <= 0 ? "" : (() => {
            let log = "<b>CHANGELOG</b><br>";
            ver.changelog.forEach(change => {log += `-${linkFormat(change, ver.link)}<br>`;});
            return log + "<br>";
        })();
        
        const wrapper = document.createElement("div");
        wrapper.className = "panel";
        wrapper.innerHTML = `
            <div id="${ver.link}_title" style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size:25px"><b>${title}</b></span>
                <span style="font-size:15px"><b>[${ver.date}]</b></span>
            </div>
            <div id="${ver.link}_info">
                <p>${info}</p>
                ${changelog}
            </div>
            <div id="${ver.link}_buttons">
                <button onclick="window.location.href = '${ver.link}'">Open</button>
                <button onclick="window.location.href = 'browser/?path=${ver.link}'">Browse assets...</button>
            </div>
        `;

        container.appendChild(wrapper);
    });

    latestUpdate = vers.length - 1;
}

function setup_filebrowser()
{
    const imgext = ["png", "jpg", "jpeg", "webp", "bmp", "tiff", "jfif", "avif", "svg"];

    const baseFolder = "sfmva";

    const params = new URLSearchParams(window.location.search);
    const subPath = params.get("path") || "";

    const folderPath = baseFolder + (subPath ? "/" + subPath : "");
    const url = `https://api.github.com/repos/cuzsie/cuzsie.github.io/contents/${folderPath}?ref=main`;

    function getNavIcon(item)
    {
        if (item.type == "dir") return "📁";

        for (const ext of imgext) {
            if (item.name.toLowerCase().endsWith(ext)) {
                return "🖼️";
            }
        }

        return "📄";
    }

    document.title = ((subPath == "" ? "" : `${subPath} | `) + "Asset Browser | ").concat(document.title);

    fetch(url).then(res => res.json()).then(items => {
        const list = document.getElementById("file-list");

        if (subPath) {
            const parentSubPath = subPath.split("/").slice(0, -1).join("/");

            const li = document.createElement("li");
            li.classList += "browser-list-element";

            const a = document.createElement("a");
            a.classList += "browser-link";
            a.href = "?path=" + parentSubPath;
            a.textContent = "📁 ...";
            
            li.appendChild(a);
            list.appendChild(li);
        }

        items.forEach(item => {
            if (item.type == "file" && subPath == "" || (item.name == "browser" || item.name == "honey-dew") && subPath == "")
                return;

            const li = document.createElement("li");
            li.classList += "browser-list-element";

            const a = document.createElement("a");
            a.classList += "browser-link";

            if (item.type === "dir") {
                a.href = "?path=" + ((subPath ? subPath + "/" : "") + item.name);
            } 
            else if (item.type === "file") {
                a.href = item.download_url;
                a.target = "_blank";
            }

            a.textContent = `${getNavIcon(item)} ${item.name}`;

            li.appendChild(a);
            list.appendChild(li);
        });
    }).catch(err => {
        document.getElementById("file-list").textContent = "Error loading folder!";
        console.error(err);
    });
}

function setup_coupons()
{
    var couponArea = document.getElementById("coupons");

    coupons.forEach(coupon => {
        const ver = vers.find(v => v.link == coupon.introduced);
        const wrapper = document.createElement("div");
        wrapper.classList += "panel";
        wrapper.innerHTML = `
            <span style="font-size:25px" onclick="copy_coupon('${coupon.coupon}')">
                <b>${coupon.coupon}</b>
            </span>
            <span>
                <em>(click to copy)</em>
            </span>
            <div>   
                <p>Introduced in: <b><a href="/sfmva/${ver.link}">${ver.title}</a></b></p>
                <p>${coupon.intended_unlock}</p>
            </div>
        `;
        couponArea.appendChild(wrapper);
    });
}

function linkFormat(string, sublink)
{
    return string.replace(/%([^%]+)%/g, (match, str) => {
        return `<a href="${sublink}/${str}">${str}</a>`;
    });
}

function reset()
{
    localStorage.removeItem('dollState');
    localStorage.removeItem('sfmData');
    
    document.getElementById('reset-confirm').hidden = false;
}

function copy_coupon(coupon)
{
    navigator.clipboard.writeText(coupon);
    window.alert("Copied coupon to clipboard!");
}

function loadLatest() { window.location.href = `${vers[latestUpdate].link}`; }