// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  update: function(messagesArr) {
    var idArr = this._data.map((el) => el.message_id);
    messagesArr.forEach((message) => {
      if (!idArr.includes(message.message_id)) {
        this._data.push(message);
      }
    });
  },

  retrieve: function() {
    var res = this._data.map(({username, text, roomname}) => {
      text = text.slice(0, 100);
      return {username, text, roomname};
    }
    );
    return res;
  }

};