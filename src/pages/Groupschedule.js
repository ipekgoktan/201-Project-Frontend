import "./Schedule.css";
import React, { Component, useState } from "react";
import Cookie from "universal-cookie";

var number = 0;
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

var cookie = new Cookie();
var allEmailschedules = []
var axios = require('axios');
var data = '{\n    "emailList": '+cookie.get("inputemails")+'\n}';

var config = {
  method: 'post',
  url: 'https://uofschedulingconflictsapi.herokuapp.com/api/schedules',
  headers: { },
  data : data
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            body: [],
        };
    }
    componentDidMount() {
        console.log(this.setState);
        var axios = require('axios');
        var data = '{\n    "emailList": '+cookie.get("inputemails")+'\n}';

        var config = {
          method: 'post',
          url: 'https://uofschedulingconflictsapi.herokuapp.com/api/schedules',
          headers: { },
          data : data
        };
        window.alert(data)
        axios(config)
          .then(function (response) {
            window.alert("hii")
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });

        var axios = require('axios');
        var data = JSON.stringify({
          "eventLen": cookie.get("inputemails").length,
          "schedules": allEmailschedules
        });
        window.alert(data)
        var config = {
          method: 'post',
          url: 'localhost:8080/merge',
          headers: {},
          data : data
        };


        const setState = this.setState.bind(this);

        axios(config)
        .then(function (response) {
          var raw_schedule = response.data.schedule;
          var body = [];
          while (raw_schedule.length > 0)
              body.push(raw_schedule.splice(raw_schedule, 13));
            setState({ body: body });
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    render() {
        const heading = [
            "  ",
            "8am",
            "9am",
            "10am",
            "11am",
            "12am",
            "1pm",
            "2pm",
            "3pm",
            "4pm",
            "5pm",
            "6pm",
            "7pm",
            "8pm",
        ];
        return (
            <div className="App">
                <header className="App-header">
                    <div>
                        <Table
                            id="mainTable"
                            className="table"
                            heading={heading}
                            body={this.state.body}
                        />
                    </div>
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
            <table className="table">
                <thead>
                    <tr>
                        {heading.map((head) => (
                            <th className="all">{head}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {body.map((row) => (
                        <TableRow row={row} />
                    ))}
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
        var s = days[number / 13];

        return (
            <tr>
                <td className="all">{s}</td>
                {row.map((val) =>
                    val === 1 ? (
                        <td className="all">
                            <label className="container">
                                {
                                    <input
                                        type="checkbox"
                                        id={number++}
                                        defaultChecked={true}
                                    ></input>
                                }{" "}
                                <span className="checkmark"></span>
                            </label>
                        </td>
                    ) : (
                        <td className="all">
                            <label className="container">
                                {
                                    <input
                                        id={number++}
                                        type="checkbox"
                                        defaultChecked={false}
                                    ></input>
                                }{" "}
                                <span className="checkmark"></span>
                            </label>
                        </td>
                    )
                )}
            </tr>
        );
    }
}

export default App;
