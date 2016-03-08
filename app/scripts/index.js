console.log("Hello World!");
var $ = require('jquery');
var handlebars = require('handlebars');
var Player = require('./models/player');


// var buttonWork = new ButtonPlay();
var playerCollection = new Player.playerCollection();

$(".submit").click(function(){

    this.textContent = "Loading...";
    $(".submit").attr("disabled", true);

    playerCollection.fetch().done(function(event){
      event.players.forEach(function(playerinfo){

        var source = $('#player-info').html();
        var template = handlebars.compile(source);
        var context = {
          name: playerinfo.name,
          position: playerinfo.jerseyNumber
        };
        var html = template(context);
        $('.information').append(html);
     });

      $(".submit").removeAttr("disabled");
      $(".submit").html("Submit");

    })

})


// console.log(buttonCollection);
