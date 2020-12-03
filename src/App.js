import React from 'react';
import Search from './Search';
import STORE from './STORE';
import Fruit from './Fruit';

class App extends React.Component{
  state = {
    fruits : [],
    currentSearch : []
  }

  filterFruits = ( fruitName ) => {
    console.log( fruitName );
    const filteredFruits = this.state.fruits.filter( ( fruit ) => {
      if( fruit.name.indexOf( fruitName ) >= 0 ){
        return fruit;
      }
    });
    
    this.setState({
      currentSearch : filteredFruits
    });
  }

  componentDidMount(){
    // Fetch to get all fruits
    this.setState({
      fruits : STORE,
      currentSearch : STORE
    });
  }

  render(){
    return (
      <div>
        <Search filterFruits={this.filterFruits}/>
        {
          this.state.currentSearch.map( ( fruit, index ) => {
            return ( <Fruit key={ index } fruit={fruit} /> );
          })
        }
      </div>
    )
  }
}

export default App;


