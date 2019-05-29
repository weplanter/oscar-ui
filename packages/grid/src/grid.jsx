import React, { Component } from 'react';
import './grid.css';

class Grid extends Component {
    render() {
        const { props } = this;
        return (
            <div
                className="oscar-ui-grid"
                {...props}
            >
                {this.props.children}
            </div>
        );
    }
}

export default Grid;
