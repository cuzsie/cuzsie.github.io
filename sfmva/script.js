const vers = [
    {
        title: "Update 0",
        date: "May 2022",
        link: "u0",
        info: "The first iteration of the site.",
        status: true
    },
    {
        title: "Update 1",
        date: "August 2023",
        link: "u1",
        info: "Added 'Michael the game coming soon'.",
        status: true
    },
    {
        title: "Update 1.5",
        date: "August 2023",
        link: "u1-5",
        info: "Site closes operations.",
        status: true
    },
    {
        title: "Update 2",
        date: "August 2023",
        link: "u2",
        info: "Site resumes operations. Adds graphic for Michael.",
        status: true
    },
    {
        title: "Update 3",
        date: "April 2025",
        link: "u3",
        info: "Alt site update. Contains <b>doll.html</b>, and removes Michael from the homepage.",
        status: true
    },
    {
        title: "Update 4",
        date: "August 1, 2025",
        link: "u4",
        info: "Reviews update. Adds Tobias/The Game, the reviews page, and <b>newspaper.html</b>.<br>Unarchived due to no public archives existing yet.",
        status: false
    },
    {
        title: "Update 5 (Latest)",
        date: "August 3, 2025",
        link: "u5",
        info: "Coupon update. Adds the deals page, <b>mother.html, father.html</b>, and more content to Tobias/The Game.",
        status: true
    }
];

const container = document.getElementById("list");
let latestUpdate = 0;

setup();

function setup()
{
    vers.forEach(ver => {
        let title = ver.status ? `<a href="${ver.link}">${ver.title}</a>` : `${ver.title} <b><div style="color:red; display: inline;">(UNARCHIVED)</div></b>`;
        const wrapper = document.createElement("div");
        wrapper.className = "version";
        wrapper.innerHTML = `
            <div class="ver-panel">
                <h3>
                ${title}
                [${ver.date}]
                </h3>
                ${ver.info}
            </div>
            `;

        container.appendChild(wrapper);
    });

    latestUpdate = vers.length - 1;
}

function loadLatest()
{
    window.location.href = `${vers[latestUpdate].link}`;
}