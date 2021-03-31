import React from 'react';
//import { Admin, Resource} from 'react-admin';
//import restProvider from 'ra-data-simple-rest';

//import { useAuth0 } from '@auth0/auth0-react';

import LoginButton from './components/LoginButton';
//import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

// import PostList from './components/PostList';
// import PostCreate from './components/PostCreate';
// import PostEdit from './components/PostEdit';

//import UserList from './components/UserList';
//import UserCreate from './components/UserCreate';
//import UserEdit from './components/UserEdit';

function App() {
  	
  return (
	  <>
	  <img src="./logo.png" alt="Welcome"/>
	  <LoginButton />	  
	  <Profile />
	  </>
		// <Admin dataProvider={restProvider('http://localhost:3000')} >			
		// 	<Resource name="users" list={UserList} create={UserCreate} edit={UserEdit}/>
		// </Admin>
  );
}

export default App;
