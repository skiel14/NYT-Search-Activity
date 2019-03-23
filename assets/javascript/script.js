$("#submit-button").on("click", function() {
  event.preventDefault();
  var search = $('#search-term').val();
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    search + "&&api-key=rcaeiDXEtM5TbnCfdxpxGx4A6EAnJ3Vc";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
      let temp;
      let author;
      let results = response.response.docs;
      console.log(response);
      console.log(response.response.docs);
      for (let i=0; i<results.length; i++) {
        title = ($('<div>').html(results[i].headline.main));
        author = ($('<div>').html(results[i].byline.original));
        $('#content').append(title);
        $('#content').append(author);
      }
    });
  });
