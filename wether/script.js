const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd26a9e4f54mshfe6daacaf069be9p14f7dejsna2656675569e',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

async function MyFunction(){
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
}