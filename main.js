const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
const tr = document.createElement("tr");

const td1 = document.createElement("td");
td1.innerHTML = "firstname";
td1.colSpan = 2;
tr.appendChild(td1);
const td2 = document.createElement("td");
td2.innerHTML = "secondname";
tr.appendChild(td2)



const tr1 = document.createElement("tr");
for(let i of array){
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const tr = document.createElement("tr");

    td1.innerHTML = i.firstname1;
    tr.appendChild(td1);
    if (i.firstname2 === undefined){
        td1.colSpan = 2;
    } else {
        td2.innerHTML = i.firstname2;
        tr.appendChild(td2);
    }

    td3.innerHTML = i.lastname;
    
    tr.appendChild(td3);

    tbody.appendChild(tr)


}


thead.appendChild(tr);
table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);