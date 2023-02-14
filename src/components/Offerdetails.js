import React from 'react'
import Featurebox from './Featurebox';
import fimage1 from '../images/1.png';
import fimage2 from '../images/2.png';
import fimage3 from '../images/3.png';
import fimage4 from '../images/4.png';

export default function Offerdetails() {
  return (
    

        <div id='features'>
            <h1>Prices</h1>
            <div className='a-container'>
                <Featurebox image={fimage1}    title="For a Month" />
                <Featurebox image={fimage2}    title="For 3 Months" />
                <Featurebox image={fimage3}    title="For 6 Months" />
                <Featurebox image={fimage4}    title="For 12 Months" />
            </div>
            
        </div>

    
  )
}
