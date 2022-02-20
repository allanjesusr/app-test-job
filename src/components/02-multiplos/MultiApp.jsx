import { useState } from 'react';
import './styles/multstyles.css'
export const MultiApp = () => {

    const [number, setNumber] = useState(0); 
    const [array, setArray] = useState([]);

    const isMultiple = ( valor, mult ) => {
        let resp = valor % mult;
        if ( resp == 0 ) {
            return true;
        } else {
            return false;
        }
    }
 
    const handleClick = (limit) => {
        
        var tempArray = []

        if ( !number ) {
            alert( "Please enter a number")
          }
        let min = 1;
        for (let i = min; i - 1 < limit ; i++) {

            if ( isMultiple( i, 3) && isMultiple( i, 5)) {
                tempArray.push(' AKELAB, ')
        
                
            } else {
                if ( isMultiple( i , 3 )) {
                    tempArray.push(' AKE, ')
                } else {
                    if ( isMultiple( i, 5 )) {
                        tempArray.push(' LAB, ')
                    } else {
                        tempArray.push(` ${i}, `)
                    
                    }
                }
            }
        }
        setArray( tempArray )
    }
  return (
    <div className='screen-mult'>
        <div className='container-mult'>
            <h1 className='mult-h1'>Multiplos 3 y 5</h1>
            <input 
            placeholder="Number"
            className="form__input"
            type='number'
            min='1'
            onChange={ e => setNumber( parseInt(e.target.value)) }
          />
          <button 
            className='btn-mult'
            onClick={ () => handleClick(number) }
          >
            Find Sequence
          </button>
          <p className='mult-p'>Results:</p>
            <ul className='result-form-mult'>
              { array }
            </ul>
        </div>
    </div>
  )
}
