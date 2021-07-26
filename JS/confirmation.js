//------------------------------------------------------------ CREATION HEADER FOOTER 

// Pour pouvoir créer les élements tel que le Header, il faut d'abord récupérer le seul élément présent dans le HTML, à savoir le body.

let body = document.querySelector("body");

// ----------------------------------------------------Création du header et de ses composants

let header = document.createElement("header");
body.appendChild(header);

let headerBackGround = document.createElement("div");
header.appendChild(headerBackGround);
headerBackGround.setAttribute("class", "bg-dark");

let headerContainer = document.createElement("div");
headerBackGround.appendChild(headerContainer);
headerContainer.setAttribute("class", "container");

let headerRow = document.createElement("div");
headerContainer.appendChild(headerRow);
headerRow.setAttribute("class", "row");

// -------------------------------------------------------------------Création du menu de navigation

let nav = document.createElement("nav");
headerRow.appendChild(nav);
nav.setAttribute("class", "col navbar navbar-expand-lg navbar-dark");

let navAnchor = document.createElement("a");
nav.appendChild(navAnchor);
navAnchor.setAttribute("class", "navbar-brand");
navAnchor.href = "index.html";

let logo = document.createElement("img");
navAnchor.appendChild(logo);
logo.src = "img/logo.png";
logo.style.width = "100px";
logo.style.height = "50px";
logo.alt = "Logo Orinoco";

//------------------------------------------------ Création du bouton déroulant dont l'execution se fait grace aux liens dans le HTML

let navBouton = document.createElement("button");
nav.appendChild(navBouton);
navBouton.setAttribute("class", "navbar-toggler");
navBouton.setAttribute("type", "button");
navBouton.setAttribute("data-toggle", "collapse");
navBouton.setAttribute("data-target", "#navbarContent");
navBouton.setAttribute("aria-controls", "navbarSupportedContent");
navBouton.setAttribute("aria-expanded", "false");
navBouton.setAttribute("aria-label", "Toggle navigation");

let spanButon = document.createElement("span");
navBouton.appendChild(spanButon);
spanButon.setAttribute("class", "navbar-toggler-icon");

let navBarContent = document.createElement("div");
nav.appendChild(navBarContent);
navBarContent.setAttribute("id", "navbarContent");
navBarContent.setAttribute("class", "collapse navbar-collapse");

let listeNav = document.createElement("ul");
navBarContent.appendChild(listeNav);
listeNav.setAttribute("class", "navbar-nav");

let itemActiv = document.createElement("li");
listeNav.appendChild(itemActiv);
itemActiv.setAttribute("class", "nav-item active");

let itemActivAnchor = document.createElement("a");
itemActiv.appendChild(itemActivAnchor);
itemActivAnchor.setAttribute("class", "nav-link");
itemActivAnchor.href = "index.html";
itemActivAnchor.textContent = "Nos Orinocours";

let otherItem = document.createElement("li");
listeNav.appendChild(otherItem);
otherItem.setAttribute("class", "nav-item");

let otherItemAnchor = document.createElement("a");
otherItem.appendChild(otherItemAnchor);
otherItemAnchor.textContent = "Les plus populaires";
otherItemAnchor.href = "#";
otherItemAnchor.setAttribute("class", "nav-link");

let otherItem2 = document.createElement("li");
listeNav.appendChild(otherItem2);
otherItem2.setAttribute("class", "nav-item");

let otherItemAnchor2 = document.createElement("a");
otherItem2.appendChild(otherItemAnchor2);
otherItemAnchor2.textContent = "Mon panier";
otherItemAnchor2.href = "basket.html";
otherItemAnchor2.setAttribute("class", "nav-link");
otherItemAnchor2.href = "basket.html";

//------------------------------------------------------------ Logo du panier

let logoPanier = document.createElement("i");
logoPanier.setAttribute("class", "fas fa-shopping-cart ");
logoPanier.style.color = "white";
otherItemAnchor2.appendChild(logoPanier);
logoPanier.style.marginLeft = "4px";

let articleDansPanier = document.createElement("span");
logoPanier.appendChild(articleDansPanier);
articleDansPanier.setAttribute("id", "cardcount");
articleDansPanier.style.marginLeft = "4px";



// ----------------------------------------------------------------Création du main dans lequel apparaitront les produits

let main = document.createElement("main");
body.appendChild(main);
main.setAttribute("id", "main");
main.setAttribute("class", "container");

let conteneurProduit = document.createElement("div");
conteneurProduit.setAttribute("class", "row");
conteneurProduit.style.marginTop = "7%"
conteneurProduit.style.display = "flex";
conteneurProduit.style.flexWrap = "wrap";
// conteneurProduit.style.justifyContent = "space-around"
main.appendChild(conteneurProduit);

// ------------------------------------------------------------------------Création du footer

let footer = document.createElement("footer");
body.appendChild(footer);
footer.setAttribute("class", " col py-5 bg-dark");
main.style.minHeight = "700px"

let containerFooter = document.createElement("div");
containerFooter.setAttribute("class", "container");
footer.appendChild(containerFooter);



let pFooter = document.createElement("p");
containerFooter.appendChild(pFooter);
pFooter.setAttribute("class", "m-0 text-center text-white");
pFooter.textContent = "Copyright By Chikibraaaaaah 2021";



// ------------------------------------------------------ Contenu de la page

//-------------------------- Message de remerciements avec numéro commande

const divRemerciement = document.createElement('div');
divRemerciement.setAttribute('class','row')
main.appendChild(divRemerciement)
main.style.width = "90%"

// ------------------------------------------------------------------ On récupère le nom du formualaire pour les remerciements

let contact = sessionStorage.getItem(('Contact'));
// console.log(contact)
let nomAcheteur = JSON.parse(contact);
console.log(nomAcheteur[0].lastName);


// ----------------------------------------------------- Texte remerciements

const paragrapheRemerciements = document.createElement('p');
paragrapheRemerciements.setAttribute('class','col col-md-12 col-xl-8 text-center')
divRemerciement.appendChild(paragrapheRemerciements);
const montantTotal = sessionStorage.getItem('Montant Total')
paragrapheRemerciements.textContent = "Nous vous remercions M/Mme " + nomAcheteur[0].lastName +" pour votre commande référence: " + "CMD#" + (Math.random() * 10000000000000000) + " pour uun montant de " + montantTotal + " €."


// ----------------------------------------------------- Image libre de droits utilisée

const illustrationMerci = document.createElement('img');
divRemerciement.appendChild(illustrationMerci);
illustrationMerci.src = "img/cimer.jpg"
divRemerciement.style.width = "100%"
illustrationMerci.setAttribute('class','col col-xl-8  ')
illustrationMerci.style.width = "60%";
divRemerciement.style.justifyContent = "center"

// ------------------------------------------------------ On supprime le storage pour pouvoir reprendre depuis le début

sessionStorage.removeItem("Mon Panier");
sessionStorage.removeItem('Total Article');
sessionStorage.removeItem('Montant Total')
