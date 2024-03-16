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


app.post("/netflix", async (req, res) => {
    try {
        
        const response = await axios.request(options);
        var url = [];
        const perPage = 1;
        for (let i = 0; i < response.data.length; i++ ) {
            const query = response.data[i].details.title;
            var  updOptions = {
                method: 'POST',
                url: 'https://google-api31.p.rapidapi.com/imagesearch',
                headers: {
                  
                },
                data: {
                  text: query,
                  safesearch: 'on',
                  region: 'wt-wt',
                  color: '',
                  size: '',
                  type_image: '',
                  layout: '',
                  max_results: 1
                }
              };
              const newres = await axios.request(updOptions);
              console.log(newres.data);
              const imgn = newres.data.result[0].image;
            url.push(imgn);
        }
        console.log(url);
        res.render("index.ejs", { content: response.data, url: url });
    } catch (error) {
        console.error(error);
    }
})
app.use(express.static("public"));

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
            var  updOptions = {
                method: 'POST',
                url: 'https://google-api31.p.rapidapi.com/imagesearch',
                headers: {
                  
                },
                data: {
                  text: query,
                  safesearch: 'on',
                  region: 'wt-wt',
                  color: '',
                  size: '',
                  type_image: '',
                  layout: '',
                  max_results: 1
                }
              };
              const newres = await axios.request(updOptions);
              const imgn = newres.data.result[0].image;
            url.push(imgn);
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
            var  updOptions = {
                method: 'POST',
                url: 'https://google-api31.p.rapidapi.com/imagesearch',
                headers: {
                  'content-type': 'application/json',

                  'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
                },
                data: {
                  text: query,
                  safesearch: 'on',
                  region: 'wt-wt',
                  color: '',
                  size: '',
                  type_image: '',
                  layout: '',
                  max_results: 1
                }
              };
              const newres = await axios.request(updOptions);
              const imgn = newres.data.result[0].image;
            url.push(imgn);
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
            var  updOptions = {
                method: 'POST',
                url: 'https://google-api31.p.rapidapi.com/imagesearch',
                headers: {
                  'content-type': 'application/json',
      
                  'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
                },
                data: {
                  text: query,
                  safesearch: 'on',
                  region: 'wt-wt',
                  color: '',
                  size: '',
                  type_image: '',
                  layout: '',
                  max_results: 1
                }
              };
              const newres = await axios.request(updOptions);
              const imgn = newres.data.result[0].image;
            url.push(imgn);
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
            var  updOptions = {
                method: 'POST',
                url: 'https://google-api31.p.rapidapi.com/imagesearch',
                headers: {
                  'content-type': 'application/json',
      
                  'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
                },
                data: {
                  text: query,
                  safesearch: 'on',
                  region: 'wt-wt',
                  color: '',
                  size: '',
                  type_image: '',
                  layout: '',
                  max_results: 1
                }
              };
              const newres = await axios.request(updOptions);
              const imgn = newres.data.result[0].image;
            url.push(imgn);
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
 
          'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
}

app.post("/:id", async (req, res) => {
    try {
        const titleID = parseInt(req.params.id);
        const options_1 = {
            method: 'GET',
            url: 'https://imdb146.p.rapidapi.com/v1/find/',
            params: {
              query: req.body.titleName,
            },
            headers: {
             
              'X-RapidAPI-Host': 'imdb146.p.rapidapi.com'
            }
        };

        const  imgOptions = {
            method: 'POST',
            url: 'https://google-api31.p.rapidapi.com/imagesearch',
            headers: {
              'content-type': 'application/json',
          
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
        det1 = det1.data.titleResults.results[0].id;
        console.log(det1);
        const options_2 = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/title/get-user-reviews',
            params: {
                tconst: det1
            },
            headers: {
         
                'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
            }
        }
        const reviews = await axios.request(options_2);
        var revArr = reviews.data.reviews;
        var list = [];
        for (let i = 0; i < 3; i++) {
            list.push({
                author: revArr[i].author.displayName,
                rating: revArr[i].authorRating,
                title: revArr[i].reviewTitle,
                content: revArr[i].reviewText,
            })
        }
        res.render("details.ejs", { detail: query[0], link: img, video: vid , id: titleID, rev: list});
    } catch (error) {
        console.error(error);
    }
})




app.listen(3000, (req, res) => {
    console.log(`Server is listening on port 3000.`);
})
