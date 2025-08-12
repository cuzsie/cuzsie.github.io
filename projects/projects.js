const projects = [
    {
        name: "Undertale FLP Project",
        desc: "A project dedicated to recreating all of Undertale's music with 90% accuracy in FL Studio.",
        ref: "https://github.com/cuzsie/UndertaleMusicFiles"
    },
    {
        name: "Raldi's Crackhouse",
        desc: "The best Baldi's Basics Classic mod ever.<br><b>(I no longer work on this game pls don't ask me about it.)<b>",
        ref: "https://gamejolt.com/games/raldicrackhouse/769103"
    },
    {
        name: "PI Typer",
        desc: "Type the digits of the infamous PI! (for some reason)",
        ref: "/pi-typer"
    },
    {
        name: "superf***ingmario Version Archive",
        desc: "An archive of all site updates for superf***ingmario.com, a currently ongoing ARG.",
        ref: "/sfmva"
    }
]

function loadProjects()
{
    console.log("projects wee");

    const entryArea = document.getElementById("projects-panel");

    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.innerHTML += `
        <h2><a href=${project.ref} style="color: aqua;" target="_blank" rel="noopener noreferrer">${project.name}</a></h2>
        <div>${project.desc}</div><hr>
        `;

        entryArea.append(projectDiv);
    });
}