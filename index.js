import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

const options = {
  method: 'GET',
  url: 'https://netflix54.p.rapidapi.com/title/details/',
  params: {
    ids: '80057281, 80057280, 80057250, 80057240, 80057244, 80057284, 70114497, 70241118, 81011211',
    lang: 'en'
  },
  headers: {
    'X-RapidAPI-Key': '3199b27143msh3eb08fcc04a7799p1aabbfjsn60f5f055ff69',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

const imgAPIKey = "vslAvNR8V2hOMX2Yvew79TYWX1q6rzAtS0D41uugRIgZTHEg1Bnm8XBd";
app.post("/netflix", async (req, res) => {
    try {
        const response = await axios.request(options);
        var url = [];
        const perPage = 1;
        for (let i = 0; i < response.data.length; i++ ) {
            const query = response.data[i].details.title;

            var v = await axios.get(`https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}`, 
            { headers: {
                'Authorization': imgAPIKey,
            } } );
            url.push(v.data.photos[0].src.original);
        }
        console.log(url);
        res.render("index.ejs", { content: response.data, url: url });
    } catch (error) {
        console.error(error);
    }
})


app.listen(3000, (req, res) => {
    console.log(`Server is listening on port 3000.`);
})