// We create index.js file in the repository folder to export all the repositories. This is a good practice to export all the files from a single file.
// Such that we can import all the repositories from a single file in the controller.
// We dont have to require all the repositories in the controller, we can just require the index.js file and it will automatically require all the repositories.
// Key value pair is used to export all the repositories.

module.exports = {
    CityRepository : require('./city-repository'),
}