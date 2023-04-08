// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  update: function(messagesArr) {

    var idArr = this._data.map((el) => el.message_id); // gets the ids of all the messages currently in data

    messagesArr.forEach((message) => {
      if (!idArr.includes(message.message_id)) {
        this._data.push(message);
      } // checks each message from our get request array and sees if it's already in our internal _data array (so we don't have multiple copies of the same message)
    });

  },

  retrieve: function() {

    var res = this._data.map(({username, text, roomname}) => {
      if (text) {
        text = text.slice(0, 100);
      }
      return {username, text, roomname};
    }
    );
    return res;
  }

};