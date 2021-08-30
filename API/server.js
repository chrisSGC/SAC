/**
 * TODO: Ajouter encryption des données
 * */

require("dotenv").config();

const express = require('express');
var cors = require('cors');
const app = express();
const mysql = require('mysql');
const bcrypt = require('bcrypt');

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

function creerToken(long) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
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

app.get('verifierExistance/:tokenCompte', async (req, res) => {
    const query = "SELECT id FROM compte WHERE token=?";

    connexion.query(query, [req.params.tokenCompte], (error, results) => {
        if(!results[0]){
            res.json({retour: "false"});
        }else{
            res.json({retour: "true"});
        }
    });
});

app.post("/nouvelUtilisateur", async (req, res) => {
    try{
        // Mot de passe
        //const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.motDePasse, 10);

        const query = "INSERT INTO compte(nom, mot_de_passe, token) VALUES ?";
        let valeurs = [req.body.nomCompte, hashedPass, creerToken(15)];

        connexion.query(query, [valeurs], (error, results) => {
            if (error) throw res.json({status: "error"});
            res.json({status: "Ligne(s) ajoutée(s): "+results.affectedRows+"."});
        });
    }catch{
        res.json({status: "Erreur!"});
    }
});

app.post("/connexion", async (req, res) => {
    try{
        //const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.motDePasse, 10);

        const query = "SELECT token, mot_de_passe FROM compte WHERE nom=?";
        connexion.query(query, [req.body.nomCompte], (error, results) => {
            if(!results[0]){
                res.json({status: "Not found"});
            }else{
                try{
                    if(await bcrypt.compare(req.body.motDePasse, results[0].mot_de_passe)){
                        res.json({token: results[0].token});
                    }else{
                        res.json({status: "Erreur d'identifiants"});
                    }
                }catch{
                    res.json({status: "Erreur d'identifiants"});
                }
                /*if(results[0].mot_de_passe == req.body.motDePasse){
                    console.log("Données de sortie:");
                    console.log(results[0].token);
                    res.json({token: results[0].token});
                }else{
                    res.json({status: "Erreur d'identifiants"});
                }*/
            }
        });
    }catch{
        res.json({status: "Erreur!"});
    }
});