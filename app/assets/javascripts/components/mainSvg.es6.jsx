class MainSvg extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        width: '100%',
        height: '100%',
        force: null,
        nodes: null,
        links: null,
        consts: {
          selectedClass: "selected",
          connectClass: "connect-node",
          circleGClass: "conceptG",
          graphClass: "graph",
          activeEditId: "editing",
          BACKSPACE_KEY: 8,
          DELETE_KEY: 46,
          ENTER_KEY: 13,
          nodeRadius: 65,
          min_size: 14,
          max_size: 154,
          change: 30,
          bias: 300,
          duration_in: 1000,
          duration: 10000,
          delay: 5000,
          zoom: 1,
          translate: [0,0]
        }
    }
  }

  componentDidMount () {
    var width = React.findDOMNode(this).offsetWidth;
    var height = React.findDOMNode(this).offsetHeight;
    var force = d3.layout.force()
      .charge(-120)
      .linkDistance(30)
      .size([width, height]);
    var permission = d3.select('#react').attr('data-permission');

    this.setState({width, height, force, permission});
  }

  render () {
    console.log(this.state);
    var data = [
    {id: "id1", text: "This is one comment", y:'220', x:'100', idea_type:'image' },
    {id: "id2", text: "Hello you", y:'100' , x:'100', idea_type:'concept', hierarchy:'h1'},
    {id: "id3", text: "Hello", y:'200' , x:'100', idea_type:'concept', hierarchy:'h2'},
    {id: "id4", text: "Hello im h3", y:'500' , x:'100', idea_type:'concept', hierarchy:'h3'},
    {id: "id5", text: "Hello im h4", y:'600' , x:'100', idea_type:'concept', hierarchy:'h4'},
    {id: "id6", text: "Hello im h5", y:'300' , x:'600', idea_type:'concept', hierarchy:'h5'}
    ];

    return <svg width={this.state.width} height={this.state.height}>
      <Tambi data={ data } nodes={ this.state.nodes } edges={ this.state.edges } permission={ this.state.permission } />
    </svg>;
  }
}
