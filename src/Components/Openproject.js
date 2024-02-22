import React from 'react'
import './Openproject.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Openproject () {
	return (
		<div className='Openproject_Openproject'>
			<div className='Clippathgroup'>
				<div className='clipiPhone_14_Pro_Max_4'>
					<img className='Vector' src = {ImgAsset.Openproject_Vector} />
				</div>
				<div className='iPhone14ProMax4'>
					<img className='Vector_1' src = {ImgAsset.Openproject_Vector_1} />
				</div>
			</div>
			<div className='Rectangle3'/>
			<div className='Rectangle18'/>
			<Link to='/homepage'>
				<div className='Group12'>
					<span className='Dashboard'>Dashboard</span>
					<div className='Group11'>
						<img className='Line5' src = {ImgAsset.Openproject_Line5} />
						<img className='Line6' src = {ImgAsset.Openproject_Line6} />
						<img className='Line7' src = {ImgAsset.Openproject_Line7} />
					</div>
				</div>
			</Link>
			<span className='AssignedTasks'>Assigned Tasks</span>
			<div className='Rectangle9'/>
			<span className='Feb20Feb23'>Feb 20 - Feb 23</span>
			<img className='calendariconfreevector1' src = {ImgAsset.Openproject_calendariconfreevector1} />
			<img className='_634571' src = {ImgAsset.Pendingpage__634574} />
			<div className='Group7'>
				<div className='Ellipse2'/>
				<span className='_'>+</span>
			</div>
			<span className='Invite'>Invite</span>
			<div className='Frame1'>
				<div className='design'>
					<div className='Rectangle10'/>
					<span className='Design'>Design </span>
				</div>
				<div className='frontend'>
					<div className='Rectangle14'/>
					<span className='Frontend'>Frontend</span>
				</div>
			</div>
			<span className='ProjectName'>Project Name</span>
			<span className='TypeofProject'>Type of Project</span>
			<div className='projectname'>
				<div className='Rectangle9_1'/>
				<span className='OnelogicaAssignment'>Onelogica Assignment</span>
			</div>
			<div className='Clientname'>
				<div className='Rectangle9_2'/>
				<span className='Onelogica'>Onelogica</span>
			</div>
			<span className='Deadline'>Deadline</span>
			<Link to='/messagepage'>
				<div className='Chat'>
					<div className='Rectangle15'/>
					<div className='messagelogo'>
						<img className='iconofblankmessagedialogueboxfreevector1' src = {ImgAsset.progresspage_iconofblankmessagedialogueboxfreevector1} />
						<img className='Line9' src = {ImgAsset.Openproject_Line9} />
					</div>
					<span className='Chat_1'>Chat</span>
				</div>
			</Link>
			<div className='navigation'>
				<Link to='/homepage'>
					<div className='project'>
						<span className='Projects'>Projects</span>
						<div className='Rectangle4'/>
					</div>
				</Link>
				<div className='assigned'>
					<span className='Assigned'>Assigned</span>
					<Link to='/assignedpage'>
						<div className='Rectangle5'/>
					</Link>
				</div>
				<Link to='/completedpage'>
					<div className='completed'>
						<span className='Completed'>Completed</span>
						<div className='Rectangle6'/>
					</div>
				</Link>
				<Link to='/pendingpage'>
					<div className='pending0'>
						<span className='Pending'>Pending</span>
						<div className='Rectangle7'/>
					</div>
				</Link>
			</div>
			<span className='Description'>Description</span>
			<span className='ClientName'>Client Name</span>
			<div className='Rectangle16'/>
			<span className='DesignUIofalightweightprojectmanagementtoolforsmallprojectsEnabletaskcreationassignmentandtrackingToolsReactFigmaInvisionAdobeXDWebflowasperchoice'>Design UI of a lightweight project management tool for small projects. Enable task creation, assignment, and tracking.<br/>Tools: React, Figma. Invision, Adobe XD, Webflow as per choice</span>
			<Link to='/assignedtaskpage'>
				<div className='Group10'>
					<img className='_634572' src = {ImgAsset.Pendingpage__634574} />
				</div>
			</Link>
		</div>
	)
}