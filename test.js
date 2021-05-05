async function appelDesProduits(){



    try {
    let response = await fetch("http://localhost:3000/api/teddies");
    let responseJson = await response.json();

    // Maintenant nous stockons les données dans une variable.
    // Pour chaque élément de réponse, on créera une card qui redirigera vers la page du produit en question

    for (var i = 0; i < responseJson.length; i++) {
        let teddy = responseJson[i];
        var teddyId = teddy._id;
        console.log(teddy)

        // console.log(teddy);
    }

    // Au cas où l'appel à l'API ne fonctionne pas, il faut le signaler
    } catch (e) {}
}
appelDesProduits()

