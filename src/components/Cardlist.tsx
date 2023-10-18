import Card from './Card';
import { Robot } from '../containers/App';

type CardlistProps = {
	robots: Robot[]
}
const Cardlist = ({robots}:CardlistProps ) =>{
  return(
	<div>
		{
			robots.map((robot,i) => {
						 return (
						 	<Card 
                            key = {i}
						 	id = {robot.id} 
						 	name = {robot.name} 
						 	email = {robot.email}
						 	/>  )
						           	 }
						)
		}	                   
	</div>
	)
}

export default Cardlist;



