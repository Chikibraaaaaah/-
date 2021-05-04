// ---------------------------------------------------------- CONTENU DE LA PAGE. 

// 1) Pour cela il faut lancer l'appel à l'API

// Création de la fonction d'appel avec la methode fetch

async function appelDesProduits() {
  try {
    let response = await fetch("http://localhost:3000/api/teddies");
    let responseJson = await response.json();

    // Maintenant nous stockons les données dans une variable.
    // Pour chaque élément de réponse, on créera une card qui redirigera vers la page du produit en question

    for (var i = 0; i < responseJson.length; i++) {
      let teddy = responseJson[i];
      
      creerProduit(teddy);
      // console.log(teddy);
    }

    // Au cas où l'appel à l'API ne fonctionne pas, il faut le signaler

  } catch (e) {

    let conteneurErreur = document.createElement("div");
    conteneurErreur.setAttribute("class", "container mt-16");
    main.appendChild(conteneurErreur);

    let figureErreur = document.createElement("figure");
    conteneurErreur.appendChild(figureErreur);
    figureErreur.setAttribute("class", "col ");
    figureErreur.style.display = "flex";
    figureErreur.style.width = "50%"
    figureErreur.style.margin = "auto"
    figureErreur.style.marginTop = "2%";

    let imageErreur = document.createElement("img");
    figureErreur.appendChild(imageErreur);
    imageErreur.src = "img/oubli_connexion.jpg";
    imageErreur.style.width = "9rem";
    
    let messageErreur = document.createElement("figcaption");
    figureErreur.appendChild(messageErreur);
    messageErreur.textContent = "Oups, tu as oublié de lancer Node";
    messageErreur.style.margin = "auto "
    messageErreur.style.marginLeft = "1%"

    footer.setAttribute("class", "col py-5 bg-dark");
    footer.style.position = "fixed";
    footer.style.bottom = 0;
  }
}
appelDesProduits();

// Création de la fonction qui va créer une card pour chaque produit présent sur l'API.

function creerProduit(teddy) {

  // Création de l'encadré correspondant à un produit

    let divArticle = document.createElement('div');
    conteneurProduit.appendChild(divArticle)
    divArticle.setAttribute('class',"col-12 col-md-6 col-xl-4 card")
    divArticle.style.marginBottom = "3%"
    divArticle.style.marginTop = "3%" 
    
    // Création de la figure

    let article = document.createElement("figure");
    divArticle.appendChild(article);
    article.style.margin = "auto";

    // L'API renvoie l'image correspondante au Teddy en question
    
    let apercuArticle = document.createElement("img");
    apercuArticle.src = teddy.imageUrl;
    apercuArticle.setAttribute('class','card-img-top ')

    // Idem pour les infos comme Nom et Prix

    let infosArticle = document.createElement("figcaption");
    infosArticle.setAttribute('class','card-body')
    article.appendChild(apercuArticle);
    article.appendChild(infosArticle);

    let nomArticle = document.createElement("h2");
    nomArticle.textContent = teddy.name;
    nomArticle.setAttribute('class','card-title')
    nomArticle.style.fontSize = "1 rem"

    let prixArticle = document.createElement("p");
    prixArticle.textContent = teddy.price / 100 + " €";
    prixArticle.setAttribute('class',"card-text")

    // Création du bouton. Au clic redirigera vers la page produit en question

    let lienVersPageProduit = document.createElement("a");
    let boutonVersPageProduit = document.createElement("button");
    boutonVersPageProduit.textContent = "Tout savoir sur " + teddy.name;
    boutonVersPageProduit.setAttribute('class','btn btn-primary')
    infosArticle.appendChild(nomArticle);
    infosArticle.appendChild(prixArticle);
    infosArticle.appendChild(lienVersPageProduit);
    lienVersPageProduit.appendChild(boutonVersPageProduit);

    function urlUnique(lienVersPageProduit){
      // Création de l'url unique pointée par le bouton

      let adresseActuelle = window.location.pathname;
      // console.log(adresseActuelle);

      let spliteAdresse = adresseActuelle.split("/");
      // console.log(spliteAdresse);

      let indexSansLocal = spliteAdresse.pop();
      // console.log(indexSansLocal);

      let productHtml =
        window.location.origin +
        indexSansLocal.replace(indexSansLocal, "/product.html");
      // console.log(productHtml);

      let newUrl = new URL(productHtml);
      // console.log(newUrl);

      newUrl.searchParams.append("id", teddy._id);
      lienVersPageProduit.href = newUrl;
    }

    urlUnique(lienVersPageProduit)

}



// ---------------------------------------------------------------- AJOUT DU STYLE DE LA PAGE


//-----------------------------------------------  CREATION DU HEADER

// Pour pouvoir créer les élements tel que le Header, il faut d'abord récupérer le seul élément présent dans le HTML, à savoir le body. 

let body = document.querySelector('body');

// Création du header et de ses composants

let header = document.createElement('header');
body.appendChild(header);

let headerBackGround = document.createElement('div');
header.appendChild(headerBackGround);
headerBackGround.setAttribute("class", "bg-dark");

let headerContainer = document.createElement('div');
headerBackGround.appendChild(headerContainer);
headerContainer.setAttribute('class','container');

let headerRow = document.createElement('div');
headerContainer.appendChild(headerRow);
headerRow.setAttribute('class','row');

// Création du menu de navigation contenant redirection vers index, et basket

let nav = document.createElement('nav');
headerRow.appendChild(nav);
nav.setAttribute('class','col navbar navbar-expand-lg navbar-dark');

let navAnchor = document.createElement('a');
nav.appendChild(navAnchor);
navAnchor.setAttribute('class','navbar-brand');
navAnchor.href ="index.html";

let logo = document.createElement('img');
navAnchor.appendChild(logo);
logo.src = "img/logo.png"
logo.style.width = "100px";
logo.style.height = "50px";
logo.alt ="Logo Orinoco";

// Création du bouton déroulant dont l'execution se fait grace aux liens dans le HTML

let navBouton = document.createElement('button');
nav.appendChild(navBouton);
navBouton.setAttribute('class','navbar-toggler');
navBouton.setAttribute('type','button');
navBouton.setAttribute('data-toggle','collapse');
navBouton.setAttribute('data-target','#navbarContent');
navBouton.setAttribute('aria-controls','navbarSupportedContent');
navBouton.setAttribute('aria-expanded','false');
navBouton.setAttribute('aria-label','Toggle navigation');

let spanButon = document.createElement('span');
navBouton.appendChild(spanButon);
spanButon.setAttribute('class','navbar-toggler-icon');

// Contenu qui apparait sous forme de menu déroulant au click 

let navBarContent = document.createElement('div');
nav.appendChild(navBarContent);
navBarContent.setAttribute('id','navbarContent');
navBarContent.setAttribute('class','collapse navbar-collapse');

let listeNav = document.createElement('ul');
navBarContent.appendChild(listeNav);
listeNav.setAttribute('class','navbar-nav');

let itemActiv = document.createElement('li');
listeNav.appendChild(itemActiv);
itemActiv.setAttribute('class','nav-item active');

let itemActivAnchor = document.createElement('a');
itemActiv.appendChild(itemActivAnchor);
itemActivAnchor.setAttribute('class','nav-link');
itemActivAnchor.href = "index.html";
itemActivAnchor.textContent = "Nos Orinocours";

let otherItem = document.createElement('li');
listeNav.appendChild(otherItem);
otherItem.setAttribute('class','nav-item');

let otherItemAnchor = document.createElement('a');
otherItem.appendChild(otherItemAnchor);
otherItemAnchor.textContent = "Les plus populaires";
otherItemAnchor.href ="#";
otherItemAnchor.setAttribute('class','nav-link');

let otherItem2 = document.createElement("li");
listeNav.appendChild(otherItem2);
otherItem2.setAttribute("class", "nav-item");

let otherItemAnchor2 = document.createElement("a");
otherItem2.appendChild(otherItemAnchor2);
otherItemAnchor2.textContent = "Mon panier" ;
otherItemAnchor2.setAttribute("class", "nav-link");
otherItemAnchor2.href = "basket.html";

// Logo du panier

let logoPanier = document.createElement('i');
logoPanier.setAttribute('class','fas fa-shopping-cart ')
logoPanier.style.color = "white";
logoPanier.style.marginLeft = "4px"
otherItemAnchor2.appendChild(logoPanier)

// Rajout du nombre d'article dans le panier. Par défaut 0

let articleDansPanier = document.createElement('span');
logoPanier.appendChild(articleDansPanier);
articleDansPanier.setAttribute("id", "cardcount");
articleDansPanier.style.marginLeft = "4px";

// Si un produit a été mis dans le panier, il faut récupérer la valeur nb article pour l'actualiser

let totalArticle = sessionStorage.getItem('Total Article');

if (totalArticle == null){
  totalArticle == 0
}else{
  articleDansPanier.textContent = totalArticle;
}


// Création du main dans lequel apparaitront les produits

let main = document.createElement("main");
body.appendChild(main);
main.setAttribute("id", "main");
main.setAttribute("class", "container");

let pageTitle = document.createElement('h1');
main.appendChild(pageTitle);
pageTitle.textContent = "Découvrez nos Ours en peluche"
pageTitle.style.textAlign = "center"

let conteneurProduit = document.createElement("div");
conteneurProduit.setAttribute("class", "row");
conteneurProduit.style.display = "flex";
conteneurProduit.style.flexWrap = "wrap";
// conteneurProduit.style.justifyContent = "space-around"
main.appendChild(conteneurProduit);

// Création du footer

let footer = document.createElement("footer");
body.appendChild(footer);
footer.setAttribute("class", "col py-5 bg-dark");



let containerFooter = document.createElement("div");
containerFooter.setAttribute("class", "container");
footer.appendChild(containerFooter);

let pFooter = document.createElement("p");
containerFooter.appendChild(pFooter);
pFooter.setAttribute("class", "m-0 text-center text-white");
pFooter.textContent = "Copyright By Chikibraaaaaah 2021";