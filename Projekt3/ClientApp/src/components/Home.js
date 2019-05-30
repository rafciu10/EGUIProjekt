import React, { Component } from 'react';
import BookList from './BookList.js';
import Nav from './Nav.js';
import AddingBook from './AddingBook.js';
import Filter from './Filter.js';

export class Home extends Component {
  displayName = Home.name

    constructor(props) {
        super(props);
        this.state = { isVisible: false }
        this.setIsVisible = this.setIsVisible.bind(this)
        this.setBookList = this.setBookList.bind(this)
        this.onClickDelete = this.onClickDelete.bind(this)
        this.onChangeFilterTitle = this.onChangeFilterTitle.bind(this)
        

    }

    setIsVisible(isVisible) {

        this.setState({ isVisible: isVisible })

    }

    setBookList(bookList) {
        
        this.bookListReference.setBookListState(bookList)

    }

    onClickDelete() {

        this.bookListReference.onClickDelete()
     
    }

    onChangeFilterTitle(title) {

        this.bookListReference.onChangeFilterTitle(title)

    }


  render() {
    return (
      <div>
            <h1>Book Library</h1>
            <Filter onChangeFilterTitle={this.onChangeFilterTitle} />
            <BookList ref={node => this.bookListReference = node} />
            <Nav onClickDelete={this.onClickDelete} setIsVisible={this.setIsVisible} />

            {this.state.isVisible && <AddingBook setIsVisible={this.setIsVisible} setBookList={this.setBookList} />}           
            

      </div>
    );
  }
}
