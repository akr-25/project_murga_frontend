const express = require('express')
const cors  = require('cors')
const mysql = require('mysql')
const bcrypt = require('bcrypt')
// saltRounds is needed for bcrypt 
const saltRounds  = 10 

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"], 
    methods: ["GET", "POST"],
    credentials: true
})); // cors authentication 
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(session({
    key: "userId",
    secret: "sessionSecret", 
    resave: false, 
    saveUninitialized: false,
    cookie: {
        expires: 60*60*24
    }
}))

const db = mysql.createConnection({
    user:'root',
    password:'Password@123',
    host: 'localhost',
    database: 'authTry'
})

app.post('/signup', (req, res) =>{
    const {username, password} = req.body; 
    
    bcrypt.hash(password, saltRounds).then((hashedPassword) => {
        db.query(
            "insert into users(username, password) values (?,?)", 
            [username, hashedPassword],
            (err, result) => {
                console.log(err)
            })
    }).catch(e => console.log(e))
})
 

app.post('/login', (req, res) =>{
    const username = req.body.username;
    const password = req.body.password; 
    
    db.query(
    "SELECT * FROM users WHERE username = ?", 
    username, 
    (e,result)=>{
        if(e){
            console.log(e); 
        }
        if(result.length > 0){
            bcrypt.compare(password, result[0].password, (err, response) =>{
                if(response){
                    req.session.user = result 
                    console.log(req.session.user)
                    res.send(result)
                }else{
                    res.send({message: "wrong pw"})
                }
            }) 
        }else{
            res.send({message: "user not found."})
        }
    })
})

app.get('/login', (req, res) =>{
    if(req.session.user){
        res.send({auth: true, user: req.session.user})
    }else{
        res.send({auth: false})
    }
})

app.listen(3001, () =>{
    console.log("running server")
})