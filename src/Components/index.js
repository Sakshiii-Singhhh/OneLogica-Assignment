import React from 'react'
import {Link} from 'react-router-dom'
export default function HomePage () {
    return (
	<div>
		<Link to='/AssignedTaskpage'><div>AssignedTaskpage</div></Link>
		<Link to='/Messagepage'><div>Messagepage</div></Link>
		<Link to='/progresspage'><div>progresspage</div></Link>
		<Link to='/chatpage'><div>chatpage</div></Link>
		<Link to='/AddNewProjectpage'><div>AddNewProjectpage</div></Link>
		<Link to='/Pendingpage'><div>Pendingpage</div></Link>
		<Link to='/Completedpage'><div>Completedpage</div></Link>
		<Link to='/Assignedpage'><div>Assignedpage</div></Link>
		<Link to='/Openproject'><div>Openproject</div></Link>
		<Link to='/Homepage'><div>Homepage</div></Link>
		<Link to='/Loginpage'><div>Loginpage</div></Link>
		<Link to='/SignUppage'><div>SignUppage</div></Link>
		<Link to='/Registerpage'><div>Registerpage</div></Link>
		<Link to='/animate2'><div>animate2</div></Link>
		<Link to='/animate1'><div>animate1</div></Link>
		<Link to='/Startingpage'><div>Startingpage</div></Link>
	</div>
	)
}