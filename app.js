var corsApiUrl = "https://cors-anywhere.herokuapp.com/";
// TODO: REPLACE YOUR TOKEN
var apiToken = "BKjvhnSjrGHs5GofCeuTBCB_6OZKq4yr1gnnil0Mjpg";

// CORS stands for "cross origin resource sharing" -- you'll be making http requests in order
// DON'T CHANGE THIS: fetches the data from the API endpoint
const doCORSRequest = (options) => {
  var x = new XMLHttpRequest();
  x.open("GET", corsApiUrl + options.url);
  x.send(options.data);
  return x;
};

// Example promise that executes the GET request above and waits for it to finish before resolving
const corsPromise = () =>
  new Promise((resolve, reject) => {
    const request = doCORSRequest({
      url: "https://trefle.io/api/v1/plants" + apiToken,
    });
    resolve(request);
  });

// THIS IS SOME SAMPLE CODE FOR HOW TO USE PROMISES -- feel free to adapt this into a function!


corsPromise().then(
  (request) =>
    (request.onload = request.onerror = function () {
      // TODO: ADD FUNCTION, ETC. FOR WHATEVER YOU WANT TO DO ONCE THE DATA IS RECEIVED
      handleResponse(request.response);
      
    })
);

const handleResponse = (requestResponse) => {
  const jsonified = JSON.parse(requestResponse);
  const plantsArray = jsonified.data;
  console.log(plantsArray);

  plantsArray.map((arrayItem) => {
    const wrapper = document.createElement("div");
    const img = document.createElement("img");
    const header = document.createElement("h2");
    header.innerText = arrayItem.slug;
    img.setAttribute("src", arrayItem.image_url);
    wrapper.appendChild(header);
    wrapper.appendChild(img);
    document.getElementById("plants").appendChild(wrapper);
    })
}











//// TODO: ADD WHATEVER FUN CONTENT YOU WANT ////

