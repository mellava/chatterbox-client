// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: [],

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.
  addFriend: function(name) {
    if (!this._data.includes(name)) {
      this._data.push(name);
    }
    console.log(this._data);
  }
};