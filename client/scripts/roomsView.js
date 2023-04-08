// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'), // for adding new rooms
  $select: $('#rooms select'), // for selecting an existing room to only see texts from this room


  initialize: function() {
    var res = Parse.readAll((data) => Rooms.update(data), (error) => console.log(error));

    document.getElementById('addRoom').addEventListener('click', this.handleClick); // add room
    // $('#addRoom').change(function() {
    //   RoomsView.handleClick(event);
    // });

    document.getElementById('selectRoom').addEventListener('change', this.handleChange); // select room to see texts from
    // $('#selectRoom').change(function() {
    //   RoomsView.handleChange(event);
    // });
  },

  render: function() {
    var res = Parse.readAll((data) => Rooms.update(data), (error) => console.log(error));
    Rooms.getRoomsList();
  },

  renderRoom: function(roomname) {
    MessagesView.render(roomname);
  },

  handleChange: function(event) {
    event.preventDefault();
    var room = $('#rooms select option:selected').text();
    RoomsView.renderRoom(room);
  },

  handleClick: function(event) {
    event.preventDefault();
    var newRoom = $('#addRoomText').val();
    Rooms.addRoom(newRoom);
  }

};
