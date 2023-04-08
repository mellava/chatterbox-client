// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    var res = Parse.readAll((data) => Messages.update(data), (error) => console.log(error));
  },

  render: function() {
    var res = Messages.retrieve();
    res.forEach((message) => this.renderMessage(message));
  },

  renderMessage: function(message) {
    var chat = MessageView.render(message);

    console.log(chat);
    this.$chats.append(chat);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};