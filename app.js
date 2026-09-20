const express = require("express");
const socket = require("socket.io");
const http = require("http");
const { Chess } = require("chess.js");
const path = require("path");
const { log } = require("console");

const app = express();
const server = http.createServer(app);
const io = socket(server);   //socket ke through  hi real time connection hoga do logo me(sending msgs and all)

const chess = new Chess();
let players = {};
let currentPlayer = "w";


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));


app.get("/", (req, res)=>{
    res.render("index", {title: "Chess Game"});
})

io.on("connection", function(uniquesocket){       //socket: unique informatiion about the connection that came
    console.log("connected");

    // uniquesocket.on("hey", function(){

    //     io.emit("hey hello");                                   //if we want to send data to everyone

    //     // console.log("hey recieved");              //frontend se jo bheja hai vo be pe on krke recieve kr lena hai
    // })


    // uniquesocket.on("disconnect", function(){
    //     console.log("disconnected");
        
    // })

    if(!players.white){
        players.white = uniquesocket.id;
        uniquesocket.emit("playerRole", "w");
    }
    else if(!players.black){
        players.black = uniquesocket.id;
        uniquesocket.emit("playerRole", "b");
    }
    else{
        uniquesocket.emit("spectatorRole");
    }


    uniquesocket.on("disconnect", function(){
        if(uniquesocket.id === players.white){
            delete players.white;
        }
        else if(uniquesocket.id === players.black){
            delete players.black;
        }
    })

    uniquesocket.on("move", (move)=>{
        try{
            if(chess.turn() === 'w' && uniquesocket.id !== players.white) return;
            if(chess.turn() === 'b' && uniquesocket.id !== players.black) return;    //white ke time white b pe b

            const result = chess.move(move);
            if(result){
                currentPlayer = chess.turn();
                io.emit("move", move);
                io.emit("boardState", chess.fen())             //chess.fen->board ki current state
            }
            else{
                console.log("Invalid move: ", move);
                uniquesocket.emit("InvalidMove", move);
                
            }
        }
        catch(err){
            console.log(err);
            uniquesocket.emit("Invalid move", move)
            
        }
    })
})


server.listen(3000, function(){
    console.log("listening on port 3000");
})

