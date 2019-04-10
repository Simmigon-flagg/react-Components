import React from 'react';

const Counter = (props) => {
    // Moved to player Component
    // state = { 
    //     score: 0 
    //   };
      
    //Convert to one Method move to application state
    // incrementScore = () => {
    //   this.setState( prevState => ({
    //     score: prevState.score + 1
    //   }));
    // }
  
    // decrementScore = () => {
    //   this.setState( prevState => ({
    //     score: prevState.score - 1
    //   }));
    // }
  
    let index = props.index
      return (
        <div className="counter">
        {/* Stateless component that takes in props */}
          <button className="counter-action decrement" onClick={() => props.changeScore(index, -1)}> - </button>
          <span className="counter-score">{ props.score }</span>
          <button className="counter-action increment" onClick={() => props.changeScore(index, 1)} > + </button>
          {/* <button className="counter-action decrement" onClick={this.decrementScore}> - </button> */}
          {/* <span className="counter-score">{ this.state.score }</span> */}
          {/* <button className="counter-action increment" onClick={this.incrementScore}> + </button> */}
        </div>
      );
    
  }

  export default Counter;