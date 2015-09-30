class Link extends React.Component {

  render () {
    return (
      <line
        x1={this.props.datum.source.x}
        y1={this.props.datum.source.y}
        x2={this.props.datum.target.x}
        y2={this.props.datum.target.y}
        style={{
          "stroke":"#f99",
          "strokeOpacity":"1",
          "strokeWidth": "10"
        }}/>
    );
  }
}

