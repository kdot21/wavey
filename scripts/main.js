console.log('js!');

  // Google Maps API
  var map;

  function initMap() {

    var styles = [
      {
        stylers: [
          { hue: '#00c5cd' },
          { saturation: -20 }
        ]
      }, {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [
            { lightness: 100 },
            { visibility: 'simplified' }
          ]
      }, {
          featureType: 'road',
          elementType: 'labels',
          stylers: [
            { visibility: 'off' }
          ]
      }
    ];

    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 41.361624, lng: -71.481146},
      zoom: 15,
      map: map,
      zoomControl: true,
      mapTypeControl: true,
      streetViewControl: true,
      rotateControl: true,
      fullscreenControl: true,
      styles: styles
    });

    var marker = new google.maps.Marker({
      position: {lat: 41.361624, lng: -71.481146},
      map: map
    });

  }

$(document).ready(function() {
  console.log('jQuery!')

  // Weather Underground API for search capabilites
  var WEATHER_UNDERGROUND_API = 'http://api.wunderground.com/api/b9a4b3dc52783dbb/conditions/q/';

  var testCity = WEATHER_UNDERGROUND_API + 'CA/San_Francisco.json';

  var forecastResults = $('#forecast-results');

  function testCallWeatherAPI() {
    $.get(testCity, function(whatever){
      console.log(whatever);
    })
  }

  testCallWeatherAPI();

  function callWeatherAPI(city) {
    if (city.length == 0) {
      forecastResults.html('Please enter a city name into the search bar');
    } else {
      $.get(WEATHER_UNDERGROUND_API + city, function(forecastResults) {

      });
    }
  }

  $('#search-button').on('click', function(e) {
    e.preventDefault();

    callWeatherAPI($('#search-bar').val());
  });

  // Appending array of surf spots
  var surfSpots = [
    'Point Judith \'The Lighthouse\'',
    'Matunuck',
    'Narragansett Beach',
    'The K',
    'Bonnet Point',
    'Ruggles',
    'First Beach',
    'Second Beach',
    'Monahan\'s Dock'
  ];

  // $('#search-button').on('mouseover', function() {

  //   $.each(surfSpots, function(i,e) {
  //     var spotsLi = "<li>";
  //     spotsLi += e + "</li>";
  //     $(spotsLi).appendTo('#surf-spots-ul');

  //   });
  // });

});
