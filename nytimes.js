
var results = 0;
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
var apiKey = "8210527510e04ccc80082df7fefc69de";
var searchTerm;
var startYear;
var endYear;



  $("#search").on("click", function() {
    event.preventDefault();
        results = $("#num-records-input").val().trim();
        searchTerm = $("#search-term-input").val().trim();
        startYear = $("#start-year-input").val().trim() + "0101";
        endYear = $("#end-year-input").val().trim() + "1231";
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
        
          .then(function (response) 
          {
                console.log(response);
          })
        
  });

  $("#clear").on("click", function() {
    event.preventDefault();
    $("#search-term").empty(" ")
    $("#results").empty("0");
    $("#start-year").empty(" ");
    $("#end-year").empty();
    

});