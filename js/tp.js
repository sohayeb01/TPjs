// Script qui calcule la somme, la différence, le produit et le quotient de deux nombres

// Attendre que le DOM soit chargé
document.addEventListener("DOMContentLoaded", function() {
    // Récupérer les éléments du DOM
    const nombre1Input = document.getElementById("nombre1");
    const nombre2Input = document.getElementById("nombre2");
    const calculerBtn = document.getElementById("calculer");
    const resultatsDiv = document.getElementById("resultats");
    const sommeP = document.getElementById("somme");
    const differenceP = document.getElementById("difference");
    const produitP = document.getElementById("produit");
    const quotientP = document.getElementById("quotient");
    
    // Ajouter un écouteur d'événement au bouton calculer
    calculerBtn.addEventListener("click", function() {
        // Récupérer les valeurs des inputs
        const nombre1 = parseFloat(nombre1Input.value);
        const nombre2 = parseFloat(nombre2Input.value);
        
        // Vérifier si les entrées sont des nombres valides
        if (isNaN(nombre1) || isNaN(nombre2)) {
            alert("Erreur: Veuillez entrer des nombres valides.");
            resultatsDiv.style.display = "none";
            return;
        }
        
        // Calculer la somme
        const somme = nombre1 + nombre2;
        
        // Calculer la différence
        const difference = nombre1 - nombre2;
        
        // Calculer le produit
        const produit = nombre1 * nombre2;
        
        // Calculer le quotient
        let quotient;
        if (nombre2 === 0) {
            quotient = "Division par zéro impossible";
        } else {
            quotient = nombre1 / nombre2;
        }
        
        // Afficher les résultats dans les éléments HTML
        sommeP.textContent = `Somme: ${nombre1} + ${nombre2} = ${somme}`;
        differenceP.textContent = `Différence: ${nombre1} - ${nombre2} = ${difference}`;
        produitP.textContent = `Produit: ${nombre1} × ${nombre2} = ${produit}`;
        quotientP.textContent = `Quotient: ${nombre1} ÷ ${nombre2} = ${quotient}`;
        
        // Afficher la div des résultats
        resultatsDiv.style.display = "block";
        
        // Afficher aussi les résultats dans la console
        console.log(`Somme: ${nombre1} + ${nombre2} = ${somme}`);
        console.log(`Différence: ${nombre1} - ${nombre2} = ${difference}`);
        console.log(`Produit: ${nombre1} × ${nombre2} = ${produit}`);
        console.log(`Quotient: ${nombre1} ÷ ${nombre2} = ${quotient}`);
    });
});
