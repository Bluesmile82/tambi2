class Tambi extends React.Component {

  constructor(props) {
    super(props);

    var force = d3.layout.force()
      .charge(-120)
      .linkDistance(30)
      .nodes(this.props.nodes)
      .links(this.props.edges)
      .size([this.props.width, this.props.height]);

    this.state = {
      width: this.props.width,
      height: this.props.height,
      force: force,
      nodes: this.props.nodes,
      links: this.props.edges
    }

  //   var svg = d3.select("svg");
  //   this.state = { svg,
  //     selectedNode: null,
  //     selectedEdge: null,
  //     mouseDownNode: null,
  //     mouseDownLink: null,
  //     justDragged: false,
  //     justScaleTransGraph: false,
  //     lastKeyDown: -1,
  //     shiftNodeDrag: false,
  //     selectedText: null,
  //     nodes: this.props.nodes
  //     edges: this.props.edges

  //   }

  //   var defs = svg.append('svg:defs');

  //   this.state.paths = svg.append("g").selectAll("g");
  //   this.state.ideas = svg.append("g").selectAll("g");

  //   this.state.drag = d3.behavior.drag()
  //         .origin(function(d){
  //           return {x: d.x, y: d.y};
  //         })
  //         .on("drag", function(args){
  //           this.state.justDragged = true;
  //           this.dragmove.call(thisGraph, args);
  //         })
  //         .on("dragend", function() {
  //           // todo check if edge-mode is selected
  //         });

  //   this.state.dragSvg = d3.behavior.zoom()
  //         .on("zoom", function(){
  //           if (d3.event.sourceEvent.shiftKey){
  //             // TODO  the internal d3 state is still changing
  //             return false;
  //           } else{
  //             this.state.zoomed.call(thisGraph);
  //           }
  //           return true;
  //         })
  //         .on("zoomstart", function(){
  //           var ael = d3.select("#" + this.props.constants.activeEditId).node();
  //           if (ael){
  //             ael.blur();
  //           }
  //           if (!d3.event.sourceEvent.shiftKey) d3.select('body').style("cursor", "move");
  //         })
  //         .on("zoomend", function(){
  //           d3.select('body').style("cursor", "auto");
  //         });

  //   defs.append('svg:marker')
  //     .attr('id', 'end-arrow')
  //     .attr('viewBox', '0 -5 10 10')
  //     .attr('refX', 22)
  //     .attr('markerWidth', 3.5)
  //     .attr('markerHeight', 3.5)
  //     .attr('orient', 'auto')
  //     .append('svg:path')
  //     .attr('fill', '#BEFFFF')
  //     .attr('d', 'M0,-5L10,0L0,5');

  //   // define arrow markers for leading arrow
  //   defs.append('svg:marker')
  //     .attr('id', 'mark-end-arrow')
  //     .attr('viewBox', '0 -5 10 10')
  //     .attr('refX', 7)
  //     .attr('markerWidth', 3.5)
  //     .attr('markerHeight', 3.5)
  //     .attr('orient', 'auto')
  //     .append('svg:path')
  //     .attr('fill', '#BEFFFF')
  //     .attr('d', 'M0,-5L10,0L0,5');

  //   // displayed when dragging between nodes
  //   this.state.dragLine = svg.append('svg:path')
  //         .attr('class', 'link dragline hidden')
  //         .attr('d', 'M0,0L0,0')
  //         // .attr("stroke-dasharray", '0.5,20')
  //         .attr("stroke-linecap", 'round')
  //         .style('marker-end', 'url(#mark-end-arrow)');

  // }

  // positionFirstIdea (){
  //   var first_idea = this.state.nodes[0]
  //   if (first_idea.title == 'Idea'){
  //    first_idea.x = windowSize().width/2;
  //    first_idea.y = windowSize().height/2;
  //    var idea = new Idea(thisGraph);
  //    idea.update(first_idea);
  //   };
  // }

  }

  componentDidMount () {

    var width = React.findDOMNode(this).offsetWidth;
    var height = React.findDOMNode(this).offsetHeight;

    this.state.force
        .nodes(this.state.nodes)
        .links(this.state.links)
        .start();


    console.log('force', this.state.force)


    var self = this;

    this.state.force.on("tick", function (tick, b, c) {
      console.log('tick');
      // self.forceUpdate();
    })

  }

  drawLinks () {
    console.log("drawing links")
      var links = this.state.links.map(function (link, index) {
        return (<Link datum={link} key={index} />)
      })
      return (<g>
        {links}
      </g>)
  }

  drawNodes () {
    console.log("drawing nodes")
      var nodes = this.state.nodes.map(function (node, index) {
        console.log(node)
        return (
          <Idea key={node.id}
            y={node.y}
            x={node.y}
            text={node.text}
            hierarchy={node.hierarchy}
            idea_type={node.idea_type}
            group={node.group}/>
        ) })
      return nodes;
  }

  render () {
    return (
      <g className="ideas">
        {this.drawNodes()}
        {this.drawLinks()}
      </g>
    );
  }
}
