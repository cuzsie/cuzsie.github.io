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
        info: "The first site update.<br><br>-Added 'Michael the game coming soon'.",
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
        info: "Site resumes operations.<br><br>-Adds graphic for Michael.",
        status: true
    },
    {
        title: "Update 3",
        date: "April 2025",
        link: "u3",
        info: "Alt site update.<br><br>-Adds %doll.html% <br>-Removes Michael from the homepage.",
        status: true
    },
    {
        title: "Update 4",
        date: "August 1, 2025",
        link: "u4",
        info: "Reviews update.<br><br>-Removes doll.html<br>-Adds Tobias's Game ( %tobias.html% )<br>-Adds the reviews page<br>-Adds %newspaper.html% <br>-Adds %michael.html% <br><br>Archived by @digitalswirl on Discord!",
        status: true
    },
    {
        title: "Update 5",
        date: "August 3, 2025",
        link: "u5",
        info: "Coupon update.<br><br>-Adds the deals page ( %coupon.html% )<br>-Adds 2 new coupon codes (KZ392, ft23)<br>-Adds %mother.html% <br>-Adds %father.html% <br>-Adds more content to Tobias's Game ( %tobias.html% )<br>-Obfuscated the source code",
        status: true
    },
    {
        title: "Update 6 (Latest)",
        date: "August 6, 2025",
        link: "u6",
        info: "Michael update.<br><br>-Adds %autumn.html% <br>-One new coupon code (988549849898598999990)<br>-New room in Tobias's Game ( %tobias.html% )<br>-Adds Michael's Game after entering the secret room in Tobias's ( %michael.html% )<br>-Adds Tobias The Game ( %tobias0.html% )<br>-1 new newspaper on %newspaper.html% ( %newspaper.html?sorry% )<br>-Encrypts certain strings in the source code",
        status: true
    },
];

const container = document.getElementById("list");
let latestUpdate = 0;

setup();

function setup()
{
    vers.forEach(ver => {
        let info = ver.info;
        let infoSplit = info.split(" ");
        
        infoSplit.forEach(i => {
            if (i.startsWith("%") && i.endsWith("%")) {
                const clean = i.replaceAll("%", "");

                console.log(i + " valid html link");
                infoSplit[infoSplit.indexOf(i)] = ver.status ? `<a href="${ver.link}/${clean}">${clean}</a>` : clean;
            }
        });
        
        console.log(infoSplit.join(" "));
        info = infoSplit.join(" ");

        let title = ver.status ? `<a href="${ver.link}">${ver.title}</a>` : `${ver.title} <b><div style="color:red; display: inline;">(UNARCHIVED)</div></b>`;
        const wrapper = document.createElement("div");
        wrapper.className = "version";
        wrapper.innerHTML = `
            <div class="ver-panel">
                <h3>
                ${title}
                [${ver.date}]
                </h3>
                ${info}
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

function reset()
{
    localStorage.removeItem('dollState');
    localStorage.removeItem('sfmData');
    
    document.getElementById('reset-confirm').hidden = false;
}