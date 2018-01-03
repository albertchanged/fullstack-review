const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, () => {
  // mongoose.connection.db.dropDatabase();
});

let repoSchema = mongoose.Schema({
  id: {type: Number, index: {unique: true, dropDups: true}},
  owner: String,
  name: String,
  url: String,
  description: String,
  created_at: Date,
  star_count: Number
});

let Repo = mongoose.model('Repo', repoSchema);
var smallRepo = new Repo();
let save = (repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  smallRepo.save((repo) => {});
}

module.exports.save = save;
module.exports.Repo = Repo;