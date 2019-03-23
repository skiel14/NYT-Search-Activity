$("#clear").on("click", function() {
  $('#term').val('');
  $('#numRecords').val('');
  $('#startYr').val('');
  $('#endYr').val('');
  $('#resultsDiv').empty();
});

$("#search").on("click", function() {
  var term = $('#term').val();
  var num = $('#numRecords').val();
  var startYr = $('#startYr').val();
  var endYr = $('#endYr').val();
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+q+"&begin_date="+startYr+"0101&end_date="+endYr+"1231&api-key=oIDyICAhViKBi7YdzbPSueih3YEvNnIZ";


  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var headline = response.docs.headline.main;
    var articleURL = resonse.docs.web_url;
    var firstName = response.docs.byline.person.firstname;
    var middleName = response.docs.byline.person.middlename;
    var lastName = response.docs.byline.person.lastname;
    var author = "By:  "+firstName+" "+middleName+" "+lastName+"";

    var articleDiv = $("<div>");
  });

});


{/* <div class="card bg-light mb-3" style="max-width: 20rem;">
  <div class="card-body">
    <h4 class="card-title">Light card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}
