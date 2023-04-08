// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  _data: [],


  update: function(messagesArr) {
    messagesArr.forEach((message) => {
      if (!this._data.includes(message.roomname) && message.roomname) {
        this._data.push(message.roomname);
      }
    });
  },

  getRoomsList: function() {
    var currOptions = document.getElementById('selectRoom').options;

    var currOptionsText = [];
    for (var i = 0; i < currOptions.length; i++ ) {
      currOptionsText.push(currOptions[i].innerText);
    }

    this._data.forEach((roomname, index) => {
      if (!currOptionsText.includes(roomname)) {
        $('select').append(
          ($('<option>', {
            value: index,
            text: roomname
          })));
      }
    }
    );
  },

  addRoom: function(newRoomname) {
    if (!this._data.includes(newRoomname)) {
      this._data.push(newRoomname);
    }
    this.getRoomsList();
  }

};