import React, { Component } from 'react';

export default class Book extends Component {




    render() {
        return (
            <tr onClick={() => this.props.onSelectBook(this.props.index)} style={this.props.isActive ? { backgroundColor: "grey" } : {} }>
                
                <th scope="row">{this.props.index+1}</th>
                <td>{this.props.author}</td>
                <td>{this.props.title}</td>
                <td>{this.props.year}</td>
            </tr>
        );
    }
}
