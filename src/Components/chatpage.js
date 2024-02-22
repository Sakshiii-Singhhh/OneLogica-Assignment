import React from 'react'
import './chatpage.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Chatpage () {
	return (
		<div className='chatpage_chatpage'>
			<div className='Clippathgroup'>
				<div className='clipiPhone_14_Pro_Max_4'>
					<img className='Vector' src = {ImgAsset.chatpage_Vector} />
				</div>
				<div className='iPhone14ProMax4'>
					<img className='Vector_1' src = {ImgAsset.chatpage_Vector_1} />
				</div>
			</div>
			<div className='Rectangle3'/>
			<Link to='/homepage'>
				<div className='Group12'>
					<span className='Dashboard'>Dashboard</span>
					<div className='Group11'>
						<img className='Line5' src = {ImgAsset.chatpage_Line5} />
						<img className='Line6' src = {ImgAsset.chatpage_Line6} />
						<img className='Line7' src = {ImgAsset.chatpage_Line7} />
					</div>
				</div>
			</Link>
			<span className='Messages'>Messages</span>
			<div className='Rectangle19'/>
			<img className='Rectangle26' src = {ImgAsset.chatpage_Rectangle26} />
			<img className='Rectangle25' src = {ImgAsset.chatpage_Rectangle25} />
			<img className='_634575' src = {ImgAsset.Pendingpage__634574} />
			<img className='Rectangle23' src = {ImgAsset.chatpage_Rectangle23} />
			<img className='Rectangle24' src = {ImgAsset.chatpage_Rectangle24} />
			<div className='Rectangle27'/>
			<span className='message'>message</span>
			<span className='Send'>Send</span>
		</div>
	)
}