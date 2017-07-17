import React from 'react';
import '../styles/index.scss';

export default class Test extends React.Component {
    render() {
        return (
            <ol>
                <li>
                    The first jumper
                </li>
                <li>
                    The second jumper
                </li>

            </ol>    
        )
    }

render() { 
    return ( 
        <img src={require('../images/sotomayor.jpg')}/> 
    )
}
}
