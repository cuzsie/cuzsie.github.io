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

const container = document.getElementById("list");
let latestUpdate = 0;

setup();

function setup()
{
    vers.forEach(ver => {
        let title = ver.status ? `<a href="${ver.link}">${ver.title}</a>` : `${ver.title} <b><div style="color:red; display: inline;">(UNARCHIVED)</div></b>`;
        let info = linkFormat(ver.info, ver.link);
        let changelog = ver.changelog.length <= 0 ? "" : (() => {
            let log = "<br><h3>CHANGELOG</h3>";
            ver.changelog.forEach(change => {log += `-${linkFormat(change, ver.link)}<br>`;});
            return log;
        })();
        
        const wrapper = document.createElement("div");
        wrapper.className = "version";
        wrapper.innerHTML = `
            <div class="ver-panel">
                <div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <h3>${title}</h3>
                        [${ver.date}]
                    </div>
                    <button onclick="window.location.href = '${ver.link}'">Open</button>
                    <button onclick="window.location.href = 'browser/?path=${ver.link}'">Browse assets...</button>
                </div>
                <hr>
                <div>
                    ${info}
                    ${changelog}
                <div>
            </div>
        `;

        container.appendChild(wrapper);
    });

    latestUpdate = vers.length - 1;
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

function loadLatest() { window.location.href = `${vers[latestUpdate].link}`; }
function openAssetBrowser() { window.location = "browser"; }