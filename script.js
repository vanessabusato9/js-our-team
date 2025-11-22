const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "img/male1.png"
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "img/female1.png"
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "img/male2.png"
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "img/female2.png"
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "img/male3.png"
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "img/female3.png"
    }
];

function cards() { //genera le cards
    const containerEl = document.getElementById("cards-container"); //seleziona contenitore HTML dove inserire le card
    let html = ""; //stringa vuota che accumulerà tutte le card in html


    for (const member of teamMembers) { // for of scorre ogni elemento member dell'array
        html += `<div class="card">
                <img src="${member.img}" alt="${member.name}">
                <h3>${member.name}</h3>
                <div class="role">${member.role}</div>
                <a href="mailto:${member.email}">${member.email}</a>
             </div>`;

    }

    containerEl.innerHTML = html; // inserisce le card nel DOM
}
    cards(); // chiama la funzione per renderizzare le card