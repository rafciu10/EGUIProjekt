import React, { Component } from 'react';

export default class Filter extends Component {

    constructor(props) {
        super(props);
        this.onChangeAuthor = this.onChangeAuthor.bind(this)
        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.onChangeYear = this.onChangeYear.bind(this)
        this.onClickClear = this.onClickClear.bind(this)
        this.onClickFilter = this.onClickFilter.bind(this)

    }

    onChangeAuthor(event) {

        this.props.onChangeFilterAuthor(event.target.value)
    }


    onChangeTitle(event) {

        this.props.onChangeFilterTitle(event.target.value)
     
    }


    onChangeYear(event) {


        this.props.onChangeFilterYear(event.target.value)
    }

    onClickClear() {

        this.props.onClickClear()
        this.authorInputReference.value = ""
        this.titleInputReference.value = ""
        this.yearInputReference.value = ""
    }

    onClickFilter() {

        this.props.onClickFilter()

    }


    render() {
        return (

    <form name="filter_form" id="filter_form" class="form-horizontal">
            <div class="form-group">
                <div class="col-sm-2">  
                        <div class="input-group mb-3">
                    
                    
                            <input type="text" class="form-control" placeholder="Author" aria-label="Author" aria-describedby="basic-addon1" ref={node => this.authorInputReference = node} onChange={this.onChangeAuthor} />
                </div>
            </div>  

            <div class="col-sm-2">
                <div class="input-group mb-3">
                    
                    
                            <input type="text" class="form-control" placeholder="Title" aria-label="Title" aria-describedby="basic-addon1" ref={node => this.titleInputReference = node} onChange={this.onChangeTitle} />
                </div>
            </div>


            <div class="col-sm-2">
                 <div class="input-group mb-3">
                    
                     
                            <input type="text" class="form-control" placeholder="Year" aria-label="Year" aria-describedby="basic-addon1" ref={node => this.yearInputReference = node} onChange={this.onChangeYear} />
                </div>
            </div>

                    <div class="btn-group-horizontal">

                        <div class="col-sm-1">
                            <div class="input-group mb-3">
                                <button type="button" class="btn btn-primary" onClick={this.onClickFilter}  >Filter</button>
                            </div>
                        </div>
                     

                                <div class="col-sm-1">
                                    <div class="input-group mb-3">

                                <button type="button" class="btn btn-primary" onClick={this.onClickClear}  >Clear</button>
                            </div>
                        </div>
                    </div>



           </div>
    </form >

               )
    }
}
