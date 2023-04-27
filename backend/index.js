const express = require('express');
const cors = require('cors');
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/login", async (req, res) => {
    const { username } = req.body;
     try {
         const r = await axios.put(
             "https://api.chatengine.io/users/",
             {username, secret: username, first_name: username},
             {headers:  {"private-key": "3d6a2417-5de0-4fe9-ae7d-3851cd4b545e"}}
         );
         return res.status(r.status).json(r.data);
     } catch (e) {
         return res.status(e.response.status).json(e.response.data);
     }
 });

app.listen(3001);