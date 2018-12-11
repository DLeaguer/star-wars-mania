console.log('script attached')

$('.btn').click(function() {
  
  $('.text').text('loading . . .');
  
  $.ajax({
    method: "GET",
    url: "https://swapi.co/api/films/",
    dataType: 'json',
    success: buildHtmlElements,
  });
  
});

function buildHtmlElements(responseData) {
  $('.text').text(JSON.stringify(responseData));
}

getFilmData(id)