import { useState } from "react";
import './styles/fibostyles.css';

export const FibonacciApp = () => {
  
    const [list, setList] = useState([]);
    const [number, setNumber] = useState(1); 

    const handleClick = (limit) => {
      const fib = [ 0 , 1]
      for (let i = 2; i < limit ; i++) {
          fib[i] = fib[ i - 1 ] + fib[ i - 2 ];
          
      }
      if ( !number ) {
        alert( "Please enter a number")
      } else {
        setList(fib.map( (number, index) => {
              return <li className='fibo-li' key={ index } >{number} , </li>
        
        }));
        return fib;
      }

    }

    return (
      <div className="screen-fibo">
        <div className="container">
          <h1 className='fibo-h1'>Fibonacci App</h1>
          <input 
            placeholder="Number"
            className="form__input"
            type='number'
            min='1'
            onChange={ e => setNumber( parseInt(e.target.value)) }
          />
          <button 
            className='btn-fibo'
            onClick={ () => handleClick(number) }
          >
            Find Sequence
          </button>
          <p className='fibo-p'>Fiboacci Sequence:</p>
            <ul className="result-form">
              { list }
            </ul>
          
        </div>
      </div>
    )
}
