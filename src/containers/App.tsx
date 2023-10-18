import React, { useState, useEffect, ChangeEvent} from 'react';
import Cardlist from'../components/Cardlist';
import SearchBox from '../components/SearchBox';
import './App.css';
import  Scroll from '../components/Scroll';
import { getData } from '../utils/data';

export type Robot = {
	id: string,
	name: string,
	email: string,
}
const App = () => {

const [robots, setRobots] = useState<Robot[]>([]);
const [searchfield, setSearchfield] =useState('');

useEffect(() => {
	const fetchUsers = async () => {
        const users = await getData<Robot[]>('https://jsonplaceholder.typicode.com/users');
		setRobots(users)
	}
	fetchUsers();
  },[]);
   

  
const SearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
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