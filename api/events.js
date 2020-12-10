const express = require('express')

function createRouter(db) {
    const router = express.Router()
    router.get('/event', function (req, res, next) {
        db.query(
            'SELECT * FROM data',
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' })
                }
                else {
                    res.status(200).send(results)
                }
            }
        );
    });

    router.get('/user/:id', function (req, res, next) {
        db.query(
            'SELECT * FROM user WHERE id=?',
            [req.params.id],
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' })
                }
                else {
                    res.status(200).json(results)
                }
            }
        );
    });

    router.post('/user', function (req, res, next) {
        db.query(
            'INSERT INTO user(name,address,contactNo,id) VALUES(?,?,?,?)',
            [req.body.name, req.body.address, req.body.contactNo, req.body.id],
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' })
                }
                else {
                    res.status(200).json(results)
                }
            }
        );
    });

    router.post('/pizza', function (req, res, next) {
        db.query(
            'INSERT INTO pizza(type,veg,nonveg,size,customize,crusttype,toppings,addons,quantity) VALUES(?,?,?,?,?,?,?,?,?)',
            [req.body.type, req.body.veg, req.body.nonveg, req.body.size,req.body.customize,req.body.crusttype, req.body.toppings, req.body.addons, req.body.quantity],
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' })
                }
                else {
                    res.status(200).json(results)
                }
            }
        );
    });
    return router;
}

module.exports = createRouter;