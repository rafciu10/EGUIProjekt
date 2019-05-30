import React, { Component } from 'react';
import BookList from './BookList.js';


export default class Nav extends Component {


    constructor(props) {
        super(props);
        this.onClickAddNewBook = this.onClickAddNewBook.bind(this)
    }

    onClickAddNewBook() {

        this.props.setIsVisible(true)
    }


    render() {
        return (
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="btn-group btn-group-lg">
                       
                <button type="button" class="btn btn-primary" onClick={this.onClickAddNewBook} >Add new Book</button>
                <button type="button" class="btn btn-warning">Edit selected book</button>
                <button type="button" class="btn btn-danger">Delete selected book</button>
                    </div>
                </div>
            </div>
         
        );
    }
}
