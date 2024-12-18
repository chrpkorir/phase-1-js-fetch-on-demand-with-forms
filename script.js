const movies = [
    { id: 1, title: "The Brave Little Toaster", summary: "A toaster and his appliance friends embark on a quest to find their owner." },
    { id: 2, title: "The Princess Bride", summary: "A young woman and her true love must battle the evil prince and save her father." },
    { id: 3, title: "Spirited Away", summary: "A young girl becomes trapped in a strange world of spirits and gods, and must find a way to escape." }
  ];
function searchMovieByID(id) {
    // Find the movie in the movies array by matching the ID
    return movies.find(movie => movie.id === parseInt(id, 10));
  }
  
  // Handle the form submit event
  document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from reloading the page
    
    // Get the ID entered by the user
    const searchID = document.getElementById("searchByID").value;
  
    // Find the movie with the given ID
    const movie = searchMovieByID(searchID);
  
    // Find the movieDetails section
    const movieDetails = document.getElementById("movieDetails");
  
    // If movie is found, display its title and summary
    if (movie) {
      movieDetails.innerHTML = `
        <h4>${movie.title}</h4>
        <p>${movie.summary}</p>
      `;
    } else {
      // If movie is not found, display an error message
      movieDetails.innerHTML = "<h4>Movie not found</h4><p>Please check the ID and try again.</p>";
    }
  });