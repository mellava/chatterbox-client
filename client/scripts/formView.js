// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('#send form'),

  initialize: function() {

    var element = document.getElementById('submit');
    element.addEventListener('click', this.handleSubmit);
    // $('#submit').change(function(event) {
    //   FormView.handleSubmit(event);
    // });
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var room = $('#rooms select option:selected').text();
    var text = document.getElementById('message').value;

    var messageData = {username: App.username, text: text, roomname: room};

    Parse.create(messageData, () => App.fetch(), (error) => console.log(error));

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};