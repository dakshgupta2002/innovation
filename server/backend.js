import express from 'express'
import cors from 'cors';
import pkg from 'sequelize';
const { Sequelize, DataTypes } = pkg;
import db from './db/database.js'
import Fan from './models/Fan.js'
import jwt from 'jsonwebtoken';

//Test DB
db.authenticate()
.then( () => console.log("Connected"))
.catch(err => console.log(err));

//middlewares used to manipulatee response
const app = express();
app.use(cors());
app.use(express.json());

console.log(await Fan.findAll(
    {
        where:{
            username: 'dg123'
        }
    }
) == null)

//setting routers
app.get('/', (req, res) => {
    res.send("the react server will be destroyed and files will be served from here :)")
})

app.get('/allUsers', async (req, res) => {

    
    const x = await Fan.findAll();
     console.log(x);
     res.sendStatus(200);
})

app.post("/newUser", async (req, res) => {
    const newUsername = req.body.username;
    const newPswd = req.body.password;
        
    const foundUsername = await  //a user of same name exists or not 
        Fan.findOne({
            where: {
                username: newUsername

            }
            
        });
    const foundUser = await 
        Fan.findOne( {
            where: {
                username : newUsername,
                password: newPswd
            }
        })
    //console.log("found", found); 
     if (foundUsername === null){
        await Fan.create(req.body);
        res.json({user: 'false', password:'false'});
        console.log("new user registered");
     }else if (foundUser === null){
         console.log("Wrong password")
         res.json({user:'true', password:'false'});
     }else{
        console.log("User login");
        res.json( {user:'true', password:'true'});
     }
})

//port set
app.listen(1234, ()=>{
    console.log("Backend server")
})