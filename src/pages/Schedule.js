
import './Schedule.css';
import React, { Component } from 'react';

var number = 0;
const days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


function SubmitTable(){
    var TableArray = []
    for(let i =0; i < 91; i++){
        var t = document.getElementById(i).checked
        if(t){
            TableArray.push(1)
        }
        else{
            TableArray.push(0)
        }

    }
    window.alert( TableArray );
}


 

  
class App extends Component {
    render() {
        const heading= ["  ", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"]; 
        var body = [[1 ,1, 1, 1, 0, 0, 0 ,1 ,0 ,0, 1, 1, 1],
                   [0 ,1, 0, 1, 0, 0, 0 ,0 ,0 ,0, 1, 1, 1],
                    [0 ,1, 0, 1, 0, 0, 1 ,0 ,0 ,0, 1, 1, 1],
                    [0 ,1, 0, 1, 0, 1, 0 ,0 ,0 ,0, 0, 1, 1],
                    [0 ,1, 0, 1, 0, 0, 0 ,1 ,0 ,0, 1, 1, 1],
                    [0 ,1, 0, 1, 0, 0, 0 ,0 ,0 ,0, 1, 1, 1],
                    [0 ,1, 0, 1, 0, 1, 0 ,0 ,0 ,0, 1, 0, 1]];
        return (
            <div className="App">
            <header className="App-header">
            <div >
                <Table id = "mainTable" className = "table" heading={heading} body={body} />
            </div>
            <button type="button" id = "BUTTON"  onClick={SubmitTable} >Submit</button>
      </header>
    </div>
        );
    }
}
  
class Table extends Component {
    render() {
        var heading = this.props.heading;
        var body = this.props.body;
        return (
            <table class = "table">
                <thead>
                    <tr>
                        {heading.map(head => <th class = "all">{head}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {
                    body.map(row => <TableRow row={row} />)
                    }
                </tbody>
            </table>
        );
    }
}



class TableRow extends Component {

  
  
    render() {

        var row = this.props.row;
        //window.alert(number/13);
        // if(number !== 0){
        //     number+=1;

        // }
        //window.alert(days)
        var s = days[number/13]
        
    
        return (
            <tr>
                
                <td class = "all">{s}</td>
                 {
                     
                    row.map(val => val === 1 ? <td class = "all"><label class="container">{<input type="checkbox"  id = {number++} defaultChecked={true}></input> } <span class="checkmark"></span></label></td>
                    :  <td class = "all"><label class="container">{<input id = {number++} type="checkbox"   defaultChecked={false}></input> } <span class="checkmark"></span></label></td>)
                }

                
            </tr>
        )
    }
}




  
export default App;