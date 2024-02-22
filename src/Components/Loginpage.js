import React from 'react'
import './Loginpage.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Loginpage () {
	return (
		<div className='Loginpage_Loginpage'>
			<div className='Clippathgroup'>
				<div className='clipiPhone_14_Pro_Max_4'>
					<img className='Vector' src = {ImgAsset.Loginpage_Vector} />
				</div>
				<div className='iPhone14ProMax4'>
					<img className='Vector_1' src = {ImgAsset.Loginpage_Vector_1} />
					<div className='Group4'>
						<span className='Login'>LogIn </span>
						<img className='Line1' src = {ImgAsset.Loginpage_Line1} />
					</div>
				</div>
			</div>
			<img className='_6171704' src = {ImgAsset.Loginpage__6171704} />
			<Link to='/homepage'>
				<div className='Group2'>
					<img className='Rectangle2' src = {ImgAsset.Loginpage_Rectangle2} />
					<span className='Login_1'>Login</span>
				</div>
			</Link>
			<span className='Email'>Email</span>
			<img className='Line3' src = {ImgAsset.Loginpage_Line3} />
			<img className='Line4' src = {ImgAsset.Loginpage_Line4} />
		</div>
	)
}