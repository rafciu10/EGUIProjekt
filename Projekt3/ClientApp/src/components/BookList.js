import React, { Component } from 'react';
import Book from './Book.js';

export default class BookList extends Component {

    constructor(props) {
        super(props);
        this.state = { books: [], clickedBookIndex: null, filterAuthor: "", filterTitle: "", filterYear: "" }
        this.setBookListState = this.setBookListState.bind(this)
        this.onSelectBook = this.onSelectBook.bind(this)
        this.onClickDelete = this.onClickDelete.bind(this)
        this.onClickEdit = this.onClickEdit.bind(this)
        this.onChangeFilterTitle = this.onChangeFilterTitle.bind(this)
        this.onChangeFilterAuthor = this.onChangeFilterAuthor.bind(this)
        this.onChangeFilterYear = this.onChangeFilterYear.bind(this)
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


    setBookListState(bookList) {

        this.setState({books:bookList})

    }

    onSelectBook(index) {

        this.setState({ clickedBookIndex: index })

    }


    onClickDelete() {

      
        const selectedBook = this.state.books[this.state.clickedBookIndex]
        if (selectedBook) {

            fetch('https://localhost:44371/api/books/' + selectedBook.id, {
                method: 'DELETE',
                body: JSON.stringify(),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(response => {
                    this.setState({ books: response })
                })
                .catch(error => console.error('Error:', error))
        }     
                 
    }

    onClickEdit() {
        /*
        const selectedBook = this.state.books[this.state.clickedBookIndex]
        if (selectedBook) {
            fetch('https://localhost:44371/api/books/' + selectedBook.id, {
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
                    
                })
                .catch(error => console.error('Error:', error));
        }
        */
        console.log("siema")
    }

    onChangeFilterTitle(title) {

        this.setState({ filterTitle: title })
      
    }

    onChangeFilterAuthor(author) {


        this.setState({ filterAuthor: author })
 
    }

    onChangeFilterYear(year) {


        this.setState({ filterYear: year })
     

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

                        this.state.books.filter(item => item.author.includes(this.state.filterAuthor)).filter(item => item.title.includes(this.state.filterTitle)).filter(item => item.year.includes(this.state.filterYear)).map((item, index) => <Book isActive={this.state.clickedBookIndex === index} onSelectBook={this.onSelectBook} author={item.author} title={item.title} year={item.year} index={index} />)

                    }
                </tbody>
            </table>
        );
    }
}


