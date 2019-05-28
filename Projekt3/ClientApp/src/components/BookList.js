import React, { Component } from 'react';
import Book from './Book.js';

export default class BookList extends Component {

    constructor(props) {
        super(props);
        this.state = { books: []}
    }


    componentWillMount() {

        fetch('https://localhost:44371/api/books', {
            method: 'GET',
            body: JSON.stringify(),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(response => {
             this.setState({ books:response })
            })
            .catch(error => console.error('Error:', error))
    }

    render() {
        return (      
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Author</th>
                        <th scope="col">Title</th>
                        <th scope="col">Year</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.books.map((item, index) => <Book author={item.author} title={item.title} year={item.year} index={index + 1} />)

                    }
                </tbody>
            </table>
        );
    }
}


