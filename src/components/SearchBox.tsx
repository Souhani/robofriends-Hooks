import React, { ChangeEvent } from 'react';

type searchBoxProps = {
	onSearch : (event: ChangeEvent<HTMLInputElement>) => void,
}

const SearchBox = ({onSearch}: searchBoxProps) => {

	return(

		<div className = "pa2 ">
	      <input className = 'pa3 ba b--green bg-lightest-blue'
	      type ='search' 
	      placeholder = 'search robots'
          onChange = {onSearch}
	      />
	    </div>
		)
};
 
 export  default SearchBox;
