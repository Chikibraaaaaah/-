
//------------------------------------------------------ CREATION HEADER - FOOTER

// ------------------------------------------------ Récupération du body.

let body = document.querySelector("body");

// ------------------------------------------------Création du header et de ses composants

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



// ------------------------------------------------- HEADER ------------ menu de navigation

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

//  ------------------------------HEADER -- Création du bouton déroulant dont l'execution se fait grace aux liens dans le HTML

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

let logoPanier = document.createElement("i");
logoPanier.setAttribute("class", "fas fa-shopping-cart ");
logoPanier.style.color = "white";
otherItemAnchor2.appendChild(logoPanier);
logoPanier.style.marginLeft = "4px";

//  ------------------------------------------ Rajout du nombre d'article dans le panier. Par défaut 0

let articleDansPanier = document.createElement("span");
logoPanier.appendChild(articleDansPanier);
articleDansPanier.setAttribute("id", "cardcount");
articleDansPanier.style.marginLeft = "4px";

// ----------------------------------------------Création du MAIN dans lequel apparaitront les produits

let main = document.createElement("main");
body.appendChild(main);
main.setAttribute("id", "main");
main.setAttribute("class", "container");

let conteneurProduit = document.createElement("div");
conteneurProduit.setAttribute("class", "row");
conteneurProduit.style.display = "flex";
conteneurProduit.style.flexWrap = "wrap";
// conteneurProduit.style.justifyContent = "space-around"
main.appendChild(conteneurProduit);

// ---------------------------------------------------------------         Création du FOOTER

let footer = document.createElement("footer");
body.appendChild(footer);
footer.setAttribute("class", "py-5 bg-dark");

let containerFooter = document.createElement("div");
containerFooter.setAttribute("class", "container");
footer.appendChild(containerFooter);

let pFooter = document.createElement("p");
containerFooter.appendChild(pFooter);
pFooter.setAttribute("class", "m-0 text-center text-white");
pFooter.textContent = "Copyright By Chikibraaaaaah 2021";


























//------------------------------------------- Il faut maintenant créer un tableau récapitulatif reprenant les éléments stockés dans le storage.
//------------------------------------ Si le panier est vide, mettre un avertissement, si le panier contient au moins un article, créer un ligne récapitulatif

//------------------------------------------------------------             Contenu de la page

// -------------------------------------------------------- On récupèr les infos stockées dans le storage

let contenuPanier = localStorage.getItem("Mon Panier");
let panierParse = JSON.parse(contenuPanier);
// console.log(panierParse)
totalArticle = localStorage.getItem("Total Article");

// ----------------------------------------------------------      Si le panier ne contient aucun article

function avertirPanierVide(conteneur) {
  conteneur = document.createElement("div");
  main.appendChild(conteneur);
  let titre = document.createElement("h2");
  conteneur.appendChild(titre);
  conteneur.setAttribute("id", "panierVide");
  conteneur.setAttribute("class", "row ");
  conteneur.style.justifyContent = "center";

  let messagePanierVide = document.createElement("h2");
  conteneur.appendChild(messagePanierVide);
  messagePanierVide.textContent = "Oups, votre panier est vide";
  messagePanierVide.setAttribute("class", "mt-4 col-12 col-md-12 col-xl-12");
  messagePanierVide.style.textAlign = "center";

  let imagePanierVide = document.createElement("img");
  conteneur.appendChild(imagePanierVide);
  imagePanierVide.src = "img/vide.png";
  imagePanierVide.setAttribute("class", "col-12 col-md-6 col-xl-4");
}

if (panierParse == null || totalArticle == 0) {
  avertirPanierVide();
} else {
  // -------------------------------------------------------      Le panier contient au moins un article

  // console.log(panierParse.length);

  let title = document.createElement("h1");
  main.appendChild(title);
  title.textContent = "Votre commande en cours";
  
  title.setAttribute("class", "text-center mt-4 mb-5");

  //------------------------------------------------------------------- Création de la première ligne

  let recap = document.createElement("div");
  main.appendChild(recap);
  recap.setAttribute("id", "recap ");
  recap.setAttribute("class", "row ");

  // ----------------------------                             Pour chaque article se trouvant dans le panier

  var commandeFinale = [];

  for (i in panierParse) {
    var articleUnitaire = panierParse[i];
    commandeFinale.push(articleUnitaire.teddyId);
    creationLigne(articleUnitaire);
  }

  // -----------------------------------------      FONCTION POUR CREER REPRESENTATION DU PANIER SELON localStorage

  function creationLigne(articleUnitaire) {
    //-------------------------------------------------- Création de la div contenante toute les informations d'un produit
    let ligne = document.createElement("div");
    ligne.setAttribute("id", "ligneProd");
    recap.appendChild(ligne);
    ligne.setAttribute("class", "row border ligne");

    //-------------------------------------------------------------------- Apercu de l'achat
    let apercuAchat = document.createElement("img");
    ligne.appendChild(apercuAchat);
    apercuAchat.setAttribute("class", "col-xl-3 text-center ");
    apercuAchat.src = articleUnitaire.img;
    apercuAchat.style.margin = "auto auto";

    //---------------------------------------------------------------------- Nom de l'achat
    let designationAchat = document.createElement("p");
    ligne.appendChild(designationAchat);
    designationAchat.setAttribute("class", "col-xl-2 text-center");
    designationAchat.innerHTML = "<em>Article</em> : </br> " + articleUnitaire.name;
    designationAchat.style.margin = "auto auto";

    // -----------------------------------------------Couleur de l'achat
    let couleurChoisie = document.createElement("p");
    ligne.appendChild(couleurChoisie);
    couleurChoisie.setAttribute("class", "col-xl-2 text-center");
    couleurChoisie.innerHTML = "<em>Couleur</em> : </br>" + articleUnitaire.couleur;
    couleurChoisie.style.margin = "auto auto";

    //-------------------------------------------- Quantité commandée
    let qtyCommande = document.createElement("p");
    ligne.appendChild(qtyCommande);
    qtyCommande.setAttribute("type", "number");
    qtyCommande.setAttribute("class", "col-xl-2 text-center ");
    qtyCommande.innerHTML = "<em>Quantité</em> :</br>" + articleUnitaire.quantite;
    qtyCommande.style.margin = "auto auto";

    // ---------------------------------------------Sous-total de l'article choisi
    let sousTotalAchat = document.createElement("p");
    ligne.appendChild(sousTotalAchat);
    sousTotalAchat.setAttribute("class", "col-xl-2  text-center");
    sousTotalAchat.innerHTML =
      "<em>Sous-total</em> :</br>" + articleUnitaire.sousTotal + " €";
    sousTotalAchat.style.margin = "auto auto";

    // -------------------------------------------- Création d'un bouton pour supprimer la ligne

    // -------------------------------------------------Le contenant du bouton
    let conteneurBoutonSupp = document.createElement("div");
    ligne.appendChild(conteneurBoutonSupp);
    conteneurBoutonSupp.style.margin = "auto auto";
    conteneurBoutonSupp.setAttribute("class", "col-xl-1 ");


    // ----------------------------------------------------Le bouton de suppression par ligne

    let supprimerArticle = document.createElement("button");
    conteneurBoutonSupp.appendChild(supprimerArticle);
    supprimerArticle.setAttribute("class", " col  ");
    supprimerArticle.style.backgroundColor = "white"
     supprimerArticle.style.border = "white";

    // Ajout d'effet au survol du bouton de suppression

     supprimerArticle.addEventListener('mouseover',function (event){
       event.target.style.color = "red";
       setTimeout(function(){
         event.target.style.color = "blue"
       },500)
     },false)
    

    // --------------------------------------------Illustration poubelle utilisée
    let logoPoubelle = document.createElement("i");
    logoPoubelle.setAttribute("class", "far fa-trash-alt ");
  
    logoPoubelle.style.color = "blue"
    supprimerArticle.appendChild(logoPoubelle);

    // ---------------------------                           FONCTION SUPPRIMER UN ARTICLE

    supprimerArticle.onclick = function () {
      // ------------------------------------------------ On récupère le panier enregistré
      localStorage.getItem("Mon Panier");

      // ------------------------------------- Pour splice, on a besoin de l'index du produit à supprimer
      let indexProduit = panierParse.indexOf(articleUnitaire);
      // console.log(indexProduit);

      // ---------------------------- On veut supprimer qu'1 seul article,  correspondant à l'index du produit concerné
      var articleSupprime = panierParse.splice(indexProduit, 1);
      // console.log(articleSupprime[0].quantite);

      // ------------------------------------------------ On sauvegarde le panier actuel.
      localStorage.setItem("Mon Panier", JSON.stringify(panierParse));

      // On modifie les tableaux quantité et total€ dans storage
      let totalArticle = localStorage.getItem("Total Article");
      totalArticle = parseInt(totalArticle) - articleSupprime[0].quantite;

      // console.log(totalArticle);
      localStorage.setItem("Total Article", JSON.stringify(totalArticle));

      let montantTotal = localStorage.getItem("Montant Total");
      montantTotal = parseInt(montantTotal) - articleSupprime[0].sousTotal;
      localStorage.setItem("Montant Total", JSON.stringify(montantTotal));

      recap.removeChild(ligne);

      refresh();
    };
  }

  // ------------------------------------------------------------------     RECAP DE LA COMMANDE

  // -------------------------------------  Création d'une fonction pour automatiser l'affichage en fonction des quantités
  // --------------------------------sera executée au chargement de la page panier, puis à chaque fois que l'on supprimera un article

  function refresh(totalArticle, montantTotal) {
    // ----------------------------------------------------Récupération des deux paramètres
    totalArticle = localStorage.getItem("Total Article");
    montantTotal = localStorage.getItem("Montant Total");
    pRecapNbArticle.style.marginTop = "20px";
    pRecapNbArticle.textContent = "Nombre d'article(s): " + totalArticle;
    pRecapNbArticle.setAttribute('class','col-8')

    // -------------------------------------- Paragraphe contenant le prix avant condition pour affichage message lié au port et au nombre d'article dans panier
    pSousTotal.textContent = "Sous-total:" + " " + montantTotal + " €";
    pSousTotal.setAttribute('class','col-8')
    if (montantTotal >= 150) {
      fraisDePort.innerHTML =
        '<i class="fas fa-paw" id="papate" ></i> Vous bénéficiez des frais de port offerts';
      let papate = document.getElementById("papate");
      papate.style.color = "green";fraisDePort.setAttribute('class','col')
    }

    //-------------------------------------- Si le panier retombe à ZERO, on cache les précdants éléments, on appelle la fonction qui affiche le panier vide
    else if (totalArticle == 0) {
      recap.style.display = "none";
      formulaire.style.display = "none";
      validationButon.style.display = "none";
      avertirPanierVide();
    }
    // -------------------------------------------------------- Conditions et calcul des frais de port
    else {
      fraisDePort.innerHTML =
        '<i class="fas fa-heart-broken" id="coeur"></i> Plus que ' +
        (150 - montantTotal) +
        "€ de commande pour bénéficier de la livraison gratuite. </br> Frais estimés à 10€ ";
      let coeur = document.getElementById("coeur");
      coeur.style.color = "pink";
      
    }
    if (montantTotal < 150) {
      recapTotal.textContent =
        "Total: " + " " + (parseInt(montantTotal) + 10) + " " + " €";
        recapTotal.setAttribute('class','col')
    } else {
      recapTotal.textContent = "Total: " + parseInt(montantTotal) + " " + " €";
      recapTotal.setAttribute("class", "col");
    }
  }

  //------------------------------------------------- Les éléments qui vont être impactés par cette fonction.

  let divRecap = document.createElement("div");
  recap.appendChild(divRecap);
  divRecap.setAttribute("class", "col-12");

  let pRecapNbArticle = document.createElement("p");
  divRecap.appendChild(pRecapNbArticle);
  pRecapNbArticle.setAttribute("class", "col-3");

  let pSousTotal = document.createElement("p");
  divRecap.appendChild(pSousTotal);
  pSousTotal.setAttribute("class", "col-3");

  let fraisDePort = document.createElement("p");
  divRecap.appendChild(fraisDePort);
  fraisDePort.setAttribute('class','col-6')

  let recapTotal = document.createElement("p");
  divRecap.appendChild(recapTotal);
  recapTotal.setAttribute('class','col-3')

  // -----------------------------------------Appelle de la fonction pour le premier passage de la page product, à panier
  refresh();
}
























// ----------------------------------------------------------------- Partie formulaire

const formulaire = document.createElement("form");
main.appendChild(formulaire);
formulaire.setAttribute("class", "container border-top");
formulaire.setAttribute("method", "post");
formulaire.style.height = "auto";
let formTitle = document.createElement('h3');
formulaire.appendChild(formTitle);
formTitle.textContent = "Vous y êtes presque !";
formTitle.setAttribute('class','text-center mt-2')

// ------------------------------------------------------------------- Espace dédié au nom

const divNom = document.createElement("div");
formulaire.appendChild(divNom);
divNom.setAttribute("class", "form-group mt-4 row");

const labelPrenom = document.createElement("label");
divNom.appendChild(labelPrenom);
labelPrenom.setAttribute("for", "identity-first");
labelPrenom.setAttribute("class", "col");
labelPrenom.textContent = "Prénom:";

// ------------------------------------------------------------------------Input Prénom

const inputPrenom = document.createElement("input");
divNom.appendChild(inputPrenom);
inputPrenom.setAttribute("type", "text");
inputPrenom.setAttribute("class", "form-control col");
inputPrenom.setAttribute("id", "identity-first");
inputPrenom.placeholder = "Hugo ";
inputPrenom.minLength = 2;


const labelNom = document.createElement("label");
divNom.appendChild(labelNom);
labelNom.setAttribute("for", "identity-last");
labelNom.setAttribute("class", "col");
labelNom.style.marginLeft = "20%"
labelNom.textContent = "Nom:";

// ------------------------------------------------------------------------------Input Nom

const inputNom = document.createElement("input");
divNom.appendChild(inputNom);
inputNom.setAttribute("type", "text");
inputNom.setAttribute("class", "form-control col");
inputNom.setAttribute("id", "identity-last");
inputNom.placeholder = "TSR";
inputNom.required;
inputPrenom.autofocus;

//----------------------------------------------------------------------- Partie adresse de livraison

const divAdresse = document.createElement("div");
formulaire.appendChild(divAdresse);
divAdresse.setAttribute("class", "form-group");

const labelAdresse = document.createElement("label");
divAdresse.appendChild(labelAdresse);
labelAdresse.setAttribute("for", "adresse");
labelAdresse.textContent = "Adresse :";

const inputAdresse = document.createElement("input");
divAdresse.appendChild(inputAdresse);
inputAdresse.setAttribute("type", "text");
inputAdresse.setAttribute("class", "form-control");
inputAdresse.setAttribute("id", "adresse");
inputAdresse.placeholder = "123 Boulevard d'Orinoco";
inputAdresse.required;

const smallAdresse = document.createElement("small");
labelAdresse.appendChild(smallAdresse);
smallAdresse.setAttribute("class", "form-text text-muted");
smallAdresse.textContent = "Adresse de livraison";

// --------------------------------------------------------------------- Ville

const labelVille = document.createElement("label");
divAdresse.appendChild(labelVille);
labelVille.setAttribute("for", "ville");
labelVille.textContent = "Ville";

const ville = document.createElement("input");
divAdresse.appendChild(ville);
ville.setAttribute("type", "text");
ville.setAttribute("class", "form-control");
ville.setAttribute("id", "ville");
ville.placeholder = "La Rochelle";

// ----------------------------------------------- Au cas où l'adresse de livraison n'est pas la même que la livraison

const divFacturation = document.createElement("div");
formulaire.appendChild(divFacturation);
divFacturation.setAttribute("class", "form-group");
divFacturation.style.backgroundColor = "#E8FDFE";
const labelFactu = document.createElement("label");
divFacturation.appendChild(labelFactu);
labelFactu.setAttribute("for", "Factu");
labelFactu.setAttribute("class", "mt-2");
labelFactu.textContent = "Adresse de facturation";

const inputFactu = document.createElement("input");
divFacturation.appendChild(inputFactu);
inputFactu.setAttribute("type", "text");
inputFactu.setAttribute("class", "form-control");
inputFactu.setAttribute("id", "Factu");
inputFactu.placeholder = "456 Rue Orinoco";
inputFactu.style.backgroundColor = "#E8FDFE";

const smallFactu = document.createElement("small");
labelFactu.appendChild(smallFactu);
smallFactu.setAttribute("class", "form-text text-muted");
smallFactu.textContent = "Si différente de l'adresse de livraison";

//------------------------------------------------------------------ Ville  facturation

const labelAdresseFactu = document.createElement("label");
divFacturation.appendChild(labelAdresseFactu);
labelAdresseFactu.setAttribute("for", "adresseFactu");
labelAdresseFactu.textContent = "Ville";

const villeFactu = document.createElement("input");
divFacturation.appendChild(villeFactu);
villeFactu.setAttribute("type", "text");
villeFactu.setAttribute("class", "form-control");
villeFactu.setAttribute("id", "adresseFactu");
villeFactu.placeholder = "Sainte-Marie-de-Ré";
villeFactu.style.backgroundColor = "#E8FDFE";

// --------------------------------------------------------------- Partie adresse mail

const divMail = document.createElement("div");
formulaire.appendChild(divMail);
divMail.setAttribute("class", "form-group");

const labelMail = document.createElement("label");
divMail.appendChild(labelMail);
labelMail.setAttribute("for", "mail");
labelMail.textContent = "Adresse mail";

const inputMail = document.createElement("input");
divMail.appendChild(inputMail);
inputMail.setAttribute("type", "mail");
inputMail.setAttribute("class", "form-control");
inputMail.setAttribute("id", "mail");
inputMail.placeholder = "iloveteddy@orinoco.fr";

// ----------------------------------------------------------- Création du message texte

const divDemande = document.createElement("div");
formulaire.appendChild(divDemande);
divDemande.setAttribute("class", "form-group");

const labelDemande = document.createElement("label");
divDemande.appendChild(labelDemande);
labelDemande.setAttribute("for", "message");
labelDemande.textContent = "Votre demande";

const textDemande = document.createElement("textarea");
divDemande.appendChild(textDemande);
textDemande.setAttribute("class", "form-control");
textDemande.setAttribute("id", "message");
textDemande.placeholder = "Votre message";
textDemande.minLength = 3;

// ------------------------------------------------------------- Création de la checkbox CGV

const checkCGV = document.createElement("div");
formulaire.appendChild(checkCGV);
checkCGV.setAttribute("class", "form-check");

const inputCGV = document.createElement("input");
checkCGV.appendChild(inputCGV);
inputCGV.setAttribute("type", "checkbox");
inputCGV.setAttribute("class", "form-check-input");
inputCGV.setAttribute("id", "check");
inputCGV.required;

const labelCGV = document.createElement("label");
checkCGV.appendChild(labelCGV);
labelCGV.setAttribute("for", "check");
labelCGV.textContent = "J'ai pris connaissance des CGV";

// ---------------------------------------------------------------- Création de la checkbox newsLetter

const checkNews = document.createElement("div");
formulaire.appendChild(checkNews);
checkNews.setAttribute("class", "form-check");

const inputNews = document.createElement("input");
checkNews.appendChild(inputNews);
inputNews.setAttribute("type", "checkbox");
inputNews.setAttribute("class", "form-check-input");
inputNews.setAttribute("id", "newsletter");

const labelNews = document.createElement("label");
checkNews.appendChild(labelNews);
labelNews.setAttribute("for", "newsletter");
labelNews.textContent = "Je souhaite m'abonner à la Newsletter";

// ---------------------------------------------------------------- Création du bouton

const lienValidation = document.createElement("a");
main.appendChild(lienValidation);

const validationButon = document.createElement("button");
lienValidation.appendChild(validationButon);
validationButon.setAttribute("type", "submit");

validationButon.setAttribute("class", "btn btn-primary mb-4");
validationButon.textContent = "Valider et envoyer";

// ----------------------------------------------------------------- Validation des champs du formulaire
// -------------------------------------------------------  Création d'un obljet contact que l'on pourra sauvegarder

class Contact {
  constructor(name, surname, adress, city, mail) {
    this.firstName = name;
    this.lastName = surname;
    this.address = adress;
    this.city = city;
    this.email = mail;
  }
}

// --------------------------------------------------------- Création de la fonction qui va permettre de sauvegarder la demande.

//------------------------------------------------------------------  Mais avant cela, il faut s'assurer qu'il respecte nos REGEX.

let pasDroitChiffre = /^([a-zA-Z- áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]){2,20}$/;
let droitAuxChiffres = /^([a-zA-Z-  0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]){3,40}$/;
let regexmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//---------- Au clic du bouton, la fonction de validation est appelée. Soit il y a une erreur dans quel cas une alerte est lancée, spécifiant sur quel champs le pb a été constaté
//----------------------------- Soit les données sont au bon format, création de l'objet contact pour transmettre cette dernière au service web.

validationButon.onclick = function () {
  name = inputPrenom.value;
  if (!name.match(pasDroitChiffre)) {
    alert("Votre prénom ne peut pas contenir de chiffres ");
  }
  surname = inputNom.value;
  if (!surname.match(pasDroitChiffre)) {
    alert("Votre nom ne peut pas contenir de chiffres");
  }
  adress = inputAdresse.value;
  if (!adress.match(droitAuxChiffres)) {
    alert("Veuillez renseigner votre adresse correctement");
  }
  city = ville.value;
  if (!city.match(pasDroitChiffre)) {
    alert("Ville saisie incorrecte");
  }
  mail = inputMail.value;
  console.log(mail);
  if (!mail.match(regexmail)) {
    alert("Veuillez reseigner un mail valable");
  }

  let demandeContact = new Contact(name, surname, adress, city, mail);
  let contact = JSON.parse(localStorage.getItem("Contact"));

  if (contact == null) {
    contact = [];
  }

  if (
    name.match(pasDroitChiffre) &&
    surname.match(pasDroitChiffre) &&
    adress.match(droitAuxChiffres) &&
    city.match(pasDroitChiffre) &&
    mail.match(regexmail)
  ) {
    contact.push(demandeContact);
    localStorage.setItem("Contact", JSON.stringify(contact));
    
    // console.log(JSON.stringify(commandeFinale));
    // console.log(commandeFinaleParse);

    // let commandeString = JSON.stringify(commandeFinale)
    console.log(demandeContact);
    console.log(commandeFinale);

    let data = {
       contact: demandeContact,
       products : commandeFinale,
    };


    // lienValidation.href = "confirmation.html";
    send(data);
    console.log(data);
  }
};




// ---------------------------------------------------Envoie au serveur des infos récupérées Contact et commande

/**
 *
 * Expects request to contain:
 * contact: {
 *   firstName: string,
 *   lastName: string,
 *   address: string,
 *   city: string,
 *   email: strings
 * }
 * products: [string] <-- array of product _id
 *
 */

function send(data) {

    fetch("http://localhost:3000/api/teddies/order", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(function (res) {
        if (res.ok) {
          return res.json();
        }else{
          console.log('erreur transmission')
        }
      })
    .then( (data) => {
      const orderId = data.orderId;
      
      console.log(orderId);
      
      localStorage.setItem('OrderId', orderId);
     
    }
    ).then(()=>{
      window.location.href= "confirmation.html";
    })
    
 
  }
  
  
