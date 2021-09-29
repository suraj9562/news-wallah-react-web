import React, { Component } from 'react';
import Loading from "./ajax-loader.gif";

export class spinner extends Component {
    render() {
        return (
            <div className="text-center my-3">
                <img src={Loading} alt="spinner"/>
            </div>
        )
    }
}

export default spinner
