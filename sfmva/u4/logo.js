function StartLogo()
{
	// Build the site-wide top banner
	const message = document.createElement("div");
	message.innerHTML = `
	from the team at superfuckingmario, we are deeply sorry for the strange errors recently.<br>
	not enough care was taken to ensure the website was stable and operational at all times.<br>
	the issue<br>is now resolved.
	<hr>
	<canvas id="logo" width="400" height="120"><img src="logo.png"></canvas><br>
	<a href="index.html"><button>home</button></a><a href="satisfaction.html"><button>customer reviews</button></a>
	`;
	document.body.insertBefore(message, document.body.firstChild);

	// Initialize palette
	var palette = [];
	for(var i = 0; i <= 36; i++)
	{
		palette[i] = {
			r : 0xFF, 
			g : 0xFF, 
			b : 0xFF 
		}
	}

	// Get canvas context
	var canvas = document.getElementById("logo");
	var ctx = canvas.getContext("2d");
		
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
	firepal_image.src = "firepal.png";

	// Load image
	var logo_image = new Image();

	function OnImageLoad()
	{
		// Get logo image data
		ctx.drawImage(logo_image, 0, 0);
		var image_data = ctx.getImageData(0, 0, canvas.width, canvas.height);

		// Clear canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);

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
		var timey = 0;

		function Tick()
		{
			timey += 1;

			// Simulate framebuffer
			var cos = 1 + (Math.cos(timey * 0.6) * Math.sin(timey * 0.64));

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
						var rand = Math.round(Math.random() * cos);
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
					const v = framebuffer.data[i + 0];
					if (v > 0)
					{
						const pal = palette[v];
						framebuffer_out.data[i + 0] = pal.r;
						framebuffer_out.data[i + 1] = pal.g;
						framebuffer_out.data[i + 2] = pal.b;
						framebuffer_out.data[i + 3] = 0xFF;
					}
					else
					{
						framebuffer_out.data[i + 3] = 0x00;
					}
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
	logo_image.src = "logo.png";
}
