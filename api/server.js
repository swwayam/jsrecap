const { urlencoded } = require("express");
const express = require("express");


const app = express();

app.use(express.json());

var corsOptions = {
    origin: 'http://127.0.0.1:5500/recap.html',
    optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions));

app.get('/getTheData', (req,res) => {
    res.json({
        "links": {
          "self": "http://example.com/articles",
          "next": "http://example.com/articles?page[offset]=2",
          "last": "http://example.com/articles?page[offset]=10"
        },
        "data": [{
          "type": "articles",
          "id": "1",
          "attributes": {
            "title": "JSON:API paints my bikeshed!"
          },
          "relationships": {
            "author": {
              "links": {
                "self": "http://example.com/articles/1/relationships/author",
                "related": "http://example.com/articles/1/author"
              },
              "data": { "type": "people", "id": "9" }
            },
            "comments": {
              "links": {
                "self": "http://example.com/articles/1/relationships/comments",
                "related": "http://example.com/articles/1/comments"
              },
              "data": [
                { "type": "comments", "id": "5" },
                { "type": "comments", "id": "12" }
              ]
            }
          },
          "links": {
            "self": "http://example.com/articles/1"
          }
        }],
        "included": [{
          "type": "people",
          "id": "9",
          "attributes": {
            "firstName": "Dan",
            "lastName": "Gebhardt",
            "twitter": "dgeb"
          },
          "links": {
            "self": "http://example.com/people/9"
          }
        }, {
          "type": "comments",
          "id": "5",
          "attributes": {
            "body": "First!"
          },
          "relationships": {
            "author": {
              "data": { "type": "people", "id": "2" }
            }
          },
          "links": {
            "self": "http://example.com/comments/5"
          }
        }, {
          "type": "comments",
          "id": "12",
          "attributes": {
            "body": "I like XML better"
          },
          "relationships": {
            "author": {
              "data": { "type": "people", "id": "9" }
            }
          },
          "links": {
            "self": "http://example.com/comments/12"
          }
        }]
      })
})

app.listen(4000, () => {
    console.log("server running at 4000");
})