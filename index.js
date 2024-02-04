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
    ids: '80057281, 80057280, 80057250, 80057240, 80057244, 80057284, 70114497, 70241118, 81011211, 80130521, 60022589, 70060008',
  },
  headers: {
    // 'X-RapidAPI-Key': '3199b27143msh3eb08fcc04a7799p1aabbfjsn60f5f055ff69',
    'X-RapidAPI-Key': 'a1a06f4e38msh9278b7ef0e4760dp136a39jsnd96dc0b8b758',
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
app.use(express.static("public"));
/* const options = {
  method: 'GET',
  url: 'https://netflix54.p.rapidapi.com/search/',
  params: {
    query: 'drama',
    offset: '0',
    limit_titles: '50',
    limit_suggestions: '20',
    lang: 'en'
  },
  headers: {
    'X-RapidAPI-Key': '3199b27143msh3eb08fcc04a7799p1aabbfjsn60f5f055ff69',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
}; */
app.post("/thriller", async (req, res) => {
    try {
        const response = await axios.request(options);
        var url = [];
        const perPage = 1;
        var needed = [];
        for (let i = 0; i < response.data.length; i++ ) {
            const query = response.data[i].details.genres;
            var genres = query.find((obj) => obj.name.includes("Horror") || obj.name.includes("Sci-Fi"));
            if (genres) {
                needed.push(response.data[i]);
            }
        }
        for (let i = 0; i < needed.length; i++ ) {
            const query = needed[i].details.title;

            var v = await axios.get(`https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}`, 
            { headers: {
                'Authorization': imgAPIKey,
            } } );
            url.push(v.data.photos[0].src.original);
        }
        console.log(url);
        
        res.render("index.ejs", { content: needed, url: url });
    } catch (error) {
        console.error(error);
    }
})
app.use(express.static("public"));
app.post("/comedy", async (req, res) => {
    try {
        const response = await axios.request(options);
        var url = [];
        const perPage = 1;
        var needed = [];
        for (let i = 0; i < response.data.length; i++ ) {
            const query = response.data[i].details.genres;
            var genres = query.find((obj) => obj.name.includes("Comedy") || obj.name.includes("Kid"));
            if (genres) {
                needed.push(response.data[i]);
            }
        }
        for (let i = 0; i < needed.length; i++ ) {
            const query = needed[i].details.title;

            var v = await axios.get(`https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}`, 
            { headers: {
                'Authorization': imgAPIKey,
            } } );
            url.push(v.data.photos[0].src.original);
        }
        console.log(url);
        
        res.render("index.ejs", { content: needed, url: url });
    } catch (error) {
        console.error(error);
    }
})

app.post("/romance", async (req, res) => {
    try {
        const response = await axios.request(options);
        var url = [];
        const perPage = 1;
        var needed = [];
        for (let i = 0; i < response.data.length; i++ ) {
            const query = response.data[i].details.genres;
            var genres = query.find((obj) => obj.name.includes("Romance") || obj.name.includes("Teen"));
            if (genres) {
                needed.push(response.data[i]);
            }
        }
        for (let i = 0; i < needed.length; i++ ) {
            const query = needed[i].details.title;

            var v = await axios.get(`https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}`, 
            { headers: {
                'Authorization': imgAPIKey,
            } } );
            url.push(v.data.photos[0].src.original);
        }
        console.log(url);
        
        res.render("index.ejs", { content: needed, url: url });
    } catch (error) {
        console.error(error);
    }
})

app.post("/action", async (req, res) => {
    try {
        const response = await axios.request(options);
        var url = [];
        const perPage = 1;
        var needed = [];
        for (let i = 0; i < response.data.length; i++ ) {
            const query = response.data[i].details.genres;
            var genres = query.find((obj) => obj.name.includes("Action") || obj.name.includes("Drama"));
            if (genres) {
                needed.push(response.data[i]);
            }
        }
        for (let i = 0; i < needed.length; i++ ) {
            const query = needed[i].details.title;

            var v = await axios.get(`https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}`, 
            { headers: {
                'Authorization': imgAPIKey,
            } } );
            url.push(v.data.photos[0].src.original);
        }
        console.log(url);
        
        res.render("index.ejs", { content: needed, url: url });
    } catch (error) {
        console.error(error);
    }
})

const newOptions = {
   
        method: 'GET',
        url: 'https://netflix54.p.rapidapi.com/title/details/',
        params: {
          ids: '',
        },
        headers: {
          'X-RapidAPI-Key': 'a1a06f4e38msh9278b7ef0e4760dp136a39jsnd96dc0b8b758',
          'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
}

app.post("/:id", async (req, res) => {
    try {
        const titleID = parseInt(req.params.id);
        const options_1 = {
            method: 'GET',
            url: 'https://mdblist.p.rapidapi.com/',
            params: {s: req.body.titleName},
            headers: {
              'X-RapidAPI-Key': '3199b27143msh3eb08fcc04a7799p1aabbfjsn60f5f055ff69',
              'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
            }
        };
        const  imgOptions = {
            method: 'POST',
            url: 'https://google-api31.p.rapidapi.com/imagesearch',
            headers: {
              'content-type': 'application/json',
              'X-RapidAPI-Key': 'a1a06f4e38msh9278b7ef0e4760dp136a39jsnd96dc0b8b758',
              'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
            },
            data: {
              text: req.body.titleName,
              safesearch: 'on',
              region: 'wt-wt',
              color: '',
              size: '',
              type_image: '',
              layout: '',
              max_results: 1
            }
          };
          const vidOptions = {
            method: 'POST',
            url: 'https://google-api31.p.rapidapi.com/videosearch',
            headers: {
              'content-type': 'application/json',
              'X-RapidAPI-Key': 'a1a06f4e38msh9278b7ef0e4760dp136a39jsnd96dc0b8b758',
              'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
            },
            data: {
              text: req.body.titleName,
              safesearch: 'off',
              timelimit: '',
              duration: '',
              resolution: '',
              region: 'wt-wt',
              max_results: 1
            }
          };
        newOptions.params.ids = req.params.id;
        const response = await axios.request(newOptions);
        const imgRes = await axios.request(imgOptions);
        const vidRes = await axios.request(vidOptions);
        const img = imgRes.data.result[0].image;
        const vid = vidRes.data.result[0].embed_url;
        console.log(img);
        const query = response.data;
        console.log(query);
        var det1 = await axios.request(options_1);
        det1 = det1.data.imdbid;
        console.log(det1);
        const options_2 = {
            method: 'GET',
            url: 'https://mdblist.p.rapidapi.com/',
            params: {i: det1},
            headers: {
                'X-RapidAPI-Key': '3199b27143msh3eb08fcc04a7799p1aabbfjsn60f5f055ff69',
                'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
            }
        }
        const reviews = await axios.request(options_2);
        var revArr = reviews.data.reviews;
        res.render("details.ejs", { detail: query[0], link: img, video: vid , id: titleID, rev: revArr});
    } catch (error) {
        console.error(error);
    }
})




app.listen(3000, (req, res) => {
    console.log(`Server is listening on port 3000.`);
})