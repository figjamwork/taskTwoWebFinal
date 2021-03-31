import React from 'react';
//import { useState, useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Admin, Resource} from 'react-admin';
import restProvider from 'ra-data-simple-rest';
//import axios from 'axios';

import UserList from './UserList';
import UserCreate from './UserCreate';
import UserEdit from './UserEdit';
import LogoutButton from './LogoutButton';

const Profile = () => {
	const {user, isAuthenticated} = useAuth0();
	//const [users, setUsers] = useState([]);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 	  const result = await axios(
	// 		'https://jsonplaceholder.typicode.com/users',
	// 	  );
		
	// // setUsers(result.data);
	// 	};
	 
	// 	fetchData();
	//   }, []);	
	
	return (
		isAuthenticated && (
		<div>
		<LogoutButton />	
		<p>Welcome to the User Resource App Web Version: {user.name}</p>

		 <Admin dataProvider={restProvider('http://localhost:3000')} >			
		 	<Resource name="users" list={UserList} create={UserCreate} edit={UserEdit}/>
		 </Admin>
		 
		</div>
		)
	)
}

export default Profile;