sequence();

function sequence() {
    setTimeout(doTextbox, 1000);
}

function doTextbox() {
    const txt = 'Chapter 3 + 4\nis in';
    const el = document.getElementById("type");
    let i = 0;

    function typeWriter() {
        const char = txt.charAt(i);
        el.innerHTML += (char === '\n' ? '<br>' : char);
        if (++i < txt.length) setTimeout(typeWriter, 50);
    }

    typeWriter();
}