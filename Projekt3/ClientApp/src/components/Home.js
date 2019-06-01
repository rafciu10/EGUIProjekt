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
        this.onClickEdit = this.onClickEdit.bind(this)
        this.onChangeFilterTitle = this.onChangeFilterTitle.bind(this)
        this.onChangeFilterAuthor = this.onChangeFilterAuthor.bind(this)
        this.onChangeFilterYear = this.onChangeFilterYear.bind(this)
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

    onClickEdit() {

        this.bookListReference.onClickEdit()
    }
   

    onChangeFilterTitle(title) {

        this.bookListReference.onChangeFilterTitle(title)

    }

    onChangeFilterAuthor(author) {

        this.bookListReference.onChangeFilterAuthor(author)

    }

    onChangeFilterYear(year) {

        this.bookListReference.onChangeFilterYear(year)

    }


  render() {
      return (
          
        <div>
                      
            <h1>Book Library</h1>
            <h4> Filter </h4>
            
            <Filter onChangeFilterTitle={this.onChangeFilterTitle} onChangeFilterAuthor={this.onChangeFilterAuthor} onChangeFilterYear={this.onChangeFilterYear}/>
            <BookList ref={node => this.bookListReference = node} />
            <Nav onClickDelete={this.onClickDelete} onClickEdit={this.onClickEdit} setIsVisible={this.setIsVisible} />

            {this.state.isVisible && <AddingBook setIsVisible={this.setIsVisible} setBookList={this.setBookList} />}           
            

      </div>
    );
  }
}
