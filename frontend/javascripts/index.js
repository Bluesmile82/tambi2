document.onload = start();

function start(){

var React = require('react');


var MainSvg = React.createClass({

  getInitialState: function(){
    var docEl = document.documentElement,
    bodyEl = document.getElementsByTagName('body')[0],
    width =  window.innerWidth || docEl.clientWidth || bodyEl.clientWidth,
    height =  window.innerHeight || docEl.clientHeight || bodyEl.clientHeight;

    return { height: height, width: width };
  },

  componentDidMount: function () {
    var width = React.findDOMNode(this).offsetWidth;
    console.log(width);
  },

  render: function(){
    var data = [
    {id: "id1", text: "This is one comment", y:'200', x:'100', concept_type:'image' },
    {id:"id2", text: "This is *another* comment", y:'100' , x:'100', concept_type:'concept'}
    ];
    return <svg width={this.state.width} height={this.state.height}>
    <Ideas data={data}/>
    </svg>;
  }

});



var Ideas = React.createClass({
  render: function(){
    var ideas = this.props.data.map(function (idea) {
      return(
        <Idea key={idea.id} y={idea.y} x={idea.y} text={idea.text} concept_type={idea.concept_type}/>
      );
    })
    return (
      <g className="ideas">
        {ideas}
      </g>
    );
  }
});



var Idea = React.createClass({

  handleMouseDown: function(){
    console.log('Idea clicked: ' + this.props.id);
  },

  render: function(){
    // if (this.props.concept_type == concept){
      return <circle cx={this.props.x} cy={this.props.y} r='20' fill='red' onMouseDown={this.handleMouseDown}>
      <text>{this.props.concept_type}</text>
      </circle>
    // }
  }
});


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
      <MainSvg/>
      <div className="clicker" onMouseDown={this.handleMouseDown}>
        Give me the message!
      </div>
      <div className="message">Message conveyed
        <span className="count">{this.state.count}</span> time(s)</div>
    </div>
  }
});



React.render(<App message="Keep it Simple"/>,
                  document.getElementById('react'));

}
