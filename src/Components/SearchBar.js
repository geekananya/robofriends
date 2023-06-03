import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component
{
    render(){
        return (
            <div>
                <input 
                    className='bg-washed-green br1 mb3 pa3'
                    type="search" placeholder="Search Robofriends"
                    onChange={this.props.searchchange}
                >
                </input>
            </div>
        )
    }
}
export default SearchBar;