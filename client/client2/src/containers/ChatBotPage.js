import React, {Component} from 'react';
import './ChatBotPage.css'
import Nav1 from './img/nav1.png'
import Nav2 from './img/nav2.png'
// import Bg1 from './img/nav2.png'

class ChatBotPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {

        return (

            <div>
                <div className='NavContainer'>
                    <div className='Right'>
                        <img src={Nav1} alt="ddd" width="100%" height="100%"/>
                    </div>

                    <div className='Left'>
                        <img src={Nav2} alt="ddd" width="100%" height="100%"/>
                    </div>
                </div>
                <div className="Bg1">
                <p>d</p>
                  </div>

                <div className="PlayContainer">
                    <button className="FixedPlay">Jouer</button>
                </div>
            </div>
        )
    }
}

export default ChatBotPage