
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Tablegraphic from './../images/table.svg';

class Table extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        agreement: false
      };
    }
  
    handleChange = e => this.setState({ agreement: e.target.checked });
  
    handleSubmit = e => {
      e.preventDefault();
      console.log(`checked: ${this.state.agreement}`);
    };
  
    render() {
        let rows = [];
    for (var i = 0; i <7; i++){
      let rowID = `row${i}`
      let cell = []
      for (var idx = 0; idx < this.state.size; idx++){
        let cellID = `cell${i}-${idx}`
        cell.push(<td key={cellID} id={cellID}></td>)
      }
      rows.push(<tr key={i} id={rowID}>{cell}</tr>)
    }
      return (
        <div className="Table-text-wrapper">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              <input type="checkbox" 
                checked={this.state.agreement} 
                onChange={this.handleChange} />
              <span></span>
              <input type="checkbox" 
                checked={this.state.agreement} 
                onChange={this.handleChange} />
              <span></span>
              <input type="checkbox" 
                checked={this.state.agreement} 
                onChange={this.handleChange} />
              <span></span>
              <img src={Tablegraphic}/>
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
        </div>
      );
    }

// class Table extends Component {
//   constructor(props){
//     super(props);
//     this.state = {size: 10}
//   }
//   render(){
//     let rows = [];
//     for (var i = 0; i < this.state.size; i++){
//       let rowID = `row${i}`
//       let cell = []
//       for (var idx = 0; idx < this.state.size; idx++){
//         let cellID = `cell${i}-${idx}`
//         cell.push(<td key={cellID} id={cellID}></td>)
//       }
//       rows.push(<tr key={i} id={rowID}>{cell}</tr>)
//     }
//     return(
//       <div className="container">
//         <div className="row">
//           <div className="col s12 board">
//             <table id="simple-board">
//                <tbody>
//                  {rows}
//                </tbody>
//              </table>
//           </div>
//         </div>
//       </div>
//     )
//   }
};

//   };
  
  const root = document.querySelector('#root');
  ReactDOM.render(<Table />, root);

  export default Table;