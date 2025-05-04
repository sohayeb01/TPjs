
document.addEventListener("DOMContentLoaded", function() {
    const nombre1Input = document.getElementById("nombre1");
    const nombre2Input = document.getElementById("nombre2");
    const calculerBtn = document.getElementById("calculer");
    const resultatsDiv = document.getElementById("resultats");
    const sommeP = document.getElementById("somme");
    const differenceP = document.getElementById("difference");
    const produitP = document.getElementById("produit");
    const quotientP = document.getElementById("quotient");
    
    calculerBtn.addEventListener("click", function() {
        const nombre1 = parseFloat(nombre1Input.value);
        const nombre2 = parseFloat(nombre2Input.value);
        
        if (isNaN(nombre1) || isNaN(nombre2)) {
            alert("Erreur: Veuillez entrer des nombres valides.");
            resultatsDiv.style.display = "none";
            return;
        }
        
        const somme = nombre1 + nombre2;
        
   
        const difference = nombre1 - nombre2;
        

        const produit = nombre1 * nombre2;
        
   
        let quotient;
        if (nombre2 === 0) {
            quotient = "Division par zéro impossible";
        } else {
            quotient = nombre1 / nombre2;
        }
        
        sommeP.textContent = `Somme: ${nombre1} + ${nombre2} = ${somme}`;
        differenceP.textContent = `Différence: ${nombre1} - ${nombre2} = ${difference}`;
        produitP.textContent = `Produit: ${nombre1} × ${nombre2} = ${produit}`;
        quotientP.textContent = `Quotient: ${nombre1} ÷ ${nombre2} = ${quotient}`;
        
        resultatsDiv.style.display = "block";
        
        console.log(`Somme: ${nombre1} + ${nombre2} = ${somme}`);
        console.log(`Différence: ${nombre1} - ${nombre2} = ${difference}`);
        console.log(`Produit: ${nombre1} × ${nombre2} = ${produit}`);
        console.log(`Quotient: ${nombre1} ÷ ${nombre2} = ${quotient}`);
    });
});
