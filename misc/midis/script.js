const midis = [
    {
        title: "BFB / Battle for BFDI - Intro",
        year: 2025,
        files: [{ name: "bfbIntro.mid", path: "bfbIntro.mid" }]
    },
    {
        title: "Yo Quiero Taco Bell (1997)",
        year: 2024,
        files: [{ name: "Yo Quiero Taco Bell (1997) MIDI.mid", path: "Yo Quiero Taco Bell (1997) MIDI.mid" }]
    },
    {
        title: "Amen Break / cw_amen",
        year: 2023,
        files: [{ name: "cw_amen.mid", path: "cw_amen.mid" }]
    },
    {
        title: "Crackhouse Escape! (Main Melody) - Raldi's Crackhouse",
        year: 2022,
        files: [{ name: "CrackhouseEscape.mid", path: "CrackhouseEscape.mid" }]
    },
    {
        title: "Squid Game vs. MrBeast - Rap Battle!",
        year: 2022,
        files: [{ name: "MRBEASTMIDI.mid", path: "MRBEASTMIDI.mid" }]
    },
    {
        title: "esponja",
        year: 2022,
        files: [
            { name: "esponja.mid", path: "files/esponja.mid" },
            { name: "Based on an incredible video.", path: "esponja_2.mp4" }
        ]
    }
];

const container = document.getElementById("midi-list");

midis.forEach(midi => {
    const wrapper = document.createElement("div");
    wrapper.className = "text-layer";
    wrapper.innerHTML = `
        <div class="midi">
            <div id="small-text" style="color: rgb(107, 255, 255); font-weight: bold;">${midi.title}</div>
            <div id="small-text">Created: ${midi.year}</div>
            ${midi.files.map(file => `
                <a href="../../assets/files/midis/${file.path}">
                    <div id="small-text">${file.name}</div>
                </a>
            `).join("")}
        </div>
        <br><br>
    `;
    container.appendChild(wrapper);
});