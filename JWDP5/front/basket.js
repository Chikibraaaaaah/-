// Ajout d'un header, main

let body = document.querySelector('body');


// Header

let header = document.createElement('header');
body.appendChild(header);
let nav = document.createElement('nav');
header.appendChild(nav);
nav.setAttribute('class', 'navbar navbar-expand-lg  navbar-dark bg-dark fixed-top');


let navContainer = document.createElement('div');
nav.appendChild(navContainer);
navContainer.setAttribute('class','container');

let anchor = document.createElement('a');
navContainer.appendChild(anchor);
anchor.href = "index.html";
anchor.setAttribute('class',"navbar-brand");

let mainTitle = document.createElement('h1');
anchor.appendChild(mainTitle);
mainTitle.textContent = "Orinoco";

// Ajout des styles Bootstrap

let navbarButton = document.createElement('button');
navContainer.appendChild(navbarButton);
navbarButton.setAttribute('class',"navbar-toggler")
navbarButton.setAttribute('type',"button");
navbarButton.setAttribute('data-toggle','collapse')
navbarButton.setAttribute('data-targer', "#navbarResponsive")
navbarButton.setAttribute('aria-controls',"navbarResponsive")
navbarButton.setAttribute('aria-expended',"false")
navbarButton.setAttribute('aria-label','toggle-navigation')

let spanNavbar = document.createElement('span');
navbarButton.appendChild(spanNavbar);
spanNavbar.setAttribute('class','navbar-toggler-icon');

let collapseNavbar = document.createElement('div');
navContainer.appendChild(collapseNavbar);
collapseNavbar.setAttribute('class',"collapse navbar-collapse");
collapseNavbar.setAttribute('id',"navbarResponsive");

let listNav = document.createElement('ul');
collapseNavbar.appendChild(listNav);
listNav.setAttribute('class','navbar-nav ml-auto');

let choixProduit = document.createElement('li');
listNav.appendChild(choixProduit);
choixProduit.setAttribute('class',"nav-item active");

let lienChoixProduit = document.createElement('a');
choixProduit.appendChild(lienChoixProduit);
lienChoixProduit.setAttribute('class',"nav-link")
lienChoixProduit.href = "index.html";
lienChoixProduit.textContent = "Nos Orinocours";

let spanCurrent = document.createElement('span');
lienChoixProduit.appendChild(spanCurrent);
spanCurrent.setAttribute('class','sr-only')

let LesPlusPop = document.createElement('li');
listNav.appendChild(LesPlusPop);
let lienLesPlusPop = document.createElement('a');
LesPlusPop.appendChild(lienLesPlusPop);

lienLesPlusPop.setAttribute('class','nav-item');
lienLesPlusPop.setAttribute('class','nav-link')
lienLesPlusPop.href = "#";
lienLesPlusPop.textContent = "Les plus populaires";

let monPanier = document.createElement('li');
listNav.appendChild(monPanier);
let lienMonPanier = document.createElement('a');
monPanier.appendChild(lienMonPanier);
monPanier.setAttribute('class','nav-item');
lienMonPanier.setAttribute('class',"nav-link");
lienMonPanier.href = "basket.html";
lienMonPanier.textContent = "Mon panier";

let contact = document.createElement('li');
listNav.appendChild(contact);
let lienContact = document.createElement('a');
contact.appendChild(lienContact);
contact.setAttribute('class','nav-item');
lienContact.setAttribute('class','nav-link')
lienContact.href = "#";
lienContact.textContent = "Contact";

// Main

let main = document.createElement('main');
body.appendChild(main);
main.setAttribute('id','main')
main.style.marginTop = "5%";

// Footer


let footer = document.createElement('footer');
body.appendChild(footer);
footer.setAttribute('class',"py-5 bg-dark");

let containerFooter = document.createElement('div');
containerFooter.setAttribute('class','container');
footer.appendChild(containerFooter);

let pFooter = document.createElement('p');
containerFooter.appendChild(pFooter);
pFooter.setAttribute('class',"m-0 text-center text-white");
pFooter.textContent = "Copyright By Chikibraaaaaah 2021";

// Appel des produits

async function appelDesProduits (){
    let response = await fetch ('http://localhost:3000/api/teddies');
    let responseJson = await response.json();

    try {

        for ( var i = 0; i < responseJson.length; i++){
            let teddy = responseJson[i];
            let teddyId = teddy._id;

            
            
            // console.log(teddy);

            // Information reçues mises dans le local storage
            sessionStorage.setItem(teddyId, JSON.stringify(teddy))

            
              
        }
    }catch(e){
        console.log('Soucis');
    }
}
appelDesProduits();


// Création du tableau récapitulatif

sessionStorage.getItem('Mon panier');

// Création d'un tableau.
// La premiere ligne comprend apercu, designation, quantite, prix
// La dernière ligne fait le total
// Automatiser la création de ligne pour chaque article contenu dans le session storage


// Création de la première ligne

let recap = document.createElement('div');
main.appendChild(recap);
recap.style.border = "3px solid red";
recap.setAttribute('class','container')

let premiereLigne = document.createElement('div');
premiereLigne.setAttribute('class','row')
premiereLigne.style.border = "3px solid blue";
premiereLigne.style.display = "flex";
premiereLigne.style.justifyContent = "center";
recap.appendChild(premiereLigne);

let apercu = document.createElement('p');
apercu.style.textAlign = "center"
premiereLigne.appendChild(apercu);
apercu.setAttribute('class','col-4');
apercu.textContent = "Aperçu";
apercu.style.margin = "auto auto";

let designation = document.createElement('p');
premiereLigne.appendChild(designation);
designation.setAttribute('class','col-4');
designation.textContent = "Désignation"; 
designation.style.margin = "auto auto";

let specif = document.createElement('p');
premiereLigne.appendChild(specif);
specif.setAttribute('class','col-2');
specif.textContent = "Coloris";
specif.style.margin = "auto auto";

let quantite = document.createElement('p');
premiereLigne.appendChild(quantite);
quantite.setAttribute('class','col-1');
quantite.textContent = "Quantité";
quantite.style.margin = "auto auto";

let prix = document.createElement('p');
premiereLigne.appendChild(prix);
prix.setAttribute('class','col-1');
prix.textContent = "Prix";
prix.style.margin = "auto auto";


// Création d'une fonction qui créera une nouvelle ligne pour chaque article dans le storage.

let panierTotal = JSON.parse(sessionStorage.getItem('Mon Panier'));
console.log(panierTotal)


for ( var i = 0; i < panierTotal.length; i++){
 
        let articleUnitaire = panierTotal[i];
        // let teddyName = articleUnitaire.teddyName;
        // let imageTeddy = articleUnitaire.teddyImg;
        // let couleurTeddy = articleUnitaire.couleurFinale;
        // let quantiteFinale = articleUnitaire.quantiteChoisie;
        // let prixParTedddy = articleUnitaire.prixTotalParTeddy;

        creationLigne(articleUnitaire);

}

function creationLigne(articleUnitaire){
        let ligne = document.createElement('div');
        recap.appendChild(ligne);
        ligne.style.border = "3px solid green";
        ligne.setAttribute('class','row');
        ligne.style.display = "flex";    
        
        let apercuTeddy = document.createElement('img');
        ligne.appendChild(apercuTeddy);
        apercuTeddy.src = articleUnitaire.teddyImg;
        apercuTeddy.setAttribute('class','col-4');
        // apercuTeddy.style.border = "2px solid grey";
        apercuTeddy.style.width = "300px"
        apercuTeddy.style.margin = "auto auto"

        let designationTeddy = document.createElement('p');
        ligne.appendChild(designationTeddy);
        designationTeddy.setAttribute('class','col-4');
        designationTeddy.textContent = articleUnitaire.teddyName;
        designationTeddy.style.margin = "auto auto"
      

        let color = document.createElement('p');
        ligne.appendChild(color);
        color.setAttribute('class','col-2');
        color.textContent = articleUnitaire.couleurFinale;
        color.style.margin = "auto auto"
        
       
        let quantiteFinale = document.createElement('p');
        ligne.appendChild(quantiteFinale);
        quantiteFinale.setAttribute('class','col-1');
        quantiteFinale.textContent = articleUnitaire.quantiteChoisie;
        quantiteFinale.style.margin= "auto auto"
        
        let  prixFinal = document.createElement('p');
        ligne.appendChild(prixFinal);
        prixFinal.setAttribute('class','col-1');
        prixFinal.textContent = articleUnitaire.prixTotalParTeddy;
        prixFinal.style.margin= "auto auto";
}




