import React, { Component } from 'react';
import BookList from './BookList.js';


export default class Nav extends Component {


    constructor(props) {
        super(props);
        this.onClickAddNewBook = this.onClickAddNewBook.bind(this)
        this.onClickDeleteBook = this.onClickDeleteBook.bind(this)
        this.onClickEditBook = this.onClickEditBook.bind(this)
    }

    onClickAddNewBook() {

        this.props.setIsVisible(true)
    }

    onClickDeleteBook() {

        this.props.onClickDelete()

    }

    onClickEditBook() {

        this.props.onClickEdit()
    }

    render() {
        return (
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="btn-group btn-group-lg">
                       
                        <button type="button" class="btn btn-primary" onClick={this.onClickAddNewBook} >Add new Book</button>
                        <button type="button" class="btn btn-warning" onClick={this.onClickEditBook} >Edit selected book</button>
                        <button type="button" class="btn btn-danger" onClick={this.onClickDeleteBook} > Delete selected book</button>
                    </div>
                </div>
            </div>
         
        );
    }
}
