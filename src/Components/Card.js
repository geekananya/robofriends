import React, {Component} from 'react'

export default class Card extends Component{
    render(){
        // console.log(this.props.robots[0]);      //this.props is an object of properites containing all properties passed in the component
        return( 
            <div className='tc dib br3 ma2 pointer bg-light-blue grow'>
                <img src={ `https://robohash.org/${this.props.id}?size=200x200` } alt={`robo${this.props.id}`}></img>
                <h2 className='ma0 pa2'>{this.props.name}</h2>
                <p className='ma0 pa2'>{this.props.username}</p>
                <p className='ma0 pa2'>{this.props.email}</p>
            </div>
        )
    }
};