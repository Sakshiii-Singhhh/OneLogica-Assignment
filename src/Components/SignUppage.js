import React from 'react'
import './SignUppage.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function SignUppage () {
	return (
		<div className='SignUppage_SignUppage'>
			<div className='Clippathgroup'>
				<div className='clipiPhone_14_Pro_Max_5'>
					<img className='Vector' src = {ImgAsset.SignUppage_Vector} />
				</div>
				<div className='iPhone14ProMax5'>
					<img className='Vector_1' src = {ImgAsset.SignUppage_Vector_1} />
					<div className='Group4'>
						<span className='SignUp'>Sign Up</span>
						<img className='Line1' src = {ImgAsset.SignUppage_Line1} />
					</div>
					<Link to='/undefined'>
						<span className='Name'>Name</span>
					</Link>
				</div>
			</div>
			<span className='Email'>Email</span>
			<img className='Line2' src = {ImgAsset.SignUppage_Line2} />
			<img className='Line3' src = {ImgAsset.SignUppage_Line3} />
			<img className='Line4' src = {ImgAsset.SignUppage_Line4} />
			<div className='Group1'>
				<Link to='/loginpage'>
					<img className='Rectangle1' src = {ImgAsset.SignUppage_Rectangle1} />
				</Link>
				<span className='SignUp_1'>Sign Up</span>
			</div>
			<img className='_6171704' src = {ImgAsset.Loginpage__6171704} />
		</div>
	)
}