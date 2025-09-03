const words = [
    "is Pomni",
    "is Elon Musk",
    "is a replica of Andy's room from Toy Story"
];

const txt = document.getElementById("text");
txt.innerHTML = words[Math.floor(Math.random() * words.length)];