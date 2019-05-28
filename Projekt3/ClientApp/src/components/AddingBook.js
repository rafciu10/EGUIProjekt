import React, { Component } from 'react';
import BookList from './BookList.js';

export default class AddingBook extends Component {

    constructor(props) {
        super(props);
        this.onClickClose = this.onClickClose.bind(this)
    }


    onClickClose() {

        this.props.setIsVisible(false)
    }

    onChangeAuthor(event) {

        console.log(event.target.value)
    }

    render() {
        return (
            <div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Author</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Author" aria-label="Author" aria-describedby="basic-addon1" onChange={this.onChangeAuthor} />
                </div>

                <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Title</span>
                        </div>
                        <input type="text" class="form-control" placeholder="Title" aria-label="Title" aria-describedby="basic-addon1"/>
                </div>

                <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">Year</span>
                            </div>
                            <input type="text" class="form-control" placeholder="Year" aria-label="Year" aria-describedby="basic-addon1"/>
                </div>



                <button type="button" class="btn btn-primary" onClick={this.onClickClose} > Add</button>

               

            </div>
        );
    }
}
