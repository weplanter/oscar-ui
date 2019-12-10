import React, { Component } from 'react';
import './grid.css';

class Grid extends Component {
    render() {
        return (
            <div className="oscar-ui-grid" data-id={this.props['data-id']}>
                {this.props.children}
            </div>
        );
    }
}

export default Grid;
