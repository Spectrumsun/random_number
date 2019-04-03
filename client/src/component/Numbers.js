import React, { Component } from 'react';
import { getNumbers, generateRandom } from '../helper';
import './Numbers.css';
class Number extends Component {
  state = {
    random: [],
    numbers: [],
    max: 0,
    min: 0
  }


  handleGenerate = async (e) => {
    const createNumbers = await generateRandom();
    this.setState({
      random: createNumbers.data.newNumbers,
      numbers: []
    })
  }

  getNumbers = async (e) => {
    const number = await getNumbers();
    this.setState({
      numbers: number.data.savedNumbers,
      random: []
    })
    this.getMaxMin();
  }

  getMaxMin = () => {
    const { numbers } = this.state;
    const max = Math.max(...numbers);
    const min = Math.min(...numbers)
    this.setState({ max, min });
  }

  showNumbers = (value) => {
    const result = value.map(numbers => {
      return (
        <li className="list-group-item wrapper" key={numbers}>{numbers}</li>
      )
    })
    return result;
  }

  sortAscending = () => {
    const { numbers } = this.state;
    const ascending = numbers.sort((a, b) => a - b);
    this.setState({ numbers: ascending })
  }

  sortDescending = () => {
    const { numbers } = this.state;
    const descending = numbers.sort((a, b) => b - a);
    this.setState({ numbers: descending })
  }

  render() {
    const { random, numbers, max, min } = this.state;
    return (
      <div >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse container" id="navbarNav">
            <a className="navbar-brand " href="/">Random Numbers</a>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active icon" id="getButton" onClick={this.getNumbers}>View saved numbers</a>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <div className="container jumbotron">
          <h1 className="display-8">Random Phone Number Generator</h1>
          <button className="btn btn-primary btn-lg" id="handleGenerate" onClick={this.handleGenerate} role="button">Generate New Numbers</button>
          <br />
          {
            numbers.length > 0 ? (
              <>
                <div className='number_center'>
                  <h4>Max Number: 0{max}</h4>
                  <h4>Min Number: 0{min}</h4>
                </div>
                <button
                  className="btn btn-primary btn-lg space_button"
                  id="ascending"
                  onClick={this.sortAscending}
                  role="button">Ascending order</button>
                <button className="btn btn-primary btn-lg" id="sortDescending" onClick={this.sortDescending} role="button">Descending order</button>
              </>
            ) : null
          }
        </div>
        <div className="container">
          <div>
            <ul>
              {this.showNumbers(random)}
            </ul>
            {
              numbers.length > 0 ?
                (<h3 className='center_total'>Total Number Generated: {numbers.length}</h3>) : null
            }
            <ul>
              {this.showNumbers(numbers)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Number;
