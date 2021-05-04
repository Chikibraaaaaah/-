// Commençons par l'appel des prodduits disponibles à la vente

async function appelDesProduits (){
  

    try {
          let response = await fetch ('http://localhost:3000/api/teddies');
          let responseJson = await response.json();

        for ( var i = 0; i < responseJson.length; i++){
            let teddy = responseJson[i];
            let teddyId = teddy._id;
            creerProduit(teddy)
            console.log(teddy);

            // Information reçues mises dans le local storage
            sessionStorage.setItem(teddyId,JSON.stringify(teddy))
              
        }
    }catch(e){
        // console.log('Soucis');

        let conteneurErreur = document.createElement('div');
        conteneurErreur.setAttribute('class','container')
        
        main.appendChild(conteneurErreur);
    
        let figureErreur = document.createElement('figure');
        conteneurErreur.appendChild(figureErreur);
        figureErreur.setAttribute('class',"row")
     
        let imageErreur = document.createElement('img');
        figureErreur.appendChild(imageErreur);
        imageErreur.style.width = "15%"
        imageErreur.style.margin = "auto auto"
        imageErreur.src ='oubli_connexion.jpg'

        let messageErreur = document.createElement('figcaption');
        messageErreur.style.textAlign = "center"
        figureErreur.appendChild(messageErreur);        
        messageErreur.textContent = "Oups, tu as oublié de lancer Node";
    }
}
appelDesProduits();


let body = document.querySelector('body');




// Ajout d'un header, main 

let header = document.createElement('header');
body.appendChild(header);
let nav = document.createElement('nav');
header.appendChild(nav);
nav.setAttribute('class', 'navbar navbar-expand-lg  navbar-dark bg-dark fixed-top');


let container = document.createElement('div');
nav.appendChild(container);
container.setAttribute('class','container');

let anchor = document.createElement('a');
container.appendChild(anchor);
anchor.href = "index.html";
anchor.setAttribute('class',"navbar-brand");

let mainTitle = document.createElement('h1');
anchor.appendChild(mainTitle);
mainTitle.textContent = "Orinoco";



let navbarButton = document.createElement('button');
container.appendChild(navbarButton);
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
container.appendChild(collapseNavbar);
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
lienChoixProduit.href = "#";
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


let main = document.createElement('main');
body.appendChild(main);
main.setAttribute('id','main')



let conteneurProduit = document.createElement('div');
conteneurProduit.setAttribute('class','container')
conteneurProduit.style.width = "100%";
conteneurProduit.style.marginTop = "5%";
conteneurProduit.style.display = "flex";
conteneurProduit.style.flexWrap = "wrap";
main.appendChild(conteneurProduit);


// Création de l'affichage des produits


function creerProduit(teddy, newUrl){

    // Création de l'encadré correspondant à un produit

    let article = document.createElement('figure');
    conteneurProduit.appendChild(article);
    article.style.marginRight = "40px"
    let apercuArticle = document.createElement('img');
    apercuArticle.style.height = "60%";
    apercuArticle.src = teddy.imageUrl;
    let infosArticle = document.createElement('figcaption');
    article.appendChild(apercuArticle);
    article.appendChild(infosArticle);

    // Informations liées au produit

    let nomArticle = document.createElement('h2');
    nomArticle.textContent = teddy.name;
    let prixArticle = document.createElement('p');
    prixArticle.textContent = (teddy.price/100) + " €";
    let lienVersPageProduit = document.createElement('a');
    let boutonVersPageProduit = document.createElement('button');
    boutonVersPageProduit.textContent = "Tout savoir sur " + teddy.name;
    infosArticle.appendChild(nomArticle);
    infosArticle.appendChild(prixArticle);
    infosArticle.appendChild(lienVersPageProduit);
    lienVersPageProduit.appendChild(boutonVersPageProduit);

    // Ajout du style produit avec les classe Bootstrap

    article.setAttribute('class', 'card');
    article.style.width = "30%";
    article.style.border = "3px solid dark";
    apercuArticle.setAttribute('class','card-img-top')
    infosArticle.setAttribute('class','card-body');
    nomArticle.setAttribute('class','card-title');
    prixArticle.setAttribute('class','card-text');
    boutonVersPageProduit.setAttribute('class','btn btn-primary');

    // Création de l'url unique pointée par le bouton

    let adresseActuelle = window.location.pathname;
    // console.log(adresseActuelle);

    let spliteAdresse = adresseActuelle.split('/');
    // console.log(spliteAdresse);

    let indexSansLocal = spliteAdresse.pop();
    // console.log(indexSansLocal);

    let productHtml = window.location.origin + indexSansLocal.replace(indexSansLocal, "/product.html");
    // console.log(productHtml);

    newUrl = new URL (productHtml);
    // console.log(newUrl);

     newUrl.searchParams.append('id',teddy._id);
    lienVersPageProduit.href = newUrl;

}

// // Création de l'url unique vers laquelle redirige le bouton

// function creationUrlUnique(teddyId, newUrl){

//     let adresseActuelle = window.location.pathname;
//     // console.log(adresseActuelle);

//     let spliteAdresse = adresseActuelle.split('/');
//     // console.log(spliteAdresse);

//     let indexSansLocal = spliteAdresse.pop();
//     // console.log(indexSansLocal);

//     let productHtml = window.location.origin + indexSansLocal.replace(indexSansLocal, "/product.html");
//     // console.log(productHtml);

//     newUrl = new URL (productHtml);
//     // console.log(newUrl);

//      newUrl.searchParams.append('id',teddyId);

//      return newUrl;
    
// }

// Création du footer




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