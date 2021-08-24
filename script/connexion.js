var URL_API = "http://localhost:3000/";

document.getElementById("signin").addEventListener("submit", (evt) => {
    evt.preventDefault();

    //document.getElementById("mauvaisId").innerHTML = "DATA SETTED";
    verifConnexion();
});

const verifConnexion = async () => {
    var form = new FormData();
    form.append("nomCompte", document.getElementById("floatingInput").value);
    form.append("motDePasse", document.getElementById("floatingPassword").value);

    const response = await fetch(URL_API+'connexion', {
        method: 'POST',
        body: form, // string or object
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson

    localStorage.setItem('token', myJson.token);

    document.getElementById("mauvaisId").innerHTML = "DATA SETTED";
}