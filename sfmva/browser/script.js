const imgext = ["png", "jpg", "jpeg", "webp", "bmp", "tiff", "jfif", "avif", "svg"];

const baseFolder = "sfmva";

const params = new URLSearchParams(window.location.search);
const subPath = params.get("path") || "";

const folderPath = baseFolder + (subPath ? "/" + subPath : "");
const url = `https://api.github.com/repos/cuzsie/cuzsie.github.io/contents/${folderPath}?ref=main`;

function load()
{
    fetch(url).then(res => res.json()).then(items => {
        const list = document.getElementById("file-list");

        if (subPath) {
            const parentSubPath = subPath.split("/").slice(0, -1).join("/");
            const li = document.createElement("li");
            const a = document.createElement("a");

            a.href = "?path=" + parentSubPath;
            a.textContent = "📁 ...";
            li.appendChild(a);
            list.appendChild(li);
        }

        items.forEach(item => {
            if (item.type == "file" && subPath == "" || item.name == "browser" && subPath == "")
                return;

            const li = document.createElement("li");
            const a = document.createElement("a");

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

function goHome() { window.location = "/sfmva"; }