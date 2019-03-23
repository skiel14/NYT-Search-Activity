$("#clear").on("click", function() {
  $('#search-term').val('');
  $('#number-of-records').val('');
  $('#start-year').val('');
  $('#end-year').val('');
  $('#content').empty();
});

$("#search").on("click", function() {
  var q = $('#search-term').val();
  var num = $('#number-of-records').val();
  var startYr = $('#start-year').val();
  var endYr = $('#end-year').val();
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+q+"&begin_date="+startYr+"0101&end_date="+endYr+"1231&api-key=oIDyICAhViKBi7YdzbPSueih3YEvNnIZ";


  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    for(var i=1; i<=num; i++) {
      var headline = response.docs.headline.main;
      var articleURL = resonse.docs.web_url;
      var firstName = response.docs.byline.person.firstname;
      var middleName = response.docs.byline.person.middlename;
      var lastName = response.docs.byline.person.lastname;
      var author = "By:  "+firstName+" "+middleName+" "+lastName+"";

      var articleDiv = $("<div>");
      articleDiv.addClass("car bg-light mb-3");
      var articleBody = $("<div>");
      articleBody.addClass("card-body");
      var title = $("<h4>");
      title.addClass("card-title");
      title.text(""+i+". "+headline);
      var tagline = $("<p>");
      tagline.addClass("card-text");
      tagline.text(author);
      articleBody.append(title);
      articleBody.append(tagline);
      articleDiv.append(articleBody);
      $("#content").append(articleDiv);
    }
  });

});


{/* <div class="card bg-light mb-3" style="max-width: 20rem;">
  <div class="card-body">
    <h4 class="card-title">Light card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}
