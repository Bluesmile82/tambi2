class Link extends React.Component {

  render () {
    var padding = 20
    return (
      <line
        x1={parseInt(this.props.datum.source.x) + padding}
        y1={parseInt(this.props.datum.source.y) + padding}
        x2={parseInt(this.props.datum.target.x) }
        y2={parseInt(this.props.datum.target.y) }
        style={{
          "stroke":"#f99",
          "strokeOpacity":"1",
          "strokeWidth": "10"
        }}/>
    );
  }
}

