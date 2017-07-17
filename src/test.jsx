import React from 'react';
import '../styles/index.scss';

export default class Test extends React.Component {
    render() {
        return (
        <div id="container"> 
            <img src={require('../images/resizedBackgroundHJ.jpg')}/> 
            <ol>
                <li>
                    The first jumper
                </li>
                <li>
                    The second jumper
                </li>

            </ol>
        </div> 
        )
    }

 
}
