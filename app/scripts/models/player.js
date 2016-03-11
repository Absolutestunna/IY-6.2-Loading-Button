var Backbone = require('backbone');
var $ = require('jquery');
    

$.ajaxSetup({
headers: { 'X-Auth-Token': '78b09e9005224111ada83b285f5acb3c' },
});

var Team = Backbone.Model.extend({
  url: "http://api.football-data.org/v1/soccerseasons/398/teams",
  parse: function(data){
    // return this.get('name') + this.get('football')
    return data.teams[0];
  }
})

var PlayerCollection = Backbone.Collection.extend({
  model: Team,
  url: "http://api.football-data.org/v1/teams/66/players",
  parse: function(data){
    return data.players;
  }
});


module.exports = {
  team: Team,
  playerCollection: PlayerCollection
};
