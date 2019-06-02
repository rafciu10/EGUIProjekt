import React, { Component } from 'react';
import BookList from './BookList.js';

export default class AddingBook extends Component {

    constructor(props) {
        super(props);
        this.onClickClose = this.onClickClose.bind(this)
        this.onChangeAuthor = this.onChangeAuthor.bind(this)
        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.onChangeYear = this.onChangeYear.bind(this)
        this.onClickEdit = this.onClickEdit.bind(this)
        this.author = ""
        this.title = ""
        this.year = ""
        if (this.props.selectedBook) {

            this.author = this.props.selectedBook.author
            this.title = this.props.selectedBook.title
            this.year = this.props.selectedBook.year
        }
    }


    onClickClose() {         //USUNĄĆ MOZLIWOSC DODANIA PUSTYCH KSIAZEK

             
       
        fetch('https://localhost:44371/api/books', {
            method: 'POST',
            body: JSON.stringify({
                author: this.author,
                title: this.title,
                year: this.year
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => {
                this.props.setBookList(response)
                this.props.setIsVisible(false)
            }) 
            .catch(error => console.error('Error:', error));
      
    }

    onClickEdit() {

        fetch('https://localhost:44371/api/books/' + this.props.selectedBook.id, {
            method: 'PUT',
            body: JSON.stringify({
                author: this.author,
                title: this.title,
                year: this.year
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => {
                this.props.setBookList(response)
                this.props.setIsVisible(false)
            })
            .catch(error => console.error('Error:', error));

    }


    onChangeAuthor(event) {

        this.author = event.target.value
    
    }

    onChangeTitle(event) {

        this.title = event.target.value
       
    }

    onChangeYear(event) {

        this.year = event.target.value
        
    }


    render() {
        
        return (
            <div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Author</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Author" aria-label="Author" aria-describedby="basic-addon1" defaultValue={this.props.selectedBook ? this.props.selectedBook.author : null} onChange={this.onChangeAuthor} />
                </div>

                <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Title</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Title" aria-label="Title" aria-describedby="basic-addon1" defaultValue={this.props.selectedBook ? this.props.selectedBook.title : null} onChange={this.onChangeTitle} />
                </div>

                <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">Year</span>
                            </div>
                    <input type="text" class="form-control" placeholder="Year" aria-label="Year" aria-describedby="basic-addon1" defaultValue={this.props.selectedBook ? this.props.selectedBook.year : null} onChange={this.onChangeYear} />
                </div>



                <button type="button" class="btn btn-primary" onClick={this.props.selectedBook ? this.onClickEdit : this.onClickClose} > {this.props.selectedBook ? "Edit" : "Add"} </button>

               

            </div>
        );
    }
}
