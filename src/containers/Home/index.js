import React, { Component, Fragment } from "react";
import { Button } from "./index.style";
import { Name } from "../../components";
import { fromJS } from "immutable";

export default class Home extends Component {
    state = {
        personal: fromJS({
            name: {
                first: "Vaibhav",
                last: "Satam"
            },
            address: {
                city: "Mumbai",
                state: "Maharashtra"
            }
        })
    };

    shouldComponentUpdate(nextProps, nextState) {
        return (
            this.state.personal.get("name") !== nextState.personal.get("name")
        );
    }

    handleClick = () => {
        this.setState({
            personal: this.state.personal.setIn(["address", "city"], "Pune")
        });
    };

    render() {
        const { personal } = this.state;

        return (
            <Fragment>
                <Name
                    firstname={personal.getIn(["name", "first"])}
                    lastname={personal.getIn(["name", "last"])}
                />
                <Button primary onClick={this.handleClick}>
                    Change Value
                </Button>
            </Fragment>
        );
    }
}
