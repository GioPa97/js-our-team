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
        foto: `wayne-barnett-founder-ceo.jpg`,
    },
    {
        nome: `Angela Caroll`,
        ruolo: `Chief Editor`,
        foto: `angela-caroll-chief-editor.jpg`,
    },
    {
        nome: `Walter Gordon`,
        ruolo: `Office Manager`,
        foto: `walter-gordon-office-manager.jpg`,
    },
    {
        nome: `Angela Lopez`,
        ruolo: `Social Media Manager`,
        foto: `angela-lopez-social-media-manager.jpg`,
    },
    {
        nome: `Scott Estrada`,
        ruolo: `Developer`,
        foto: `scott-estrada-developer.jpg`,
    },
    {
        nome: `Barbara Ramos`,
        ruolo: `Graphic Designer`,
        foto: `barbara-ramos-graphic-designer.jpg`,
    }
]
// Milestone 0_______________________________________________________________________________________


// Stampo in console gli oggetti;
for (const persone of team) {
    stampaTeam(persone);
}


// Milestone 1_______________________________________________________________________________________


// Stampo un bigliettino sul DOM;
for (let persone of team) {
    document.getElementById("stampaTeam").innerHTML += ` <strong>INFO COLLABORATORE:</strong> <br><br> nome: ${persone.nome} <br>   ruolo: ${persone.ruolo} <br>   foto: ${persone.foto} <br><br><br>`
}
// Milestone 2_______________________________________________________________________________________














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