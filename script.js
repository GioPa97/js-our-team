/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe*/
/*Nome            Ruolo                 Foto (nome file / url di un immagine)
Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	            scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg*/

// Creo un Array di oggetti:_________________________________________________________________________
const team = [
    {
        nome: `Wayne Barnett`,
        ruolo: `Founder&CEO`,
        foto: `./img/wayne-barnett-founder-ceo.jpg`,
    },
    {
        nome: `Angela Caroll`,
        ruolo: `Chief Editor`,
        foto: `./img/angela-caroll-chief-editor.jpg`,
    },
    {
        nome: `Walter Gordon`,
        ruolo: `Office Manager`,
        foto: `./img/walter-gordon-office-manager.jpg`,
    },
    {
        nome: `Angela Lopez`,
        ruolo: `Social Media Manager`,
        foto: `./img/angela-lopez-social-media-manager.jpg`,
    },
    {
        nome: `Scott Estrada`,
        ruolo: `Developer`,
        foto: `./img/scott-estrada-developer.jpg`,
    },
    {
        nome: `Barbara Ramos`,
        ruolo: `Graphic Designer`,
        foto: `./img/barbara-ramos-graphic-designer.jpg`,
    }
]
// Milestone 0_______________________________________________________________________________________


// Stampo in console gli oggetti;
for (const persone of team) {
    stampaTeam(persone);
}


// Milestone 1_______________________________________________________________________________________


/* Stampo un bigliettino sul DOM;
for (let persone of team) {
    document.getElementById("stampaTeam").innerHTML += ` <strong>INFO COLLABORATORE:</strong> <br><br> nome: ${persone.nome} <br>   ruolo: ${persone.ruolo} <br>   foto: ${persone.foto} <br><br><br>`
}
// Milestone 2_______________________________________________________________________________________ */
// Creo un ciclo che innietti nell'html le card contenenti le informazioni degli oggetti;
for (let persone of team) {
    document.getElementById("stampaTeam").innerHTML += `
    <div class="col-12 col-md-5 col-lg-3 m-2 pb-2  pt-3 ">
    <img src=${persone.foto} class="card-img-top " alt="...">
    <div class="card-body">
    <h5 class="card-title mt-2">${persone.ruolo}</h5>
    <p class="card-text">${persone.nome}</p>
    `
}















//FUNZIONI DICHIARATE_________________________________________________________________________________
function stampaTeam(team) {
    console.log(
        `
    INFO COLLABORATORE--------------------------------
        nome: ${team.nome}
        ruolo: ${team.ruolo}
        foto: ${team.foto} 
    --------------------------------------------------
    
            `
    )
}


//_____________________________________________________________________________________________________