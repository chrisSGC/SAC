var URL_API = "http://localhost:3000/";

const verifConnexion = () => {
    // récupere valeur de l'item
    if(typeof(localStorage.getItem("token")) == 'undefined'){
        // La clé existe pas alors on redirige
        window.location.replace("index.html");
    }else{
        // appel get

    // si valeur non correcte on redirige
    }
}