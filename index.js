const express = require("express");
const cors = require('cors');  // Import the CORS package
const app = express();  

app.use(express.json());
// Allow requests from specific origins, in your case, http://127.0.0.1:5500
// app.use(cors({
//     origin: 'http://127.0.0.1:5500',  // Replace with your frontend's address
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allowable HTTP methods
//     credentials: true // If your API requires cookies/auth headers
// }));

// Allow all origins
app.use(cors());


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.get("/", (request, response) => {
    const status = {
        "Status": "Running"
    };

    response.send(status);
});