// Ajout d'un header, main

let body = document.querySelector('body');


// Header

let header = document.createElement('header');
body.appendChild(header);
let nav = document.createElement('nav');
header.appendChild(nav);
nav.setAttribute('class', 'navbar navbar-expand-lg  navbar-dark bg-dark fixed-top');

// Menu de navigation

let navContainer = document.createElement('div');
nav.appendChild(navContainer);
navContainer.setAttribute('class','container');

let anchor = document.createElement('a');
navContainer.appendChild(anchor);
anchor.href = "index.html"
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


//  Revenir sur ce point pour le menu déroulant en mode responsive

let spanCurrent = document.createElement('span');
lienChoixProduit.appendChild(spanCurrent);
spanCurrent.setAttribute('class','sr-only')

// Rubrique les plus populaires

let LesPlusPop = document.createElement('li');
listNav.appendChild(LesPlusPop);
let lienLesPlusPop = document.createElement('a');
LesPlusPop.appendChild(lienLesPlusPop);

lienLesPlusPop.setAttribute('class','nav-item');
lienLesPlusPop.setAttribute('class','nav-link')
lienLesPlusPop.href = "#";
lienLesPlusPop.textContent = "Les plus populaires";

// Rubrique mon panier

let monPanier = document.createElement('li');
listNav.appendChild(monPanier);
let lienMonPanier = document.createElement('a');
monPanier.appendChild(lienMonPanier);
monPanier.setAttribute('class','nav-item');
lienMonPanier.setAttribute('class',"nav-link");
lienMonPanier.href = "basket.html";
lienMonPanier.textContent = "Mon panier";

// Rubrique contact

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


let conteneurProduit = document.createElement('div');
conteneurProduit.style.width = "100%";
conteneurProduit.style.display = "flex";
conteneurProduit.style.flexWrap = "wrap";
main.appendChild(conteneurProduit);

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



// Commençons par l'appel des prodduits disponibles à la vente

async function appelDesProduits (){
    let response = await fetch ('http://localhost:3000/api/teddies');
    let responseJson = await response.json();

    try {

        for ( var i = 0; i < responseJson.length; i++){
            let teddy = responseJson[i];
            let teddyName = teddy.name;
            let teddyId = teddy._id;
            var teddyPrice = (teddy.price/100) + " €";
            let teddyColor = teddy.colors;

            // console.log(teddyColor);
            // console.log(teddy);

            // Information reçues mises dans le local storage
            sessionStorage.setItem(teddyId,JSON.stringify(teddy))
            sessionStorage.getItem(teddyId)

            let adresseActuelle = window.location.href.split('=');
           
            // console.log(adresseActuelle);
            
             let idDansUrl = adresseActuelle[1];
            //  console.log(idDansUrl)

            // si l'id de l'url == id product dans session storage alors charger les infos correspondantes
            
             if (idDansUrl == teddyId){
                 
                // Construction de la structure HTML de la page

                let conteneurProduit = document.createElement('div');
                main.appendChild(conteneurProduit);
                conteneurProduit.setAttribute('class','container')

                let teddyChoisi = document.createElement('figure');
                teddyChoisi.style.width = "90%";
                teddyChoisi.style.marginBottom = "24px";
                teddyChoisi.style.display = "flex";
                

                // Appel de l'image du produit concerné

                let apercuTeddy = document.createElement('img');
                apercuTeddy.style.width = "50%"
                let imageTeddy = teddy.imageUrl;
                apercuTeddy.src = imageTeddy;
                
                // Appel des informations liées à la description produit

                let infosTeddy = document.createElement('figcaption');
                infosTeddy.style.height = "auto";
                infosTeddy.style.width = "30%";
                infosTeddy.style.marginLeft = "12px";
                conteneurProduit.appendChild(teddyChoisi);
                teddyChoisi.appendChild(apercuTeddy);
                teddyChoisi.appendChild(infosTeddy);
                
                // Nom, prix et descritpion

                let nomTeddyChoisi = document.createElement('h2');
                nomTeddyChoisi.textContent = teddyName;
                infosTeddy.appendChild(nomTeddyChoisi);

                let prixUnitaire = document.createElement('p');
                infosTeddy.appendChild(prixUnitaire);
                prixUnitaire.textContent = teddyPrice;

                let descriptionTeddy = document.createElement('p');
                let teddyDescription = teddy.description;
                infosTeddy.appendChild(descriptionTeddy);
                descriptionTeddy.textContent = teddyDescription;

                // Gestion des quantités 

               let quantiteConteneur = document.createElement('div');
               infosTeddy.appendChild(quantiteConteneur)
                
               let inputQuantite = document.createElement('input');
                quantiteConteneur.appendChild(inputQuantite);

                //  Création des boutons gérant les quantités

                let plus = document.createElement('button');
                let moins = document.createElement('button');
                quantiteConteneur.appendChild(plus)
                quantiteConteneur.appendChild(moins);
                plus.textContent = "+";
                moins.textContent= "-";
                let inputPrice = document.createElement('input');
                infosTeddy.appendChild(inputPrice);
                inputPrice.style.border = "none";
                let prix = teddyPrice;
                inputQuantite.value = 1;
                inputPrice.value = teddyPrice;
  


                // Incrémentations ou diminution suite aux clics

                plus.onclick = function(){
                    inputPrice.value = parseInt(inputPrice.value) + parseInt(prix) + " €";
                    inputQuantite.value ++;
                   
                    return inputPrice.value;
                }

                moins.onclick = function(){
                    if (parseInt(inputPrice.value) <= 0){
                        return parseInt(inputPrice.value) = 0;
                    }else {
                        inputPrice.value = parseInt(inputPrice.value) - parseInt(prix) + " €";
                        inputQuantite.value --;
                    }
                    
                    if( inputQuantite.value < 0 ){
                        return inputQuantite.value = 0;
                    }
                }


                let couleur = document.createElement('p');
                infosTeddy.appendChild(couleur);
                couleur.textContent = "Couleur ";

                // Création du conteneur à boutons

                let conteneurBoutons = document.createElement('div');
                infosTeddy.appendChild(conteneurBoutons);
                conteneurBoutons.style.display = "flex";
                conteneurBoutons.style.justifyContent = "center";

                // Bouton d'ajout au panier
                
                let boutonAjouterAuPanier = document.createElement('button');
                conteneurBoutons.appendChild(boutonAjouterAuPanier);
                boutonAjouterAuPanier.setAttribute('class',"btn btn-primary");
                boutonAjouterAuPanier.textContent = "Ajouter au panier";
                boutonAjouterAuPanier.style.margin = "auto";

                // Il faut qu'au clique, il enregistre la valeur quantite et total dans le session storage pour pouvoir utiliser ces infos dans la page panier.

                // Création de l'objet teddy qui sera stocké dans le session storage

                class Teddy {
                    constructor (teddyName, couleurFinale, quantiteChoisie, prixTotalParTeddy, teddyImg){
                        this.teddyName = teddyName;
                        this.couleurFinale = couleurFinale;
                        this.quantiteChoisie = quantiteChoisie;
                        this.prixTotalParTeddy = prixTotalParTeddy;
                        this.teddyImg = teddyImg;
                    }
                }
                
            //    Fonction d'ajout au panier (du session storage)

                boutonAjouterAuPanier.onclick = function () {
                    let contenuPanier = JSON.parse(sessionStorage.getItem('Mon Panier'));
                    let couleurFinale = document.getElementById('couleur').value;
                    let quantiteFinale = inputQuantite.value;                    
                    let prixTotalParTeddy = inputPrice.value;
                    let teddyImg = teddy.imageUrl;
                    
                    let teddyAchete = new Teddy(teddyName, couleurFinale, quantiteFinale, prixTotalParTeddy, teddyImg);
                   
                    if ( contenuPanier == null){
                        contenuPanier = [];
                    }
                    
                    contenuPanier.push(teddyAchete);
                    sessionStorage.setItem('Mon Panier', JSON.stringify(contenuPanier));
                }

                 // Bouton et redirection vers la page Panier 


                let lienVersPanier = document.createElement('a');
                conteneurBoutons.appendChild(lienVersPanier);
                lienVersPanier.href = "basket.html";

                let boutonVoirPanier = document.createElement('button');
                lienVersPanier.appendChild(boutonVoirPanier);
                boutonVoirPanier.setAttribute('class', "btn btn-secondary");
                boutonVoirPanier.textContent = "Voir mon panier";
                boutonVoirPanier.style.margin = "auto";

                
            //    Création liste déroulant faisant appelle aux couleurs proposées

                function choixCouleur(couleurChoisie){
                    couleurChoisie = document.createElement('select');
                    couleurChoisie.setAttribute('id','couleur')
                    for ( var i = 0; i < teddyColor.length; i++){
                        var couleurPossible = document.createElement('option');
                        
                        couleurPossible.textContent = teddyColor[i];
                        couleur.appendChild(couleurChoisie);
                        couleurChoisie.appendChild(couleurPossible);
                    }
                }
                choixCouleur();

                

               




                


                

           

            




             

             
             
            

             




             
             

            

             

               

                

            

                
             
           
             
            
                



                
            }

           
            
              
        }
    }catch{
        console.log('Soucis');
    }
}
appelDesProduits();









