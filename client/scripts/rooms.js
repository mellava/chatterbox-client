// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  _data: [],

  // TODO: mark a room as selected

  update: function(messagesArr) {
    messagesArr.forEach((message) => {
      if (!this._data.includes(message.roomname) && message.roomname) {
        this._data.push(message.roomname);
      }
    });
  },

  getRoomsList: function() {
    this._data.forEach((roomname, index) => $('select').append(
      ($('<option>', {
        value: index,
        text: roomname
      }))
    ));
  }

};