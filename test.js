var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
		"x-rapidapi-key": "8d3282fee1mshbebce8c8aa7fee1p14e84cjsnad90aca4de3f"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});