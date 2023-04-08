// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.

  render: _.template(`
      <div class="chat">
        <div class="username"><h1>Username:</h1><%-username%></div>
        <h2>Roomname:</h2>
        <p><%-roomname%></p>
        <h2>Text:</h2>
        <div>
          <%-text%>
        </div>
      </div>
    `)

};