
var results = 0;
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
var apiKey = "8210527510e04ccc80082df7fefc69de";
var searchTerm;
var startYear;
var endYear;



  $("#search-button").on("click", function() {

        results = $("#results").text();
        searchTerm = $("#search-term").text();
        startYear = $("start-year").text();
        endYear = $("end-year").text();
        queryURL += "api-key=" + apiKey;
        queryURL += "&" + "q=" + searchTerm;
        if(startYear <= endYear)
        {
            queryURL += "&" + "begin_date=" + startYear;
            queryURL += "&" + "end_date=" + endYear; 
        }

        if(results > 0)
        {
            queryURL += "&" + "page=" + results;
        }

        $.ajax({
            url: queryURL,
            method: "GET"
          })
        
          .then()
          {
                //add in the results here
          }
        
  });

  $("#clear-button").on("click", function() {
    $("#search-term").empty(" ")
    $("#results").empty("0");
    $("#start-year").empty(" ");
    $("#end-year").empty();
    

});