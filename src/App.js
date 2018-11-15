import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { bintime: [], time: [], currentHint: 0, blockNumbers: false }

  componentDidMount() {
    this.tick()
    setInterval(this.tick.bind(this), 1000)
    window.addEventListener('click', this.nextHint);
  }
  tick() {
    let d = new Date().toTimeString().split(" ")[0].replace(/:/g, "").split("");
    let arr = []
    d.forEach(function (el) {
      var num = dec2bin(el, 4).split("")
      arr.push(num)
    })
    this.setState({ bintime: arr, time: d })
  }

  blocks = () => {
    let blocks = []
    this.state.bintime.map((el, i) => {
      let bin = 16
      let children = []
      el.map((item, j) => {
        bin = bin/2
        return children.push(<div key={j} className={item > 0 ? "item lit" : "item"}>{this.state.blockNumbers && <p>{bin}</p> }</div>)
      })   
      return blocks.push(<div key={i} className="col">{children}</div>)
    })
    return blocks;
  }

  hint = () => {
    let { currentHint } = this.state
    let hint = []
    if (currentHint === 0) {
      hint = "CLICK!".split("")
    };
    if (currentHint === 1) {
      hint = "HHMMSS".split("")
    };
    if (currentHint === 2) {
      hint = this.state.time
    } 
    if (currentHint === 3) {
      hint = this.state.time
    }
    if (currentHint === 4) {
      hint = []
    }

    let row = [];
    [0, 1, 2, 3, 4, 5].map((el, i) => {
      return row.push(<div key={i} className="item">{hint[i]}</div>)
    })
      return <div className="help-row">{row}</div>;
  }

  nextHint = () => {
      
      let currentHint = this.state.currentHint
      let blockNumbers = this.state.blockNumbers
      
      if(currentHint < 4) 
        {currentHint+=1}
      else {
        currentHint = 0
      }

      currentHint===3? blockNumbers= true:blockNumbers = false
   
      this.setState({currentHint, blockNumbers})
  }

  render() {
    return (

      <div className="clock">
        <div className="container">
          {this.blocks()}
        </div >
        {this.hint()}
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
