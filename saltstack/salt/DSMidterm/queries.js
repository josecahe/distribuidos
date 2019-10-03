const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'pg_ds',
    password: 'postgres',
    port: 5432
})

const create= (req, res) => {
    const data = {idnumber: req.body.idnumber, name: req.body.name, lastname: req.body.lastname};

    pool.query('INSERT INTO user (idnumber, name, lastname) VALUES ($1,$2,$3)', [data.idnumber,data.name,data.lastname], (err, res) =>{
        if(err){
            throw err
        }else{
            res.status(200).send('The user was succesfully created')
        }
    })
}