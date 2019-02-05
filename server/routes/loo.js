import express from 'express';
const Router = express.Router();
import conn from '../utils/db'

Router.get('/listings', (req, res, next) => {
    const sql = `SELECT a.*, GROUP_CONCAT(feat.feature SEPARATOR ', ') as features
    FROM listings a
    LEFT JOIN listings_features_link b ON a.id = b.listing_id
    LEFT JOIN features feat ON b.feature_id = feat.id
    GROUP BY a.id;`


        conn.query( sql, (error, results, fields) => {
            console.log(error);
            console.log(results);
            res.json(results);
        });
});

Router.get('/listings/:id', (req, res, next) => {
    const sql = `SELECT a.*, GROUP_CONCAT(feat.feature SEPARATOR ', ') as features
    FROM listings a
    LEFT JOIN listings_features_link b ON a.id = b.listing_id
    LEFT JOIN features feat ON b.feature_id = feat.id
    WHERE a.id = ?
    GROUP BY a.id;`
    const id = req.params.id

    conn.query(sql, [id], (err, results, fields) => {
        console.log(results)
        res.json(results)
      })
})

export default Router
