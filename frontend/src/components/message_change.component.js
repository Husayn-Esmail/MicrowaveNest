import React, { Component } from 'react';

import MessageDataService from '../services/message.service';

export default class MessageChangeForm extends Component {
  constructor(props) {
    super(props);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSaveMessage = this.onSaveMessage.bind(this);
    // this.onClickHandler = this.onClickHandler.bind(this);

    this.state = {
      newMessage: '',
      saveMessage: false,
    };
  }

  onChangeMessage(e) {
    console.log('onChangeMessage');
    console.log(e);
    if (e?.target?.value) {
      this.setState({
        messsage: e?.target?.value,
      });
    }
  }

  onSaveMessage(e) {
    var data = {
      newMessage: this.state.message,

      saveMessage: true,
    };

    MessageDataService.changeMessage(data)
      .then((response) => {
        this.setState({
          newMesssage: response.data.message,

          saveMessage: true,
        });
        console.log('response.data');
      })
      .catch((e) => {
        console.log(e);
      });
  }

  //   onSaveMessage() {
  //     console.log('hello');
  //     axios
  //       .post('http://localhost:8080/', this.state.message)
  //       .then((response) => {
  //         this.setState({ message: response.data });
  //       })
  //       .catch((error) => {
  //         alert('something wrong');
  //       });
  //   }

  render() {
    const { message } = this.state;

    return (
      <div className="submit-form">
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
