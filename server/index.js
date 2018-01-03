const express = require('express');
let app = express();
const github = require('../helpers/github.js');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  github.getReposByUsername(req.body.username, (err, data) => {
    if (err) {
      res.sendStatus(404);
    } else {
      data.forEach((repo) => {
        var savedRepo = new db.Repo({
          id: repo.id,
          owner: repo.owner.login,
          name: repo.name,
          url: repo.html_url,
          description: repo.description,
          created_at: repo.created_at,
          star_count: repo.stargazers_count
        });
        console.log('Saving repo' + savedRepo.id);
        savedRepo.save();
      });
      res.status(200).json(data);
    }
  })
});
 
app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.Repo.find().sort({created_at: 'descending'}).limit(25).exec()
    .then(function(data){
      console.log('Successfully retrieved repos from db: ', data);
      res.status(200).send(data);
    })
    .catch(function(err){
      console.log('Could not retrieve repos from db: ', err);
    });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

