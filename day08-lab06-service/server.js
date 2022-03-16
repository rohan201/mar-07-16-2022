const app = require('express')();
app.get('/coviddata', (req, res) => {
    let data = [
        { "country": "USA", "cases": 188592, "recovered": 7251, "deaths": 4055 },
        { "country": "Italy", "cases": 105792, "recovered": 15729 , "deaths": 12428 },
        { "country": "Spain", "cases": 95923, "recovered": 19259, "deaths": 8464 },
        { "country": "France", "cases": 52128, "recovered": 9444, "deaths": 3523 },
        { "country": "India", "cases": 1590, "recovered": 148, "deaths": 45 }
    ];
    res.json(data);
});

app.listen('9090', () => {
    console.log('Server started in 9090');
});