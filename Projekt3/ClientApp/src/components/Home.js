import React, { Component } from 'react';
import BookList from './BookList.js';
import Nav from './Nav.js';
import AddingBook from './AddingBook.js';

export class Home extends Component {
  displayName = Home.name

    constructor(props) {
        super(props);
        this.state = { isVisible: false }
        this.setIsVisible = this.setIsVisible.bind(this)

    }

    setIsVisible(isVisible) {

        this.setState({ isVisible: isVisible })

    }


  render() {
    return (
      <div>
            <h1>Book Library</h1>
            <BookList />
            <Nav setIsVisible={this.setIsVisible} />

            {this.state.isVisible && <AddingBook setIsVisible={this.setIsVisible} />}           
            

      </div>
    );
  }
}
