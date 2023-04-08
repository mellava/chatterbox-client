// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'), // for adding new rooms
  $select: $('#rooms select'), // for selecting an existing room to only see texts from this room


  initialize: function() {
    var res = Parse.readAll((data) => Rooms.update(data), (error) => console.log(error));

    // document.getElementById('addRoom').addEventListener('click', this.handleClick); // add room

    document.getElementById('selectRoom').addEventListener('onChange', this.handleChange); // select room to see texts from
  },

  render: function() {
    Rooms.getRoomsList();
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    MessagesView.render(roomname);
  },

  handleChange: function(event) {
    var room = $('#rooms select option:selected').text();
    RoomsView.renderRoom(room);
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    // updates rooms list
  }

};
