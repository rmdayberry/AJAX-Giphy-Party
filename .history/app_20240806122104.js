console.log("Let's get this party started!");

document
  .getElementById("gifForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const searchTerm = document.getElementById("searchTerm").value;
    const apiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
    const url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}`;
  });
