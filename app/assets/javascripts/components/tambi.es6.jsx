class Tambi extends React.Component {

  constructor(props) {
    super(props);

    var force = d3.layout.force()
      .charge(-120)
      .linkDistance(30)
      .nodes(this.props.nodes)
      .links(this.props.links)
      .size([this.props.width, this.props.height]).start();

    this.state = {
      width: this.props.width,
      height: this.props.height,
      force: force,
      nodes: this.props.nodes,
      links: this.props.links,
      select: function() { console.log(this); }
    }
  }

  componentDidMount () {

    var width = React.findDOMNode(this).offsetWidth;
    var height = React.findDOMNode(this).offsetHeight;

    this.state.force
        .nodes(this.state.nodes)
        .links(this.state.links)
        .start();


    console.log('force', this.state.force)


    // var self = this;
    // self.state.force.on("tick", function (tick, b, c) {
    //   console.log('tick');
    //   self.state.force.start();
    //   // self.forceUpdate();
    // })

  }

  drawLinks () {
    console.log("drawing links")
      var links = this.state.links.map(function (link, index) {
        return (<Link datum={link} key={index} />)
      })
      return (<g className="links">
        {links}
      </g>)
  }

  drawNodes () {

    console.log("drawing nodes")
      var self = this;
      var nodes = function(lala){
      return self.state.nodes.map(function (node, index) {
        console.log(node)
        return (
          <Idea key={node.id}
            y={node.y}
            x={node.x}
            text={node.text}
            hierarchy={node.hierarchy}
            idea_type={node.idea_type}
            group={node.group}
            onClick={ self.state.select.bind(this) } />
        ) })
      }

      return (<g className="ideas" onClick={  self.state.select.bind(this) }>
          {nodes("lala")}
      </g>)
  }

  render () {
    return (
      <g className="tambi" >
        {this.drawLinks()}
        {this.drawNodes()}
      </g>
    );
  }
}
