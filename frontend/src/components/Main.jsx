import React, {Component} from 'react';
import {connect} from 'react-redux';
import Calendar from "./Calendar"
import CalendarsList from "./CalendarsList"
import Schedule from "./Schedule"
import "../css/main.css"

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            calendars: {},
            selectedDate: new Date(new Date().setHours(0, 0, 0)),
        };
    };


    changeDate = (date) => {
        this.setState({selectedDate: date});
    };

    changeCalendars = (calendars) => {
        this.setState({calendars: calendars});
    };

    render() {
        return (
            <div className={"main-content"}>
                <div className={'side-bar'}>
                    <Calendar selectedDate={this.state.selectedDate} changeDate={this.changeDate}/>
                    <CalendarsList calendars={this.state.calendars} changeCalendars={this.changeCalendars} user={this.props.auth} />
                </div>
                <div className={'scheduler'}>
                    <Schedule selectedDate={this.state.selectedDate} calendars={this.state.calendars}
                              changeDate={this.changeDate}  user={this.props.auth} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        events: state.events,
    }
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);