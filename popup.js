// let changeColor = document.getElementById("changeColor");

// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

// // When the button is clicked, inject setPageBackgroundColor into current page
// changeColor.addEventListener("click", async () => {
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       function: setPageBackgroundColor,
//     });
//   });
  
//   // The body of this function will be executed as a content script inside the
//   // current page
//   function setPageBackgroundColor() {
//     chrome.storage.sync.get("color", ({ color }) => {
//       document.body.style.backgroundColor = color;
//     });
// //   }

document.addEventListener('DOMContentLoaded', () => {
const encodedParams = new URLSearchParams();
encodedParams.append("symbol", "AAPL");

const options = {
	method: 'POST',
	headers: {
		// 'content-type': 'application/x-www-form-urlencoded',
		// 'X-RapidAPI-Key': 'a1bad531c4mshbfc8b61739ad861p1e4714jsn4dc5f52bb362',
		// 'X-RapidAPI-Host': 'yahoo-finance97.p.rapidapi.com'
	},
	body: encodedParams
};

// either event listner for a button to refresh, or settTimeout for every x minutes
fetch('https://yahoo-finance97.p.rapidapi.com/stock-info', options)
	.then(response => response.json())
	.then(response => console.log(response['data']['currentPrice']
    
    
    ))
	.catch(err => console.error(err));

    // here
    // create element
    // append
    // blabla
})