import React, { Component } from 'react';

import MessageDataService from '../services/message.service';

export default class MessageChangeForm extends Component {
  constructor(props) {
    super(props);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSaveMessage = this.onSaveMessage.bind(this);

    this.state = {
      newMessage: '',
      saveMessage: false,
      displayMessage: '',
    };
  }

  onChangeMessage(e) {
    this.setState({
      newMessage: e.target.value,
    });
  }

  onSaveMessage(e) {
    var data = {
      newMessage: this.state.newMessage,

      saveMessage: true,
    };
    console.log(`this.state.newMessage: ${this.state.newMessage}`);
    MessageDataService.changeMessage(data)
      .then((response) => {
        console.log(`response data in onsave${JSON.stringify(response.data)}`);
        this.setState({
          newMessage: response.data.saveMessage,
          saveMessage: true,
        });
        console.log(`response.data: ${response.data.message}`);
        alert(`you entered ${this.state.newMessage}`);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const message = this.state.newMessage;
    console.log(`message in render: ${message}`);

    return (
      <div className="submit-form">
        <h1>{this.state.newMessage}</h1>
        {this.state.saveMessage ? (
          <div>
            <h4>You changed the message successfully</h4>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <input
                type="text"
                className="form-control"
                id="message"
                required
                value={message}
                onChange={this.onChangeMessage}
                name="messsage"
              />
            </div>
            <button onClick={this.onSaveMessage}>submit</button>
          </div>
        )}
      </div>
    );
  }
}
