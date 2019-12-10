import React, { Component } from 'react'
import './App1.css'
import logo from './icon.png'
class App1 extends Component {
    render() {
        return(
            <div className="wrappers gambar">
                <div className="wrappers">
                    <div className="wrapper-top">
                        <div className="top-name">
                            <h1> Go Green</h1>
                            <div className="icon">
                                <img src={logo}/>
                            </div>
                        </div>
                        <div className="wrapper-desc">
                            <div className="desc">
                                <h1>Make it green</h1>
                                <span>Now more than ever. Our planet is need our</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App1;