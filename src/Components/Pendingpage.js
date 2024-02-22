import React from 'react'
import './Pendingpage.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Pendingpage () {
	return (
		<div className='Pendingpage_Pendingpage'>
			<div className='Clippathgroup'>
				<div className='clipiPhone_14_Pro_Max_4'>
					<img className='Vector' src = {ImgAsset.Pendingpage_Vector} />
				</div>
				<div className='iPhone14ProMax4'>
					<img className='Vector_1' src = {ImgAsset.Pendingpage_Vector_1} />
				</div>
			</div>
			<div className='Rectangle3'/>
			<div className='Frame2'>
				<div className='task3'>
					<div className='Rectangle17'/>
					<Link to='/assignedtaskpage'>
						<div className='clients'>
							<img className='_634574' src = {ImgAsset.Pendingpage__634574} />
							<img className='_634573' src = {ImgAsset.Pendingpage__634574} />
							<img className='_634572' src = {ImgAsset.Pendingpage__634574} />
							<img className='_634571' src = {ImgAsset.Pendingpage__634574} />
						</div>
					</Link>
					<span className='Client'>Client</span>
					<img className='_634574_1' src = {ImgAsset.Pendingpage__634574} />
					<img className='Line8' src = {ImgAsset.Pendingpage_Line8} />
					<div className='progressbar'>
						<img className='Ellipse3' src = {ImgAsset.Pendingpage_Ellipse3} />
						<span className='_0'>0%</span>
					</div>
					<div className='messagelogo'>
						<img className='iconofblankmessagedialogueboxfreevector1' src = {ImgAsset.progresspage_iconofblankmessagedialogueboxfreevector1} />
						<img className='Line9' src = {ImgAsset.Pendingpage_Line9} />
					</div>
					<span className='Pending'>Pending</span>
					<span className='debugging'>Debugging<br/>Mar 1 - Mar 30 2024</span>
				</div>
			</div>
			<Link to='/homepage'>
				<div className='top'>
					<div className='clients_1'>
						<span className='Clients'>Clients</span>
						<div className='clients_2'>
							<img className='_634574_2' src = {ImgAsset.Pendingpage__634574} />
							<img className='_634573_1' src = {ImgAsset.Pendingpage__634574} />
							<img className='_634572_1' src = {ImgAsset.Pendingpage__634574} />
							<img className='_634571_1' src = {ImgAsset.Pendingpage__634574} />
						</div>
					</div>
					<span className='UpcomingDeadline'>Upcoming Deadline</span>
					<div className='onelogica'>
						<span className='OnelogicaAssignment235923Feb2024'>Onelogica Assignment<br/>23:59, 23 Feb 2024 </span>
						<Link to='/openproject'>
							<div className='Rectangle8'/>
						</Link>
					</div>
					<div className='dashboard'>
						<span className='Dashboard'>Dashboard</span>
						<div className='Group11'>
							<img className='Line5' src = {ImgAsset.Pendingpage_Line5} />
							<img className='Line6' src = {ImgAsset.Pendingpage_Line6} />
							<img className='Line7' src = {ImgAsset.Pendingpage_Line7} />
						</div>
					</div>
				</div>
			</Link>
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
				<div className='pending0'>
					<span className='Pending_1'>Pending</span>
					<div className='Rectangle7'/>
				</div>
			</div>
			<Link to='/addnewprojectpage'>
				<div className='AddTask'>
					<div className='Ellipse2'/>
					<span className='_'>+</span>
				</div>
			</Link>
		</div>
	)
}