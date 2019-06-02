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
        this.onClickFilter = this.onClickFilter.bind(this)
        this.onClickClear = this.onClickClear.bind(this)
        this.onChangeFilterTitle = this.onChangeFilterTitle.bind(this)
        this.onChangeFilterAuthor = this.onChangeFilterAuthor.bind(this)
        this.onChangeFilterYear = this.onChangeFilterYear.bind(this)
        this.selectedBook = null
    }

    setIsVisible(isVisible) {

        if (this.state.isVisible) {

            this.setState({isVisible: false})
        }

        setTimeout(() => {
          
            this.selectedBook = null
            this.setState({ isVisible: isVisible })

        }, 500)
       

    }

    setBookList(bookList) {
        
        this.bookListReference.setBookListState(bookList)

    }

    onClickDelete() {

        this.bookListReference.onClickDelete()
     
    }

    onClickEdit() {

        if (this.state.isVisible) {
            console.log("reset")
            this.setState({ isVisible: false })
        }

        setTimeout(() => {
            this.selectedBook = this.bookListReference.getSelectedBook()
            if (this.selectedBook) {
                this.setState({ isVisible: true })
            }
        }, 500 )
       
        
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

    onClickFilter() {

        this.bookListReference.onClickFilter()

    }

    onClickClear() {

        this.bookListReference.onClickClear()
    }

  render() {
      return (
          
        <div>
                      
            <h1>Book Library</h1>
            <h4> Filter </h4>


            <Filter onChangeFilterTitle={this.onChangeFilterTitle} onChangeFilterAuthor={this.onChangeFilterAuthor} onChangeFilterYear={this.onChangeFilterYear} onClickFilter={this.onClickFilter} onClickClear={this.onClickClear} />
            <BookList ref={node => this.bookListReference = node} />
            <Nav onClickDelete={this.onClickDelete} onClickEdit={this.onClickEdit} setIsVisible={this.setIsVisible} />

              {this.state.isVisible && <AddingBook selectedBook={this.selectedBook} setIsVisible={this.setIsVisible} setBookList={this.setBookList} />}           
            

      </div>
    );
  }
}
