// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    var res = Parse.readAll((data) => Rooms.update(data), (error) => console.log(error));

  },

  render: function() {
    Rooms.getRoomsList();
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    // drop down and when someone selects a room from drop down, then render messages from that room
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    // updates rooms list
  }

};
