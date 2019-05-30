import React, { Component } from 'react';

export default class Filter extends Component {

    constructor(props) {
        super(props);
        this.onChangeAuthor = this.onChangeAuthor.bind(this)
        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.onChangeYear = this.onChangeYear.bind(this)

    }

    onChangeAuthor() {

        
    }


    onChangeTitle(event) {

        this.props.onChangeFilterTitle(event.target.value)
     
    }


    onChangeYear() {



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
                    <input type="text" class="form-control" placeholder="Title" aria-label="Title" aria-describedby="basic-addon1" onChange={this.onChangeTitle} />
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Year</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Year" aria-label="Year" aria-describedby="basic-addon1" onChange={this.onChangeYear} />
                </div>




           </div>


               )
    }
}
