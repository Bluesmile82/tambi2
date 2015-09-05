class Ideas extends React.Component {

  render () {
    var ideas = this.props.data.map(function (idea) {
      return(
        <Idea key={idea.id} y={idea.y} x={idea.y} text={idea.text}  hierarchy={idea.hierarchy} idea_type={idea.idea_type}/>
      );

    })
    return (
      <g className="ideas">
        {ideas}
      </g>
    );
  }
}
