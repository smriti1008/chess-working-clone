# ♟️ Chess Clone

A real-time multiplayer chess game built using **Node.js, Express.js, Socket.IO, and Chess.js**. The project recreates the core experience of playing chess online, with real-time communication between two players.

## 🚀 Features

* ♟️ Interactive 8×8 chessboard
* 👥 Real-time multiplayer gameplay
* 🔄 Real-time moves using Socket.IO
* ♔ Automatic player assignment:

  * White player
  * Black player
  * Spectators
* ✅ Legal chess move validation using Chess.js
* 🔁 Automatic board state synchronization
* 🖱️ Drag-and-drop chess pieces
* 📱 Responsive chessboard interface
* 🎯 Pawn promotion support

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js
* Socket.IO

### Libraries

* Chess.js
* EJS

## 📂 Project Structure

```text
Chess-Clone/
│
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
│
├── views/
│   └── index.ejs
│
├── app.js
├── package.json
├── package-lock.json
└── .gitignore
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/chess-clone.git
```

### 2. Navigate to the project

```bash
cd chess-clone
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
node app.js
```

If you are using Nodemon:

```bash
npx nodemon app.js
```

### 5. Open the game

Open:

```text
http://localhost:3000
```

Open the game in **two browser tabs/windows** to test multiplayer gameplay.

## 🎮 How It Works

When a player connects to the server:

1. The first connected player is assigned **White**.
2. The second player is assigned **Black**.
3. Additional users join as **spectators**.
4. Players can drag and drop their pieces.
5. The move is sent to the server using Socket.IO.
6. Chess.js validates and executes the move.
7. The server broadcasts the move to all connected clients.
8. Each client's board is updated in real time.

### Real-Time Communication

```text
Player 1
   │
   │ Move
   ▼
Socket.IO
   │
   ▼
Node.js Server
   │
   │ Validate with Chess.js
   ▼
Updated Game State
   │
   ▼
Socket.IO
   │
   ├──────────────► Player 1
   │
   └──────────────► Player 2
```

## 🧠 Key Concepts Learned

Through this project, I practiced:

* Building a real-time application with **Socket.IO**
* Client-server communication
* WebSockets and event-based communication
* Express.js server setup
* Managing multiple connected users
* Player role assignment
* Real-time state synchronization
* DOM manipulation
* Drag-and-drop events
* Working with external JavaScript libraries
* Chess move validation using Chess.js
* Git and GitHub project management

## 🔮 Future Improvements

* Add player names/usernames
* Add chess clocks/timers
* Add game rooms
* Add rematch functionality
* Add move history
* Add captured-piece display
* Add check/checkmate notifications
* Add resign and draw options
* Add authentication
* Store games in MongoDB
* Improve mobile responsiveness

## 📸 Screenshots

Add screenshots of the chessboard here:

```text
![Chess Clone](./screenshots/chessboard.png)
<img width="1920" height="1080" alt="Screenshot (149)" src="https://github.com/user-attachments/assets/3f0b8823-9ee1-4953-865d-afa6eaf7b3e5" />

```

## 👩‍💻 Author

Smriti Singh

Built as a full-stack learning project to practice **Node.js, Express.js, Socket.IO, and real-time web applications**.
