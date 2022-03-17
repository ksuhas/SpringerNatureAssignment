const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/db');

// Config
dotenv.config({path:'config/config.env'});

// Connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is listening on http://localhost:${process.env.PORT}`);
});

process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled promise rejection...`);

    server.close(()=>{
        process.exit(1);
    });
})