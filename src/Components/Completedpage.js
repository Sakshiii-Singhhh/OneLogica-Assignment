import React from 'react'
import './Completedpage.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Completedpage () {
	return (
		<div className='Completedpage_Completedpage'>
			<div className='Clippathgroup'>
				<div className='clipiPhone_14_Pro_Max_4'>
					<img className='Vector' src = {ImgAsset.Completedpage_Vector} />
				</div>
				<div className='iPhone14ProMax4'>
					<img className='Vector_1' src = {ImgAsset.Completedpage_Vector_1} />
				</div>
			</div>
			<div className='Rectangle3'/>
			<div className='Frame2'>
				<div className='task2'>
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
					<span className='MobileBankingAppJan15Feb132024'>Mobile Banking App<br/>Jan 15 - Feb 13 2024</span>
					<img className='Line8' src = {ImgAsset.Completedpage_Line8} />
					<span className='Completed'>Completed</span>
					<div className='messagelogo'>
						<img className='iconofblankmessagedialogueboxfreevector1' src = {ImgAsset.progresspage_iconofblankmessagedialogueboxfreevector1} />
						<img className='Line9' src = {ImgAsset.Completedpage_Line9} />
					</div>
					<div className='progressbar'>
						<img className='Ellipse3' src = {ImgAsset.Completedpage_Ellipse3} />
						<span className='_100'>100%</span>
					</div>
				</div>
			</div>
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
				<Link to='/openproject'>
					<div className='onelogica'>
						<span className='OnelogicaAssignment235923Feb2024'>Onelogica Assignment<br/>23:59, 23 Feb 2024 </span>
						<div className='Rectangle8'/>
					</div>
				</Link>
				<Link to='/homepage'>
					<div className='dashboard'>
						<span className='Dashboard'>Dashboard</span>
						<div className='Group11'>
							<img className='Line5' src = {ImgAsset.Completedpage_Line5} />
							<img className='Line6' src = {ImgAsset.Completedpage_Line6} />
							<img className='Line7' src = {ImgAsset.Completedpage_Line7} />
						</div>
					</div>
				</Link>
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
				<div className='completed'>
					<span className='Completed_1'>Completed</span>
					<div className='Rectangle6'/>
				</div>
				<Link to='/pendingpage'>
					<div className='pending0'>
						<span className='Pending'>Pending</span>
						<div className='Rectangle7'/>
					</div>
				</Link>
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