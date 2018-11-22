import React, { Component } from 'react';
import Brush from './svg/paint-brush.svg'
import Clock from './svg/clock-o.svg'

class App extends Component {
  
  constructor(){
    let currentHint = JSON.parse(localStorage.getItem('currentHint')) || 0;
    let currentTheme = JSON.parse(localStorage.getItem('currentTheme')) || 0;
    let blockNumbers = JSON.parse(localStorage.getItem('blockNumbers')) || false;
    super()
    this.state = { bintime: [], time: [], currentHint, hints:[], blockNumbers, currentTheme, themes: ["", "indian", "marine", "france", "typewriter", "crazy", "pacman", "minimal"]} 
  }

  componentDidMount = () => {
    this.tick()
    setInterval(this.tick, 1000)
  }
  tick=() => {
    let d = new Date().toTimeString().split(" ")[0].replace(/:/g, "").split("");
    let arr = []
    d.forEach(function (el) {
      var num = dec2bin(el, 4).split("")
      arr.push(num)
    })
    this.setState({ time: d, bintime: arr}, ()=>{
      this.generateHints()
    })
    
  }

  blocks = () => {
    let blocks = []
    this.state.bintime.map((el, i) => {
      let bin = 16
      let children = []
      el.map((item, j) => {
        bin = bin/2
        return children.push(<div key={j} className={item > 0 ? "item lit" : "item"}>{this.state.blockNumbers && item > 0 && <p>{bin}</p> }</div>)
      })   
      return blocks.push(<div key={i} className="col">{children}</div>)
    })
    return blocks;
  }

  generateHints = () => {
    let hints = []
    hints[0] = [""]
    hints[1] = "HHMMSS".split("")
    hints[2] = this.state.time
    hints[3] = this.state.time
    hints[4] = [""]
    this.setState({hints})
  }

  nextHint = () => {
    let {hints, blockNumbers, currentHint} = this.state   
    currentHint < hints.length - 1?currentHint+=1:currentHint = 0
    currentHint===3 || currentHint===4? blockNumbers= true:blockNumbers = false
    localStorage.setItem("currentHint", currentHint)
    localStorage.setItem("blockNumbers", blockNumbers)
    this.setState({currentHint, blockNumbers})
  }
  nextTheme = () => {
    let {currentTheme, themes} = this.state
    currentTheme < themes.length - 1?currentTheme+=1: currentTheme=0
    localStorage.setItem("currentTheme", currentTheme)
    this.setState({currentTheme}) 

  }
  render() {
    let {hints, currentHint, themes, currentTheme} = this.state
    return (
      <div className={"themed " + themes[currentTheme]}>
      <div className="controls">
        <img alt="Theme" src={Brush} onClick={this.nextTheme}/>
        <img alt="Hint" src={Clock} onClick={this.nextHint}/>
      </div>    
      <div className="container">
        <div className="clock">
          {this.blocks()}
        </div >
        <div className="help-row">   
          {hints.length && hints[currentHint].map((el, i) => {
            return <div key={i} className="item"><p>{el}</p></div>})
          }
        </div>
      </div>
      </div>
    );
  }
}

function dec2bin(n, bits) {
  let bin = Number(n).toString(2)
  while (bin.length < bits) {
    bin = "0" + bin;
  }
  return bin;
}

export default App;
