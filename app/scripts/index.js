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
      // console.log(teaminfo)
      var source = $('#team-info').html();
      var template = handlebars.compile(source);
      var context = {
        tName: teaminfo.get('name'),
        logo: teaminfo.get('crestUrl'),
        value: teaminfo.get('squadMarketValue')

      };
      var html = template(context);
      $('.bodi').append(html);
    })
    setTimeout(function(){
      playerCollection.fetch().done(function(event){
        playerCollection.each(function(playerinfo){

          var source = $('#player-info').html();
          var template = handlebars.compile(source);

          var context = {
            name: playerinfo.get('name'),
            number: playerinfo.get('jerseyNumber'),
            nationality: playerinfo.get('nationality'),
            position: playerinfo.get('position')
          };
          console.log(context.name)
          var html = template(context);
          $('.bodi').append(html);
       });

        $(".submit").removeAttr("disabled");
        $(".submit").html("Submit");

      })
    }, 1000)




})
