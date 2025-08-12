const links = [
    {
        title: "Home",
        ref: "/"
    },
    {
        title: "About",
        ref: "/about"
    },
    {
        title: "Projects",
        ref: "/projects"
    },
    {
        title: "Music",
        ref: "/music"
    },
    {
        title: "Misc",
        ref: "/misc"
    }
];

/*
    NavBar setup
*/
function setupNav() {
    const loc = window.location.pathname;
    let dir = loc.substring(0, loc.lastIndexOf('/'));
    if (dir == "") dir = "/"; // IDK IF THIS WOULD WORK I'M DOING IT JUST INCASE
    console.log(dir);

    const content = document.getElementById("content");
    const navBar = document.createElement('div');
    navBar.className = "panel center-panel";
    navBar.id = "nav";
    content.prepend(document.createElement("br")); // THIS IS STUPID
    content.prepend(navBar);
    
    links.forEach(link => {
        const div = document.createElement('div');
        navBar.append(div);  

        if (link.ref != dir) {
            const a = document.createElement('a');
            a.href = link.ref;
            a.innerHTML = link.title;
            a.className = "homepage-link";
            div.append(a);
        }
        else {
            div.innerHTML = link.title;
            div.className = "homepage-link";
            div.style = "color: aqua;";
        }
    });
}