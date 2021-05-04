
let body = document.querySelector('body');

// Gestion des quantités

                let quantite = document.createElement('p');
                body.appendChild(quantite);
                quantite.textContent = "Quantité ";
                
                let barreQuantite = document.createElement('div');
                quantite.appendChild(barreQuantite);

                let quantiteInput = document.createElement('input');
                barreQuantite.appendChild(quantiteInput);
                quantiteInput.value = 1;

                // Bouton d'incrémentation

                let incrementation = document.createElement('button');
                barreQuantite.appendChild(incrementation);
                incrementation.textContent = "+";

               

                // Bouton de décrémentation

                let decrementation = document.createElement('button');
                barreQuantite.appendChild(decrementation);
                decrementation.textContent = "-";

                decrementation.onclick = function(){
                    quantiteInput.value = -- quantiteInput.value ;
                    if (quantiteInput.value < 0){
                        let minPossible = 0;
                        return quantiteInput.value = minPossible;
                        
                    }
                }

                // Cout total

                let total = document.createElement('p');
                body.appendChild(total);
                let prix = 29;

                let montantTotal = 0;
                total.textContent = "Total " + montantTotal;
                
                incrementation.onclick = function(){
                    quantiteInput.value = ++ quantiteInput.value ; 
                }

                