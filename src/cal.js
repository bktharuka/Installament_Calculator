import React, { Component } from 'react';

class InstallamentCal extends Component {
  constructor() {
    super();
    this.state = {
      f: '',
      v:'',
      r: '',
      n: '',
      result: null,
      
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  calculateFutureValue = () => {
    const { f,v, r, n, } = this.state;

    const result =(f*v)/(parseFloat(Math.pow(1 + parseFloat(r), n - 1))*parseFloat(parseFloat(r) + 1) / parseFloat(r))//v1/(v2*v3)
    this.setState({ result});
  };

  render() {
    return (
      <div>
        <div>
          <label>F Value (F):</label>
          <input
            type="number"
            name="f"
            value={this.state.f}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>V Value (V):</label>
          <input
            type="number"
            name="v"
            value={this.state.v}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label> R Value (R):</label>
          <input
            type="number"
            name="r"
            value={this.state.r}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>N Value (n):</label>
          <input
            type="number"
            name="n"
            value={this.state.n}
            onChange={this.handleChange}
          />
        </div>
        <button onClick={this.calculateFutureValue}>Calculate</button>
        {this.state.result !== null && (
          <div>
            <h3>Result:</h3>
            <p>{this.state.result}</p>
          </div>
        )}

      </div>
    );
  }
}

export default InstallamentCal;