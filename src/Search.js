import React from 'react';

class Search extends React.Component{
    state = {
        errorMessage : "",
        fruitName : "",
        error : false
    }

    validateFruitName = ( event ) => {
        const fruitName = event.target.value;
        const regExpression = /^[a-zA-Z ]*$/;

        if(! regExpression.test( fruitName ) ){
            this.setState({
                errorMessage : "Please type only letters and spaces.",
                error : true
            });
        }
        else{
            this.setState({
                errorMessage : "",
                fruitName,
                error: false
            });
        }
    }

    submitFruit = ( event ) => {
        event.preventDefault();

        if( ! this.state.error ){
            // Filter the fruits array with the matching criteria
            this.props.filterFruits( this.state.fruitName );
        }
    }

    render(){
        return( 
            <div>
                <form onSubmit={this.submitFruit}>
                <label htmlFor="fruitName">
                    Fruits you want to search for:
                </label>
                <input id="fruitName" type="text" onChange={this.validateFruitName}/>
                <button type="submit">
                    Search
                </button>
            </form>
            {this.state.errorMessage}
            </div>
            
        );
    }

}

export default Search;