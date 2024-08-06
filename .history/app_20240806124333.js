console.log("Let's get this party started!");
//handle form submissions and AJAX requests
document
  .getElementById("gifForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const searchTerm = document.getElementById("searchTerm").value;
    const apiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
    const url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}`;

    try {
      const response = await axios.get(url);
      console.log(response.data);
      //append gifs to page
      const gifUrl = response.data.data[0].images.fixed_height.url; //get first gif url
      const img = document.createElement("img");
      img.src = gifUrl;
      document.getElementById("gifContainer").appendChild(img);
    } catch (error) {
      console.log("Error finding GIF:", error);
    }
  });

//add eventListener to remove GIFs button
document.getElementById("removeAllBtn").addEventListener("click", function () {
  const gifContainer = document.getElementById("gifContainer");
  while (gifContainer.firstChild) {
    gifContainer.removeChild(gifContainer.firstChild);
  }
});
