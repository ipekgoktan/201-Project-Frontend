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
var data = {
    email: cookie.get("email"),
};

var config = {
    method: "post",
    url: "https://uofschedulingconflictsapi.herokuapp.com/api/getschedule",
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

function SubmitTable() {
    var TableArray = [];
    //var d = document.getElementById(2);
    for (let i = 0; i < 91; i++) {
        var t = document.getElementById(i).checked;
        if (t) {
            TableArray.push(1);
        } else {
            TableArray.push(0);
        }
    }
    var axios = require("axios");
    var cookie = new Cookie();
    var idToken = cookie.get("idToken");
    console.log(idToken);

    var config = {
        method: "post",
        url: "https://uofschedulingconflictsapi.herokuapp.com/api/schedule",
        headers: {
            Authorization: "Bearer " + idToken,
        },
        data: { schedule: TableArray },
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
    console.log(TableArray);
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            body: [],
        };
    }
    componentDidMount() {
        console.log(this.setState);
        var data = {
            email: cookie.get("email"),
        };
        var config = {
            method: "post",
            url: "https://uofschedulingconflictsapi.herokuapp.com/api/getschedule",
            headers: {},
            data: data,
        };
        const setState = this.setState.bind(this);

        axios(config)
            .then(function (response) {
                var raw_schedule = response.data.schedule;
                var body = [];
                while (raw_schedule.length > 0)
                    body.push(raw_schedule.splice(raw_schedule, 13));
                setState({ body: body });
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

        // var body =
        // [[1 ,1, 1, 1, 0, 0, 0 ,1 ,0 ,0, 1, 1, 1],
        //            [0 ,1, 0, 1, 0, 0, 0 ,0 ,0 ,0, 1, 1, 1],
        //             [0 ,1, 0, 1, 0, 0, 1 ,0 ,0 ,0, 1, 1, 1],
        //             [0 ,1, 0, 1, 0, 1, 0 ,0 ,0 ,0, 0, 1, 1],
        //             [0 ,1, 0, 1, 0, 0, 0 ,1 ,0 ,0, 1, 1, 1],
        //             [0 ,1, 0, 1, 0, 0, 0 ,0 ,0 ,0, 1, 1, 1],
        //             [0 ,1, 0, 1, 0, 1, 0 ,0 ,0 ,0, 1, 0, 1]];
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
                    <button type="button" id="BUTTON" onClick={SubmitTable}>
                        Submit
                    </button>
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
