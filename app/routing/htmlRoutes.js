
let path = require('path');

module.exports = function (app) {
    app.get('/home', (req, res) => {
        return (res.sendFile(path.join(__dirname, '../public/home.html')))
    })

    app.get('/survey', (req, res) => {
        return (res.sendFile(path.join(__dirname, '../public/survey.html')))
    })

    app.get('/', (req, res) => {
        return (res.sendFile(path.join(__dirname, '../public/home.html')))
    
    })

}