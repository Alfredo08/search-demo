import React from 'react';

class ErrorBoundary extends React.Component{
    state = {
        error : false
    }

    goToHome = () => {
        window.location.href = "/";
    }

    componentDidCatch( error, errorInfo ) {  
        console.log( error, errorInfo );
        this.setState({
           error: true
        });
    }

    render(){
        if( this.state.error ){
            return (
                <div>
                    <p>This profile id doesn't exist</p>
                    <button onClick={this.goToHome}>
                        Please go back to the home
                    </button>
                </div>
            )
        }
        else{
            return this.props.children
        }
    }
}

export default ErrorBoundary;