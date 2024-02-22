import React from 'react'
import './AddNewProjectpage.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function AddNewProjectpage () {
	return (
		<div className='AddNewProjectpage_AddNewProjectpage'>
			<div className='Clippathgroup'>
				<div className='clipiPhone_14_Pro_Max_4'>
					<img className='Vector' src = {ImgAsset.AddNewProjectpage_Vector} />
				</div>
				<div className='iPhone14ProMax4'>
					<img className='Vector_1' src = {ImgAsset.AddNewProjectpage_Vector_1} />
				</div>
			</div>
			<div className='Rectangle3'/>
			<Link to='/homepage'>
				<div className='Group12'>
					<span className='Dashboard'>Dashboard</span>
					<div className='Group11'>
						<img className='Line5' src = {ImgAsset.AddNewProjectpage_Line5} />
						<img className='Line6' src = {ImgAsset.AddNewProjectpage_Line6} />
						<img className='Line7' src = {ImgAsset.AddNewProjectpage_Line7} />
					</div>
				</div>
			</Link>
			<div className='AddTask'>
				<div className='Ellipse2'/>
			</div>
			<span className='Description'>Description</span>
			<span className='ClientName'>Client Name</span>
			<div className='Rectangle9'/>
			<span className='Jan14Jan30'>Jan 14 - Jan 30</span>
			<img className='calendariconfreevector1' src = {ImgAsset.Openproject_calendariconfreevector1} />
			<img className='_634571' src = {ImgAsset.Pendingpage__634574} />
			<div className='Group7'>
				<div className='Ellipse2_1'/>
				<span className='_'>+</span>
			</div>
			<span className='Invite'>Invite</span>
			<div className='Frame1'>
				<div className='design'>
					<div className='Rectangle10'/>
					<span className='Design'>Design </span>
				</div>
				<div className='development'>
					<div className='Rectangle11'/>
					<span className='Development'>Development</span>
				</div>
				<div className='business'>
					<div className='Rectangle12'/>
					<span className='Business'>Business</span>
				</div>
				<div className='testing'>
					<div className='Rectangle13'/>
					<span className='Testing'>Testing</span>
				</div>
				<div className='backend'>
					<div className='Rectangle14'/>
					<span className='Backend'>Backend</span>
				</div>
				<div className='frontend'>
					<div className='Rectangle14_1'/>
					<span className='Frontend'>Frontend</span>
				</div>
			</div>
			<span className='ProjectName'>Project Name</span>
			<span className='TypeofProject'>Type of Project</span>
			<div className='projectname'>
				<div className='Rectangle9_1'/>
				<span className='Enterprojectname'>Enter project name</span>
			</div>
			<div className='projectname_1'>
				<div className='Rectangle9_2'/>
				<span className='Enterclientsname'>Enter client’s name</span>
			</div>
			<span className='Deadline'>Deadline</span>
			<div className='save'>
				<Link to='/homepage'>
					<div className='Rectangle15'/>
				</Link>
				<span className='Save'>Save</span>
			</div>
			<div className='Rectangle16'/>
			<span className='DescriptionofProject'>Description of Project... </span>
			<div className='Group13'>
				<span className='AssignTasks'>Assign Tasks</span>
				<div className='Group10'>
					<img className='_634573' src = {ImgAsset.Pendingpage__634574} />
					<img className='_634572' src = {ImgAsset.Pendingpage__634574} />
					<img className='_634571_1' src = {ImgAsset.Pendingpage__634574} />
				</div>
				<div className='Group10_1'>
					<img className='_634574' src = {ImgAsset.Pendingpage__634574} />
					<img className='_634573_1' src = {ImgAsset.Pendingpage__634574} />
					<img className='_634572_1' src = {ImgAsset.Pendingpage__634574} />
					<img className='_634571_2' src = {ImgAsset.Pendingpage__634574} />
				</div>
			</div>
			<div className='navigation'>
				<Link to='/homepage'>
					<div className='project'>
						<span className='Projects'>Projects</span>
						<div className='Rectangle4'/>
					</div>
				</Link>
				<Link to='/assignedpage'>
					<div className='assigned'>
						<span className='Assigned'>Assigned</span>
						<div className='Rectangle5'/>
					</div>
				</Link>
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
		</div>
	)
}