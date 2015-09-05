class MainSvg extends React.Component {

  constructor(props) {
    super(props);
    this.state = {width: '100%', height: '100%'};
  }

  // windowSize () {
  //   var docEl = document.documentElement,
  //   bodyEl = document.getElementsByTagName('body')[0],
  //   width =  window.innerWidth || docEl.clientWidth || bodyEl.clientWidth,
  //   height =  window.innerHeight || docEl.clientHeight || bodyEl.clientHeight;
  //   return { height: height, width: width };
  // }

  componentDidMount () {
    var width = React.findDOMNode(this).offsetWidth;
    var height = React.findDOMNode(this).offsetHeight;
    this.setState({width, height});
  }

  render () {
    var data = [
    {id: "id1", text: "This is one comment", y:'220', x:'100', idea_type:'image' },
    {id: "id2", text: "Hello you", y:'100' , x:'100', idea_type:'concept', hierarchy:'h1'},
    {id: "id3", text: "Hello", y:'200' , x:'100', idea_type:'concept', hierarchy:'h2'},
    {id: "id4", text: "Hello im h3", y:'500' , x:'100', idea_type:'concept', hierarchy:'h3'},
    {id: "id5", text: "Hello im h4", y:'600' , x:'100', idea_type:'concept', hierarchy:'h4'},
    {id: "id6", text: "Hello im h5", y:'300' , x:'600', idea_type:'concept', hierarchy:'h5'}
    ];

    return <svg width={this.state.width} height={this.state.height}>
      <Ideas data={ data } />
    </svg>;
  }
}
