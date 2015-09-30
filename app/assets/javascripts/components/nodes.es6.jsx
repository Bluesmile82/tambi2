class Nodes extends React.Component {

  render () {

  var nodes = this.props.nodes.map(function (node, index) {
    console.log(node);

    return (
      <Idea key={node.id}
        y={node.y}
        x={node.x}
        text={node.text}
        hierarchy={node.hierarchy}
        idea_type={node.idea_type}/>
    )
  })

    console.log("Drawing nodes");
    return(
    <g className="ideas"> {nodes} </g>
    )
  }
}

        // onClick={ select.bind(this) }
