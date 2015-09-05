class Concept extends React.Component {

  conceptWidth () {
    switch(this.props.hierarchy) {
    case 'h1':
        return '300'
        break;
    case 'h2':
        return '130'
        break;
    case 'h3':
        return '100'
        break;
    case 'h4':
        return '70'
        break;
    case 'h5':
        return '80'
        break;
    default:
        return '300'
    }
  }

render () {
  if(this.props.hierarchy != 'h5'){
    return (
      <foreignObject width={this.conceptWidth()} height="250" x={this.props.x} y={this.props.y}>
        <p className={this.props.hierarchy}>
          {this.props.text}
        </p>
      </foreignObject>
    )
  }else{
    return (
      <g>
      <circle cx={this.props.x} cy={this.props.y} r='10' fill='red' ></circle>
      <foreignObject width={this.conceptWidth()} height="250" x={this.props.x} y={this.props.y}>
        <p className={this.props.hierarchy}>
          {this.props.text}
        </p>
      </foreignObject>
      </g>
    )

  }
  }
}
