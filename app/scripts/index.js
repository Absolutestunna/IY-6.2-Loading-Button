var $ = require('jquery');
var handlebars = require('handlebars');
var Player = require('./models/player');


// var buttonWork = new ButtonPlay();
var teaminfo = new Player.team()
var playerCollection = new Player.playerCollection();

$('.bodi').fadeIn(2000);

$(".submit").click(function(){

    this.textContent = "Loading...";
    $(".submit").attr("disabled", true);

    teaminfo.fetch().done(function(info){
      var source = $('#team-info').html();
      var template = handlebars.compile(source);
      var context = {
        tName: info.teams[0].name,
        logo: info.teams[0].crestUrl,
        value: info.teams[0].squadMarketValue
      };
      var html = template(context);
      $('.bodi').append(html);
    }).then(playerCollection.fetch().done(function(event){
      event.players.forEach(function(playerinfo){

        var source = $('#player-info').html();
        var template = handlebars.compile(source);
        console.log(playerinfo)

        var context = {
          name: playerinfo.name,
          number: playerinfo.jerseyNumber,
          nationality: playerinfo.nationality,
          position: playerinfo.position
        };
        var html = template(context);
        $('.bodi').append(html);
     });

      $(".submit").removeAttr("disabled");
      $(".submit").html("Submit");

    }))



})
