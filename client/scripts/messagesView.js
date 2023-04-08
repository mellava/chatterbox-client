// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    var res = Parse.readAll((data) => {

      return Messages.update(data);
    }, (error) => console.log(error));
  },

  render: function(roomname) {
    this.initialize();
    var res = Messages.retrieve();
    if (roomname) {
      this.$chats.empty();
      res = res.filter((message) => message.roomname === roomname);
    }
    res.forEach((message, index) => {
      message['index'] = index;
      MessagesView.renderMessage(message);
    });
  },

  renderMessage: function(message) {
    var chat = MessageView.render(message);
    this.$chats.prepend(chat);
    document.getElementById(message['index']).addEventListener ('click', this.handleClick);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    event.preventDefault();
    if (event.target.className === 'username') {
      console.log(event.target.innerText);
      Friends.addFriend(event.target.innerText);
    }

  }

};