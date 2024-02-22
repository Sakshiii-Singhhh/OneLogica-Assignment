import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
import AssignedTaskpage from '../Components/AssignedTaskpage';
import Messagepage from '../Components/Messagepage';
import Progresspage from '../Components/progresspage';
import Chatpage from '../Components/chatpage';
import AddNewProjectpage from '../Components/AddNewProjectpage';
import Pendingpage from '../Components/Pendingpage';
import Completedpage from '../Components/Completedpage';
import Assignedpage from '../Components/Assignedpage';
import Openproject from '../Components/Openproject';
import Homepage from '../Components/Homepage';
import Loginpage from '../Components/Loginpage';
import SignUppage from '../Components/SignUppage';
import Registerpage from '../Components/Registerpage';
import Animate2 from '../Components/animate2';
import Animate1 from '../Components/animate1';
import Startingpage from '../Components/Startingpage';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><HomePage /></Route>
				<Route exact path="/assignedtaskpage"><AssignedTaskpage /></Route>
				<Route exact path="/messagepage"><Messagepage /></Route>
				<Route exact path="/progresspage"><Progresspage /></Route>
				<Route exact path="/chatpage"><Chatpage /></Route>
				<Route exact path="/addnewprojectpage"><AddNewProjectpage /></Route>
				<Route exact path="/pendingpage"><Pendingpage /></Route>
				<Route exact path="/completedpage"><Completedpage /></Route>
				<Route exact path="/assignedpage"><Assignedpage /></Route>
				<Route exact path="/openproject"><Openproject /></Route>
				<Route exact path="/homepage"><Homepage /></Route>
				<Route exact path="/loginpage"><Loginpage /></Route>
				<Route exact path="/signuppage"><SignUppage /></Route>
				<Route exact path="/registerpage"><Registerpage /></Route>
				<Route exact path="/animate2"><Animate2 /></Route>
				<Route exact path="/animate1"><Animate1 /></Route>
				<Route exact path="/startingpage"><Startingpage /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;