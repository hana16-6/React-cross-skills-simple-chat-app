import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

const messages = [
  { username: 'Amy', text: 'Hi, Jon!' },
  { username: 'Amy', text: 'How are you?' },
  { username: 'John', text: 'Hi, Amy! Good, you?' },
];

class App extends Component {
  state = {
  message:'',
  messages:[]
  }
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    const { message } = this.state;
    return message === '';
  };
  handleChange = (e) => {
    const val = e.target.value;
  this.setState(()=> ({
   message:val,
  }))
  
  }
  handleSubmitAmy = (e)=>{
      e.preventDefault();
    const userMsg = {username: users[0].username,text:this.state.message}
    this.setState(()=> ({
      messages : [...this.state.messages,userMsg]
    }))
    
    console.log(userMsg)
   
  }
  handleSubmitJohn = (e) => {
   e.preventDefault();
     const userMsg = {username: users[1].username,text:this.state.message}
    this.setState(()=> ({
      messages : [...this.state.messages,userMsg]
    }))
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{users[0].username}</div>

            <ul className="message-list">
              {this.state.messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === users[0].username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <div>
              <form className="input-group" onSubmit={this.handleSubmitAmy}>
                <input type="text" className="form-control" placeholder="Enter your message..." onChange={this.handleChange} />
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{users[1].username}</div>
            <ul className="message-list">
              {this.state.messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === users[1].username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <div>
              <form className="input-group" onSubmit={this.handleSubmitJohn}>
                <input type="text" className="form-control" placeholder="Enter your message..." onChange={this.handleChange}/>
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
