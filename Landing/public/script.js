const contentArr = {
    item1 : {
        id: 1,
        name : "Great Pyramid of Giza",
        desc : ""
    },
    item2 : {
        id: 2,
        name : "Petra",
        desc : ""
    },
    item3 : {
        id: 3,
        name : "Chichén Itzá",
        desc : ""
    },
    item4 : {
        id: 4,
        name : "Machu Picchu",
        desc : ""
    },
    item5 : {
        id: 5,
        name : "Great Wall of China",
        desc : ""
    },
    item6 : {
        id: 6,
        name : "Taj Mahal",
        desc : ""
    },
    item7 : {
        id: 7,
        name : "Colosseuma",
        desc : ""
    },
    item8 : {
        id: 8,
        name : "Temple of artemis",
        desc : ""
    }
}

const container = document.getElementById('container')
const elements = Object.values(contentArr);

for (const item of elements) {
    const box = document.createElement("div")
    const nameContainer = document.createElement("div")
    const name = document.createElement("p")

    box.classList.add("box")
    box.style.background =  `linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.3) 50%,rgba(0,0,0,0.7) 75%, #000 100%), url(./imgs/0${item.id}.jpg) center center no-repeat`
    box.style.backgroundSize = "cover"
    nameContainer.classList.add("in")
    name.textContent = item.name

    nameContainer.appendChild(name)
    box.appendChild(nameContainer)
    container.appendChild(box)
}






const first = document.getElementById("first");
const last = document.getElementById("last");
const text = document.getElementById("text");
console.log(1);
window.addEventListener("scroll", () => {
    const value = window.scrollY;

    first.style.top = value * 0.7 + "px";
    last.style.bottom = value * 0.5 + "px";
    text.style.top = value * 1 + "px";
})
