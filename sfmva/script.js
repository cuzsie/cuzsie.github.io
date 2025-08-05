const vers = [
    {
        title: "Update 0",
        date: "May 2022",
        link: "u0",
        info: "The first iteration of the site."
    },
    {
        title: "Update 1",
        date: "August 2023",
        link: "u1",
        info: "Added 'Michael the game coming soon'."
    },
    {
        title: "Update 1.5",
        date: "August 2023",
        link: "u1-5",
        info: "Site closes operations."
    },
    {
        title: "Update 2",
        date: "August 2023",
        link: "u2",
        info: "Site resumes operations. Adds graphic for Michael."
    },
    {
        title: "Update 3",
        date: "April 2025",
        link: "u3",
        info: "Alt site update. Contains <b>doll.html</b>, and removes Michael from the homepage."
    }//,
    /*{
        title: "Update 4",
        date: "August 1, 2025",
        link: "u5",
        info: "Reviews update. Adds Tobias/The Game, the reviews page, and <b>newspaper.html</b>."
    },
    {
        title: "Update 5",
        date: "August 3, 2025",
        link: "u6",
        info: "Coupon update. Adds the deals page, <b>mother.html, father.html</b>, and more content to Tobias/The Game."
    }*/
];

const container = document.getElementById("list");

vers.forEach(ver => {
    const wrapper = document.createElement("div");
    wrapper.className = "version";
    wrapper.innerHTML = `
    <div class="ver-panel">
        <h3>
            <a href="${ver.link}">
                ${ver.title}
            </a>
            [${ver.date}]
        </h3>
        ${ver.info}
    </div>
    `;

    container.appendChild(wrapper);
});