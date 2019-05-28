import React, { Component } from 'react';
import BookList from './BookList.js';

export class Home extends Component {
  displayName = Home.name

  render() {
    return (
      <div>
            <h1>Book Library</h1>
            <BookList />

      </div>
    );
  }
}
