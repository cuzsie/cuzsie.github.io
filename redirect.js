const pages = [
    "/",
    "/projects",
    "/about",
    "/music",
    "/misc"
];

let dir = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
if (dir == "") dir = "/"; 

if (pages.includes(dir)) {
    console.log("rah");
    window.location.href = "/changes.html";
}