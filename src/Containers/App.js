import React from 'react'
import CardList from '../Components/CardList'
import SearchBar from '../Components/SearchBar'
import Scroll from '../Components/Scroll'
import './App.css'

class App extends React.Component{

    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        };
        console.log("constructor");
    }
    
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=> response.json())
        .then(roboArray => {
            this.setState({robots: roboArray});
        })
        
        /*render() happens twice(4 times due to strict mode) due to 
        1. re-render after componentdidmount()
        2. re-render due to setState()
        Note that app re-renders everytime the field of serachbar is changed*/
        console.log("Mount");
    }
    
    onSearchChange = (event) =>
    {
        // console.log("Input change", event.target.value);            //here event.target and event.currentTarget are the same
        this.setState({ searchfield: event.target.value });     
        /*setState is an asynchronous fn so the updated value
        may not be reflected immediately in the console (in fact prev value may be shown)
        --works fine in dom though */
    }
    
    checkLoading = (filteredRobots) =>{
    if(this.state.robots.length === 0)
        return <h1>Loading</h1>
    else
        return (
            <Scroll>
                <CardList robots={filteredRobots}/>
            </Scroll>
        )
    }


    //why is it rendering twice after setstate (in componentdidmount)
    render(){
        const filteredRobots = this.state.robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        console.log("render");
        return (
            <>
                <h1 className='f1 mt4 mb3'>ROBOFRIENDS</h1>
                <SearchBar searchchange={this.onSearchChange}/>
                {this.checkLoading(filteredRobots)}
            </>
        )
    }
}

export default App;