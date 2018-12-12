console.log('script attached')

$('.btn').click(function() {
  
  $('.loading').text('loading . . .');
  
  $.ajax({
    method: "GET",
    url: "https://swapi.co/api/films/",
    dataType: 'json',
    success: getFilmData,
    error: onError
  });
  
});

function buildHtmlElements(responseData) {

}

function getFilmData(id) {
  console.log('id:\n',id)
  $('.loading').html('');
  for (var i=0; i<id.results.length; i++) {
    let title = id.results[i].title;
    let episode = id.results[i].episode_id;
    let director = id.results[i].director;
    let producer = id.results[i].producer;
    let openCrawl = id.results[i].opening_crawl;
    let releaseDate = id.results[i].release_date;
    $('#films').append('<h2>'+title+'</h2>');
    $('#films').append('<p>'+'<span style="color:blue">'+'episode: '+'</span><br><br>'+episode+'</p>');
    $('#films').append('<p>'+'<span style="color:blue">'+'director: '+'</span><br><br>'+director+'</p>');
    $('#films').append('<p>'+'<span style="color:blue">'+'producer(s): '+'</span><br><br>'+producer+'</p>');
    $('#films').append('<p>'+'<span style="color:blue">'+'opening crawl: '+'</span><br><br>'+openCrawl+'</p>');
    $('#films').append('<p>'+'<span style="color:blue">'+'release date: '+'</span><br><br>'+releaseDate+'</p>');
    $('#films').append('<br><hr><br>')
  }
}

function onError() {
  $('#films').html('Error 503 could not load data')
}