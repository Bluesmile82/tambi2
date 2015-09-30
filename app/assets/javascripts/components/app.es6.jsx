class App extends React.Component {

  hideParent (divToHide){
    $(divToHide.target).parent().addClass("hide")
  }

  render () {
    return(
      <div className="main">
        <div className="menu pull-right">
          lalalal
        </div>
        <Svg/>
          <div className="footer">
            <div className="close-footer" onClick={this.hideParent}>X</div>
            lalalal
          </div>
      </div>
    )
  }
}
