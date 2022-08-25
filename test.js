document.addEventListener('DOMContentLoaded', () => {

const encodedParams = new URLSearchParams();
encodedParams.append("symbol", "AAPL"); // stockName
// change the AAPL here to a var based on user input

const options = {
	method: 'POST',
	headers: {
		// 'content-type': 'application/x-www-form-urlencoded',
		// 'X-RapidAPI-Key': 'a1bad531c4mshbfc8b61739ad861p1e4714jsn4dc5f52bb362',
		// 'X-RapidAPI-Host': 'yahoo-finance97.p.rapidapi.com'
	},
	body: encodedParams
};

fetch('https://yahoo-finance97.p.rapidapi.com/stock-info', options)
	.then(response => response.json())
	.then(response => {
        console.log(response['currentPrice'])
    })
    // for catch, tell user to reenter ticker
	.catch(err => console.error(err));
})
    // user writes apple, stock is AAPL might be extra
    // function to correct user input

    // fetch('https://yahoo-finance97.p.rapidapi.com/stock-info', options)
	// .then(response => response.json())
	// .then(response => console.log(response))
	// .catch(err => console.error(err));
// }


//currentPrice: 167.6
// dayHigh, dayLow