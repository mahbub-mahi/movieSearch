$(document).ready(() => {
  var apikey = "149670aa";
  $("#searchForm").on("submit", (e) => {
    e.preventDefault();
    var searchText = $("#searchText").val();

    var url = "https://www.omdbapi.com/?apikey=" + apikey;

    $.ajax({
      method: "GET",
      url: url + "&s=" + searchText,
      success: function (data) {
        console.log(data);
        let movies = data.Search;
        console.log(movies);
        output = "";
        $.each(movies, (index, movie) => {
          output += `
          <div class="col-md-3 col-sm-6">
          <div class = "well text-center">
          <img src="${movie.Poster}">
          <p>${movie.Year}</p>
          <h5>${movie.Title}</h5>
          <a class ="btn btn-primary" href="https://www.imdb.com/title/${movie.imdbID}" target="popup">MOVIE DETAILS ON IMDB</a>
          </div></div>`;
        });

        $("#movies").html(output);
      },
    });
  });
});
