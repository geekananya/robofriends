import React, {Component} from 'react'
import Card from './Card'


class CardList extends Component{
    render(){
        return(
            <div>
                {
                    this.props.robots.map(user=> <Card 
                        key= {user.id}                        id={user.id} 
                        username={user.username} 
                        name={user.name} 
                        email={user.email}
                    />
                    )
                }
            </div>
        ) 
    }
}

export default CardList;