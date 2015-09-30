class MainSvg extends React.Component {

  constructor(props) {
    super(props);

    var nodes = [
      {id: "id0", text: "This is one", y:'100' , x:'100', idea_type:'image' },
      {id: "id1", text: "Hello you",   y:'200' , x:'200', idea_type:'concept', hierarchy:'h1'},
      {id: "id2", text: "Hello",       y:'300' , x:'300', idea_type:'concept', hierarchy:'h2'},
      {id: "id3", text: "Hello im h3", y:'100' , x:'0', idea_type:'concept', hierarchy:'h3'},
      {id: "id4", text: "Hello im h4", y:'500' , x:'500', idea_type:'concept', hierarchy:'h4'},
      {id: "id5", text: "Hello im h5", y:'600' , x:'600', idea_type:'concept', hierarchy:'h5'}
    ];

    var edges = [
      {"source":1, "target":4},
      {"source":2,"target":3},
    ];

    this.state = {
        nodes,
        edges,
        width: '100%',
        height: '100%',
        constants: {
          tambiClass: "tambi",
          selectedClass: "selected",
          connectClass: "connect-node",
          circleGClass: "conceptG",
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

    var permission = d3.select('#react').attr('data-permission');

    console.log('state', this.state)
    this.setState({width, height, permission });
  }

  render () {
    return <svg width={this.state.width} height={this.state.height}>
      <Tambi nodes={ this.state.nodes } width={this.state.width} height={this.state.height} edges={ this.state.edges } permission={ this.state.permission } constants={ this.state.constants } />
    </svg>;
  }
}
