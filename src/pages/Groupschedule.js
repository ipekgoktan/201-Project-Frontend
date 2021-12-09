import "./Schedule.css";
import React, { Component, useState } from "react";
import Cookie from "universal-cookie";

// console.log("axios");
// axios(config)
//     .then(function (response) {
//         console.log(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

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

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            body: [],
        };
    }
    componentDidMount() {
        console.log(this.setState);
        const setState = this.setState.bind(this);
        var cookie = new Cookie();
        var allEmailschedules = [];
        var axios = require("axios");
        var data = { emailList: cookie.get("inputemails") };
        console.log(data);
        console.log(cookie.get("inputemails"));
        //window.alert(cookie.get("inputemails"));
        var config = {
            method: "post",
            url: "https://uofschedulingconflictsapi.herokuapp.com/api/schedules",
            headers: {},
            data: data,
        };

        axios(config)
            .then(function (response) {
                var raw_schedule = response.data.scheduleList;
                //console.log(cookie.get("inputtime"));
                var data = {
                    eventLen: 60,
                    schedules: raw_schedule,
                };
                var config = {
                    method: "post",
                    url: "/merge",
                    headers: {},
                    data: data,
                };
                axios(config).then((response) => {
                    console.log(response.data);
                    var merged_schedule = response.data.mergedSchedule;
                    // for (var i = 0; i < raw_schedule[0].length; i++) {
                    //     var isFree = 1;
                    //     for (var j = 0; j < raw_schedule.length; j++) {
                    //         if (raw_schedule[j][i] == 0) {
                    //             isFree = 0;
                    //             break;
                    //         }
                    //     }
                    //     merged_schedule.push(isFree);
                    // }

                    var body = [];
                    while (merged_schedule.length > 0)
                        body.push(merged_schedule.splice(raw_schedule, 13));
                    setState({ body: body });
                });
                console.log(raw_schedule);

                //window.alert(JSON.stringify(body));
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
        //window.alert(s)
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
