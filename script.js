
fetch('https://quotes15.p.rapidapi.com/quotes/random/',
{

method: 'GET',
headers: {
    'X-RapidAPI-Key': '83e8c54dc2msh010924df6528ed8p1c6a5cjsnab59286049e0',
    'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
}
})
	.then(response => response.json())
	.then(response =>{ console.log(response)
    document.getElementById('quote').innerHTML=response.content;
    document.getElementById('author').innerHTML=response.originator.name;
    })
	