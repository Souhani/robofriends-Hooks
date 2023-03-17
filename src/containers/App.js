import React, { useState, useEffect} from 'react';
import Cardlist from'../components/Cardlist';
import SearchBox from '../components/SearchBox';
import './App.css';
import  Scroll from '../components/Scroll';


const App = () => {

const [robots, setRobots] = useState([]);
const [searchfield, setSearchfield] =useState('');

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {setRobots(users)})
  },[]);
   

  
const SearchChange = (event) => {
setSearchfield(event.target.value);
}
        
const SearchedRobots= robots.filter(robot =>{
return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    	})

    	 return !robots.length ?

    		 <h1>Loading</h1> :
   
		 (
	           <div className='tc'> 
	            <h1 className= 'f1'>RoboFriends</h1>
	            <SearchBox onSearch= {SearchChange} />
	            <Scroll>
		           <Cardlist robots = {SearchedRobots} />
		        </Scroll>
	           </div>
			);
    }
    
    


export default App;