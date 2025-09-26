const tabs = [
    {
        id: "random",
        display: "Random Stuff"
    },
    {
        id: "midis",
        display: "Midis"
    }
];

const midis = [
    {
        title: "esponja",
        desc: "Based on an <a href=\"/assets/files/midis/esponja_2.mp4\">incredible video.</a>",
        year: 2022,
        files: [
            { name: "esponja.mid", path: "esponja.mid" }
        ]
    },
    {
        title: "Squid Game vs. MrBeast - Rap Battle!",
        desc: "",
        year: 2022,
        files: [{ name: "MRBEASTMIDI.mid", path: "MRBEASTMIDI.mid" }]
    },
    {
        title: "Crackhouse Escape! (Main Melody) - Raldi's Crackhouse",
        desc: "",
        year: 2022,
        files: [{ name: "CrackhouseEscape.mid", path: "CrackhouseEscape.mid" }]
    },
    {
        title: "Amen Break / cw_amen",
        desc: "",
        year: 2023,
        files: [{ name: "cw_amen.mid", path: "cw_amen.mid" }]
    },
    {
        title: "Yo Quiero Taco Bell (1997)",
        desc: "",
        year: 2024,
        files: [{ name: "Yo Quiero Taco Bell (1997) MIDI.mid", path: "Yo Quiero Taco Bell (1997) MIDI.mid" }]
    },
    {
        title: "BFB / Battle for BFDI - Intro",
        desc: "",
        year: 2025,
        files: [{ name: "bfbIntro.mid", path: "bfbIntro.mid" }]
    },
    {
        title: "A CYBERS WORLD - DELTARUNE Chapter 2",
        desc: "Original song by Toby Fox",
        year: 2025,
        files: [{ name: "A_CYBERS_WORLD.mid", path: "A_CYBERS_WORLD.mid" }]
    }
];

const randoms = [
    {
        title: "Deltarune Countdown",
        desc: "A countdown to DELTARUNE's release! (6/4/2025)",
        ref: "/deltarunetomorrow"
    },
    {
        title: "Type The Digits of PI!",
        desc: "How many PI digits can you type?",
        ref: "/pi-typer"
    },
    {
        title: "Wega Screamer",
        desc: "Wega screamer troll link. <b>(WARNING: LOUD)</b>",
        ref: "/troller"
    },
    {
        title: "I Made This While Learning HTML",
        desc: "Do I look like I know what a stylesheet is, I just want a website of a gosh darn hot dog!",
        ref: "/imlearninghtmlandmadethis"
    },
    {
        title: "The Entire Bible For No Reason",
        desc: "It's just the entire bible. Because why not.",
        ref: "/bible"
    },
    {
        title: "mrbeast.jpg (FOR DISCORD, COPY LINK)",
        desc: "Discord embed, copy link.",
        ref: "https://cuzsie.github.io/mrbeast.jpg"
    }
];

const selector = document.getElementById("selector");
const content = document.getElementById("content-area");

function init() {
    window.addEventListener("load", matchSelectorWidth);
    window.addEventListener("resize", matchSelectorWidth);

    matchSelectorWidth();
}

function loadTabs() {
    selector.innerHTML = "";

    const currentTab = getTab();

    tabs.forEach(tab => {
        const a = document.createElement('a');
        a.innerHTML = tab.id != currentTab ? `<u>${tab.display}</u>` : tab.display;
        a.className = "homepage-link";
        a.style.fontSize = "35px";

        if (tab.id === currentTab) {
            a.style.color = "aqua";
            a.style.pointerEvents = "none";
            a.style.cursor = "default";
        } 
        else {
            a.addEventListener('click', () => setTab(tab.id));
        }

        selector.append(a);
    });
}

function loadElements() {
    if (loadMidiDetail())
        return;

    const page = getTab();
    console.log(page);
    content.innerHTML = "";

    switch (page) {
        case "":
            content.prepend("Select a tab!");
            break;
        case "midis":
            const searchInput = document.createElement("input");
            searchInput.type = "text";
            searchInput.placeholder = "Search MIDIs...";
            searchInput.style = "font-size: 20px; padding: 5px; margin-bottom: 15px; width: 80%;";
            content.append(searchInput);

            const renderMidis = (filter = "") => {
                document.querySelectorAll(".midi-item").forEach(el => el.remove());

                midis.map((midi, index) => ({ midi, index })).reverse().filter(({ midi }) => midi.title.toLowerCase().includes(filter.toLowerCase())).forEach(({ midi, index }) => {
                    const wrapper = document.createElement("div");
                    wrapper.classList.add("midi-item");
                    wrapper.id = "midi";
                    wrapper.style = "text-align: left;";

                    let desc = midi.desc == "" ? "" : `<div class="midi-desc">${midi.desc}</div>`;

                    wrapper.innerHTML = `
                        <div class="subtitle">
                            <a href="/midis/?id=${index}">${midi.title}</a>
                        </div>
                        ${desc}
                        <div class="subdesc">Year: ${midi.year}</div>
                        <div><a href="/assets/files/midis/${midi.files[0].path}" target="_blank" rel="noopener noreferrer">${midi.files[0].name}</a></div>
                        <hr>
                    `;

                    content.append(wrapper);
                    matchSelectorWidth();
                });
            };

            renderMidis();

            searchInput.addEventListener("input", (e) => {
                renderMidis(e.target.value);
            });
            break;
        case "random":
            randoms.forEach(page => {
                const wrapper = document.createElement("div");
                wrapper.style = "text-align: left;";
                wrapper.innerHTML = `
                    <div class="subtitle"><a href="${page.ref}" target="_blank" rel="noopener noreferrer">${page.title}</a></div>
                    <div class="subdesc">${page.desc}</div><hr>
                `;

                content.append(wrapper);
            });
            break;
    }

    matchSelectorWidth();
    loadTabs();
}

function loadMidiDetail() 
{
    const params = new URLSearchParams(window.location.search);

    if (window.location.pathname.startsWith("/midis")) 
    {
        if (!params.has("id")) {
            window.location = "/misc/?page=midis";
            return true;
        }

        const id = parseInt(params.get("id"), 10);

        if (!isNaN(id) && midis[id]) 
        {
            const midi = midis[id];
            const detail = document.getElementById("content-area");
            detail.innerHTML = `
                <div style="font-size:60px;">${midi.title}</div>
                <div>${midi.desc || ""}</div>
                <div><b>Year:</b> ${midi.year}</div>
                <audio controls>
                    <source src="/assets/files/midis/preview/${midi.files[0].path}.mp3" type="audio/mpeg">
                    Your browser does not support the MIDI preview.
                </audio>
                <div>
                    <a href="/assets/files/midis/${midi.files[0].path}" target="_blank">
                        Download: ${midi.files[0].name}
                    </a>
                </div>
                <br>
                <a style="color: white; float: left;" href="/misc/?page=midis">&larr; Back to MIDI list</a>
                <br>
            `;

            return true;
        }
    }

    return false;
}

function matchSelectorWidth() {
    selector.style.width = content.offsetWidth + "px";
}

function setTab(tab) {
    const url = new URL(window.location);
    url.searchParams.set("page", tab);
    window.history.replaceState({}, "", url);

    loadElements();
}

function getTab() {
    const url = new URLSearchParams(window.location.search);
    if (url.has("page")) {
        return url.get("page");
    }
    
    return "";
}
