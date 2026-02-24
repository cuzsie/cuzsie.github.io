const upload_input = document.getElementById('upload');
let uploaded_file;

const tool_wrapper = document.getElementById("tool");
const image = document.getElementById('image');
const cropper = document.getElementById('crop');
const overlay = document.getElementById("overlay");
const download_button = document.getElementById('download');

const previews = Array.from(document.getElementsByClassName('preview'));
const ctxs = previews.map(p => p.getContext('2d'));

let dragging = false;
let resizing = false;
let activeHandle = null;

let cropData = { x: 50, y: 50, size: 150 };
let startCrop;
let startX;
let startY;

function init() {
    upload_input.onchange = uploaded;
    download_button.onclick = download;
    image.onload = imageLoaded;
    cropper.onmousedown = cropperDown;

    document.onmousemove = e => {
        e.preventDefault();

        if (!dragging && !resizing) 
            return;

        cropperMove(e);
    };

    document.onmouseup = mouseUp;

    setupTitle();
}

function setupTitle() {
    let delay = 200;
    
	let h1 = document.getElementById("title");
    let text = h1.innerText;

    h1.innerHTML = text.split("").map(letter => {
        console.log(letter);
        return `<span>` + letter + `</span>`;
    }).join("");

    Array.from(h1.children).forEach((span, index) => {
      setTimeout(() => {
        span.classList.add("wavy");
      }, index * 60 + delay);
    });
}

function uploaded(e)
{
    uploaded_file = e.target.files[0];

    if (!uploaded_file) 
        return;

    image.src = URL.createObjectURL(uploaded_file);
}

function download() {
    previews[0].toBlob(blob => {
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = getFileNameWithoutExtension(uploaded_file.name) + "_pfp.png";
        a.click();

        URL.revokeObjectURL(url);
    });
}

function imageLoaded()
{
    resetCrop();

    cropper.style.left = cropData.x + 'px';
    cropper.style.top = cropData.y + 'px';
    cropper.style.width = cropData.size + 'px';
    cropper.style.height = cropData.size + 'px';

    drawPreview();
}

function cropperDown(e)
{
    e.preventDefault();
    
    if (e.target.classList.contains('handle')) {
        resizing = true;
        activeHandle = e.target.classList[1];
    } 
    else {
        dragging = true;
    }

    startX = e.clientX;
    startY = e.clientY;

    startCrop = { ...cropData };
}

function cropperMove(e)
{
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    // dragging logic
    if (dragging) {
        cropData.x = startCrop.x + dx;
        cropData.y = startCrop.y + dy;
    }

    // resize logic
    if (resizing) {
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        switch (activeHandle) {
            case 'se': {
                cropData.size = Math.max(50, startCrop.size + Math.max(dx, dy));
                break;
            }

            case 'nw': {
                const size = Math.max(50, startCrop.size - Math.max(dx, dy));
                const applied = startCrop.size - size;

                cropData.size = size;
                cropData.x = startCrop.x + applied;
                cropData.y = startCrop.y + applied;

                break;
            }

            case 'ne': {
                const size = Math.max(50, startCrop.size - Math.max(-dx, dy));
                const applied = startCrop.size - size;

                cropData.size = size;
                cropData.y = startCrop.y + applied;

                break;
            }

            case 'sw': {
                const size = Math.max(50, startCrop.size - Math.max(dx, -dy));
                const applied = startCrop.size - size;
                cropData.size = size;
                cropData.x = startCrop.x + applied;
                break;
            }

            case 'w': {
                cropData.size = Math.max(50, startCrop.size - dx);
                cropData.x = startCrop.x + (startCrop.size - cropData.size);
                break;
            }

            case 'e': {
                cropData.size = Math.max(50, startCrop.size + dx);
                break;
            }
        }
    }

    clampCrop();

    cropper.style.left = cropData.x + 'px';
    cropper.style.top = cropData.y + 'px';
    cropper.style.width = cropData.size + 'px';
    cropper.style.height = cropData.size + 'px';

    drawPreview();
}

function mouseUp(e)
{
    dragging = false;
    resizing = false;
}

function clampCrop() {
    const maxSize = Math.min(image.clientWidth, image.clientHeight);

    cropData.size = Math.min(cropData.size, maxSize);
    cropData.size = Math.max(50, cropData.size);

    const maxX = image.clientWidth - cropData.size;
    const maxY = image.clientHeight - cropData.size;

    cropData.x = Math.max(0, Math.min(cropData.x, maxX));
    cropData.y = Math.max(0, Math.min(cropData.y, maxY));
}

function drawPreview() {
    if (!image.complete) 
        return;

    const scaleX = image.naturalWidth / image.clientWidth;
    const scaleY = image.naturalHeight / image.clientHeight;

   ctxs.forEach(ctx => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.drawImage(
            image,
            cropData.x * scaleX,
            cropData.y * scaleY,
            cropData.size * scaleX,
            cropData.size * scaleY,
            0,
            0,
            ctx.canvas.width,
            ctx.canvas.height
        );
    });

    // overlay
    const x = cropData.x;
    const y = cropData.y;
    const s = cropData.size;

    overlay.style.clipPath = `
        polygon(
            0% 0%,
            100% 0%,
            100% 100%,
            0% 100%,
            0% ${y}px,
            ${x}px ${y}px,
            ${x}px ${y + s}px,
            ${x + s}px ${y + s}px,
            ${x + s}px ${y}px,
            0% ${y}px
        )
    `;
}

function resetCrop() {
    const size = Math.min(image.clientWidth, image.clientHeight);

    cropData.size = size;
    cropData.x = (image.clientWidth - size) / 2;
    cropData.y = (image.clientHeight - size) / 2;
}

function getFileNameWithoutExtension(filename) {
    const lastDotIndex = filename.lastIndexOf('.');

    if (lastDotIndex !== -1 && lastDotIndex !== 0) {
        return filename.substring(0, lastDotIndex);
    }

    return filename;
}

function update(timestamp) {
    let has_file = uploaded_file != null;
    const newState = has_file ? 'flex' : 'none';
    const stateChanged = newState != tool_wrapper.style.display;
    tool_wrapper.style.display = newState;

    if (stateChanged)
        drawPreview();
    
    requestAnimationFrame(update);
}

init();
requestAnimationFrame(update);