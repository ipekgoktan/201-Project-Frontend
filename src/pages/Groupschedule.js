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

var axios = require("axios");
var cookie = new Cookie();
var allEmailschedules = []
var data = {
    emailList: cookie.get("inputemails"),
};

var config = {
    method: "get",
    url: "https://uofschedulingconflictsapi.herokuapp.com/api/schedules",
    headers: {},
    data: data,
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
        var data = {
            emailList: cookie.get("inputemails"),
        };
        var config = {
            method: "get",
            url: "https://uofschedulingconflictsapi.herokuapp.com/api/getschedules",
            headers: {},
            data: data,
        };
        window.alert("hi")
        const setState = this.setState.bind(this);

        axios(config)
            .then(function (response) {
              window.alert("hiiii")
                allEmailschedules = response.data.schedule;
                console.log(JSON.stringify(response.data));

            })
            .catch(function (error) {
                console.log(error);
            });

        var axios = require('axios');
        var data = JSON.stringify({
          "eventLen": 15,
          "schedules": allEmailschedules
        });

        var config = {
          method: 'get',
          url: 'localhost:8080/merge',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };


        
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
