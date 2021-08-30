const gererPanneau = (idMenu) => {
    switch(idMenu){
        case 'accueil':
            document.getElementById('accueilAPI').classList.remove("d-none");
            document.getElementById('creerCompte').classList.add("d-none");
            document.getElementById('connexion').classList.add("d-none");
            break;
        case 'creerCompte':
            document.getElementById('accueilAPI').classList.add("d-none");
            document.getElementById('connexion').classList.add("d-none");
            document.getElementById('creerCompte').classList.remove("d-none");
            break;
        case 'connexion':
            document.getElementById('accueilAPI').classList.add("d-none");
            document.getElementById('creerCompte').classList.add("d-none");
            document.getElementById('connexion').classList.remove("d-none");
            break;
    }
}