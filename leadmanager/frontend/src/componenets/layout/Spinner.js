import React, { Fragment } from 'react';
import spinner from './spinner.gif'

export default ({width,display, height}) => <Fragment>
    <img 
    src={spinner}
    style={{display:'inline-block', width:'100%'}}
    alt='Loading...' 
    ></img>

</Fragment> 