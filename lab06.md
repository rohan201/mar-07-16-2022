* Create a folder called __lab-06__
* Design two functional components, __CovidGrid__ and __Summary__
* Every row item itself is a separate functional component called __CountryItem__

* In __CovidGrid__ display the __"country"__ and __"cases"__ columns alone in a tabular format from the following data 

* Load this JSON only once

``` json
[
	{ "country": "USA", "cases": 188592, "recovered": 7251, "deaths": 4055 },
	{ "country": "Italy", "cases": 105792, "recovered": 15729 , "deaths": 12428 },
	{ "country": "Spain", "cases": 95923, "recovered": 19259, "deaths": 8464 },
	{ "country": "France", "cases": 52128, "recovered": 9444, "deaths": 3523 },
	{ "country": "India", "cases": 1590, "recovered": 148, "deaths": 45 }
]
```

* Display the row in red background if the deaths are more than 5000
* When you click on any row in the __CovidGrid__, display all the data about the clicked country in __Summary__ component in a paragraph
