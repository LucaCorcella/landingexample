import React, { Component } from 'react';
import Form from './form_landing'
import './App.css';
import bgImg from'./assets/back.jpg'

import wm_bg from './assets/W.png'
import boy_bg from './assets/M.png'

//component trigger background rotation
class BgRotate extends Component{
    constructor(props){
        super(props);
        this.state = {
            backgroundImage: wm_bg,
        }
    }

    componentDidMount() {
        this.changeBg = setInterval(
            () => this.rotateBg(),
            3000
        );
    }

    componentWillUnmount() {
        clearInterval(this.changeBg);
    }

    rotateBg() {
        this.setState({
            backgroundImage: this.state.backgroundImage === wm_bg ? boy_bg : wm_bg
        });
    }

    render(){
        return(
            <div id="bg_rotate"  style={{backgroundImage: 'url(' + this.state.backgroundImage + ')'}}></div>
        );
    }
}

// root class landingPage
class App extends Component {
    render() {
        return (

            <div className="App viewport" style={{backgroundImage: 'url(' + bgImg + ')'}}>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Form/>
                    </div>
                    <div className="col">
                        <BgRotate/>
                    </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default App;
