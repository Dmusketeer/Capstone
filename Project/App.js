const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const ownerRoute = require('./routes/owner')
const builderRoute = require('./routes/builder')
// const createProject = require('./routes/createProject')
var multer = require('multer');
const Port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
const http = require('http').createServer(app);

const password = process.env.MONGO_PASSWORD;

// const mongodbURI = `mongodb+srv://dheeraj:${password}@atlastesting.1itdz.mongodb.net/capstone?retryWrites=true&w=majority`;

// mongoose.connect(mongodbURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// mongoose.Promise = global.Promise;

// mongoose.connection.once("open", () => {
//     console.log("Database Connected...");
// });
// mongoose.connection.on("error", (error) => {
//     console.log("Error connecting database..."), error;
// });

// multer
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: storage });



app.use('/builder', builderRoute);
app.use('/owner', ownerRoute);
// app.use('/createproject', createProject)


app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
// Socket 
const io = require('socket.io')(http)

io.on('connection', (socket) => {
    console.log('Connected...')
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
    })

})

app.get('/msg', (req, res) => {
    res.send("hey how are you");
});

app.listen(Port, () => {
    console.log('listening on port ' + Port);
});
