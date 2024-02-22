import React from 'react'
import './Assignedpage.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Assignedpage () {
	return (
		<div className='Assignedpage_Assignedpage'>
			<div className='Clippathgroup'>
				<div className='clipiPhone_14_Pro_Max_4'>
					<img className='Vector' src = {ImgAsset.Assignedpage_Vector} />
				</div>
				<div className='iPhone14ProMax4'>
					<img className='Vector_1' src = {ImgAsset.Assignedpage_Vector_1} />
				</div>
			</div>
			<div className='Rectangle3'/>
			<div className='Frame3'>
				<div className='task1'>
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
					<span className='CoffeeShopWebsiteFeb10Feb302024'>Coffee Shop Website<br/>Feb 10 - Feb 30 2024</span>
					<img className='Line8' src = {ImgAsset.Assignedpage_Line8} />
					<span className='InProgress'>In Progress</span>
					<div className='messagelogo'>
						<img className='iconofblankmessagedialogueboxfreevector1' src = {ImgAsset.progresspage_iconofblankmessagedialogueboxfreevector1} />
						<img className='Line9' src = {ImgAsset.Assignedpage_Line9} />
					</div>
					<div className='progressbar'>
						<img className='Ellipse3' src = {ImgAsset.Assignedpage_Ellipse3} />
						<span className='_70'>70%</span>
					</div>
				</div>
				<Link to='/openproject'>
					<div className='task4'>
						<div className='Rectangle17_1'/>
						<Link to='/assignedtaskpage'>
							<div className='clients_1'>
								<img className='_634574_2' src = {ImgAsset.Pendingpage__634574} />
								<img className='_634573_1' src = {ImgAsset.Pendingpage__634574} />
								<img className='_634572_1' src = {ImgAsset.Pendingpage__634574} />
								<img className='_634571_1' src = {ImgAsset.Pendingpage__634574} />
							</div>
						</Link>
						<span className='Client_1'>Client</span>
						<img className='_634574_3' src = {ImgAsset.Pendingpage__634574} />
						<span className='OnelogicaAssignmentFeb20Feb232024'>Onelogica Assignment <br/>Feb 20 - Feb 23 2024</span>
						<img className='Line8_1' src = {ImgAsset.Assignedpage_Line8_1} />
						<span className='InProgress_1'>In Progress</span>
						<div className='messagelogo_1'>
							<img className='iconofblankmessagedialogueboxfreevector1_1' src = {ImgAsset.progresspage_iconofblankmessagedialogueboxfreevector1} />
							<img className='Line9_1' src = {ImgAsset.Assignedpage_Line9_1} />
						</div>
						<div className='progressbar_1'>
							<img className='Ellipse3_1' src = {ImgAsset.Assignedpage_Ellipse3_1} />
							<span className='_50'>50%</span>
						</div>
					</div>
				</Link>
			</div>
			<div className='top'>
				<div className='clients_2'>
					<span className='Clients'>Clients</span>
					<div className='clients_3'>
						<img className='_634574_4' src = {ImgAsset.Pendingpage__634574} />
						<img className='_634573_2' src = {ImgAsset.Pendingpage__634574} />
						<img className='_634572_2' src = {ImgAsset.Pendingpage__634574} />
						<img className='_634571_2' src = {ImgAsset.Pendingpage__634574} />
					</div>
				</div>
				<span className='UpcomingDeadline'>Upcoming Deadline</span>
				<Link to='/openproject'>
					<div className='onelogica'>
						<span className='OnelogicaAssignment235923Feb2024'>Onelogica Assignment<br/>23:59, 23 Feb 2024 </span>
						<div className='Rectangle8'/>
					</div>
				</Link>
				<div className='dashboard'>
					<span className='Dashboard'>Dashboard</span>
					<div className='Group11'>
						<img className='Line5' src = {ImgAsset.Assignedpage_Line5} />
						<img className='Line6' src = {ImgAsset.Assignedpage_Line6} />
						<img className='Line7' src = {ImgAsset.Assignedpage_Line7} />
					</div>
				</div>
			</div>
			<div className='navigation'>
				<Link to='/homepage'>
					<div className='project'>
						<span className='Projects'>Projects</span>
						<div className='Rectangle4'/>
					</div>
				</Link>
				<div className='assigned'>
					<span className='Assigned'>Assigned</span>
					<div className='Rectangle5'/>
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
			<Link to='/addnewprojectpage'>
				<div className='AddTask'>
					<div className='Ellipse2'/>
					<span className='_'>+</span>
				</div>
			</Link>
		</div>
	)
}