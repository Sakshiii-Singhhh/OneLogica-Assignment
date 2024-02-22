import React from 'react'
import './progresspage.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Progresspage () {
	return (
		<div className='progresspage_progresspage'>
			<div className='Clippathgroup'>
				<div className='clipiPhone_14_Pro_Max_4'>
					<img className='Vector' src = {ImgAsset.progresspage_Vector} />
				</div>
				<div className='iPhone14ProMax4'>
					<img className='Vector_1' src = {ImgAsset.progresspage_Vector_1} />
				</div>
			</div>
			<div className='Rectangle3'/>
			<Link to='/homepage'>
				<div className='Group12'>
					<span className='Dashboard'>Dashboard</span>
					<div className='Group11'>
						<img className='Line5' src = {ImgAsset.progresspage_Line5} />
						<img className='Line6' src = {ImgAsset.progresspage_Line6} />
						<img className='Line7' src = {ImgAsset.progresspage_Line7} />
					</div>
				</div>
			</Link>
			<span className='TasksAssigned'> Tasks Assigned</span>
			<div className='Rectangle19'/>
			<img className='_634575' src = {ImgAsset.Pendingpage__634574} />
			<Link to='/chatpage'>
				<div className='Chat'>
					<div className='Rectangle15'/>
					<div className='messagelogo'>
						<img className='iconofblankmessagedialogueboxfreevector1' src = {ImgAsset.progresspage_iconofblankmessagedialogueboxfreevector1} />
						<img className='Line9' src = {ImgAsset.progresspage_Line9} />
					</div>
					<span className='Chat_1'>Chat</span>
				</div>
			</Link>
		</div>
	)
}