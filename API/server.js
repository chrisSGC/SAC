require("dotenv").config();

const express = require('express');
const app = express();
const mysql = require('mysql');

const connexion = mysql.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    host: process.env.INSTANCE
    //socketPath: `/cloudsql/${process.env.INSTANCE}`
});

const verifToken = (token) => {
    const query = "SELECT id FROM compte WHERE token=?";

    connexion.query(query,[token], (error, results) => {
        return (!results[0]) ? false : true;
    });
}

/**
 * Permet de recuperer la liste des bois
 */
app.get('/bois', async (req, res) => {
    const query = "SELECT * FROM bois";

    connexion.query(query, (error, results) => {
        if(!results[0]){
            res.json({status: "Not found"});
        }else{
            res.json(results);
        }
    });
});

app.get('/obtenirBois/:idBois', async (req, res) => {
    const query = "SELECT * FROM bois WHERE id=?";

    connexion.query(query, [req.params.idBois], (error, results) => {
        if(!results[0]){
            res.json({status: "Not found"});
        }else{
            res.json(results[0]);
        }
    });
});

app.post("/connexion", async (req, res) => {
    const query = "SELECT token, mot_de_passe FROM compte WHERE nom=?";
    connexion.query(query, [req.params.nomCompte], (error, results) => {
        if(!results[0]){
            res.json({status: "Not found"});
        }else{
            if(results[0].mot_de_passe == req.params.motDePasse){
                res.json(results[0].token);
            }else{
                res.json({status: "Erreur d'identifiants"});
            }
        }
    });
});

app.listen(process.env.PORT, () => console.log("RUNNING"));
