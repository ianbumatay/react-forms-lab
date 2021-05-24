import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  } 

  handleChangeTwitter = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() { 

    //let maxCharsCount = this.props.maxChars - this.state.message.length

    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"  onChange={this.handleChangeTwitter} value={this.state.value}/> 
          <p> You have  {this.props.maxChars - this.state.value.length} characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
