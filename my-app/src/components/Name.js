import React, {Component} from 'react';

class Name extends Component {
    constructor() {
        
        super()
        this.state = {
            name: "marcello"
            }
        }

        clickedMe = () => {
            this.setState({
                name:this.state.name === "marcello" ? "graco" : "cells"
            })
        }

        render() {
            return (
                <div>
                    <h1 classname = "bg-primary text-white text-center">{this.state.name}</h1>
                <button onClick = {this.clickedMe} className = "btn btn-success">Change Text</button>
                </div>
            )
        }

}


export default Name;