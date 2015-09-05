class Idea extends React.Component {

  render () {
    if (this.props.idea_type == 'concept'){
      return (
        <g className='conceptG' id={this.props.id}>
          <Concept key={this.props.id} y={this.props.y} x={this.props.y} text={this.props.text}  hierarchy={this.props.hierarchy} />
        </g>
      )
    }
    if (this.props.idea_type == 'image'){
        return (
        <g className='imageG' id={this.props.id}>
          <circle cx={this.props.x} cy={this.props.y} r='30' fill='blue' ></circle>
        </g>
      )
    }
  }
}
