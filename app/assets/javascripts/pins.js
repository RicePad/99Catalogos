$(document).on('turbolinks:load', function(){
  var pins = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {
      url: '/pins/autocomplete?query=%QUERY',
      wildcard: '%QUERY'
    }
  });
  $('#pins_search').typeahead(null, {
    source: pins
  });
})