document.onload = start();

function start(){

var React = require('react');

var App = React.createClass({

  getInitialState: function(){
    return { count: 0 };
  },

  handleMouseDown: function(){
    console.log('I was told: ' + this.props.message);
    this.setState({ count: this.state.count + 1});
  },

  render: function(){

    return <div>
      <Idea log='clicked'/>
      <div className="clicker" onMouseDown={this.handleMouseDown}>
        Give me the message!
      </div>
      <div className="message">Message conveyed
        <span className="count">{this.state.count}</span> time(s)</div>
    </div>
  }
});

var Idea = React.createClass({

  // getInitialState: function(){
  //   return { count: 0 };
  // },

  handleMouseDown: function(){
    console.log('Idea clicked: ' + this.props.log);
    // this.setState({ count: this.state.count + 1});
  },

  render: function(){

    return <div className="message" onMouseDown={this.handleMouseDown}>This is an idea</div>
  }
});


React.render(<App message="Keep it Simple"/>,
                  document.getElementById('react'));

}
