/**
 * TODO: Ajouter encryption des données
 * */

require("dotenv").config();

const express = require('express');
var cors = require('cors');
const app = express();
const mysql = require('mysql');

const allowedOrigins = ['http://127.0.0.1:5500'];
app.use(cors({  
    origin: function(origin, callback){
        // allow requests with no origin     
        // (like mobile apps or curl requests)    
        if(!origin) 
            return callback(null, true);    
        if(allowedOrigins.indexOf(origin) === -1){
            var msg = 'The CORS policy for this site does not allow access from the specified Origin.';      
            return callback(new Error(msg), false);    
        }
        
        return callback(null, true);  
    }
}));
app.use(express.json());
app.listen(process.env.PORT, () => console.log("RUNNING"));

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
    console.log("Données d'entrée:");
    console.log(req.body.nomCompte);
    console.log(req.body.motDePasse);

    const query = "SELECT token, mot_de_passe FROM compte WHERE nom=?";
    connexion.query(query, [req.body.nomCompte], (error, results) => {
        if(!results[0]){
            res.json({status: "Not found"});
        }else{
            if(results[0].mot_de_passe == req.body.motDePasse){
                console.log("Données de sortie:");
                console.log(results[0].token);
                res.json({token: results[0].token});
            }else{
                res.json({status: "Erreur d'identifiants"});
            }
        }
    });
});