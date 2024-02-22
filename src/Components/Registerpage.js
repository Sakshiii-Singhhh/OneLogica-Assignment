import React from 'react'
import './Registerpage.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Registerpage () {
	return (
		<div className='Registerpage_Registerpage'>
			<div className='Clippathgroup'>
				<div className='clipiPhone_14_Pro_Max_3'>
					<img className='Vector' src = {ImgAsset.Registerpage_Vector} />
				</div>
				<div className='iPhone14ProMax3'>
					<img className='Vector_1' src = {ImgAsset.Registerpage_Vector_1} />
					<div className='Group1'>
						<Link to='/signuppage'>
							<img className='Rectangle1' src = {ImgAsset.Registerpage_Rectangle1} />
						</Link>
						<span className='SignUp'>Sign Up</span>
					</div>
					<Link to='/loginpage'>
						<div className='Group2'>
							<img className='Rectangle2' src = {ImgAsset.Registerpage_Rectangle2} />
							<span className='Login'>Login</span>
						</div>
					</Link>
					<img className='_6171704' src = {ImgAsset.Loginpage__6171704} />
					<div className='OntheGoSuccessUnleashTeamworkAnywhere'>
						<span className='OntheGoSuccessUnleash'>On-the-Go Success: Unleash </span>
						<span className='TeamworkAnywhere'>Teamwork Anywhere.</span>
					</div>
					<div className='Group3'>
						<img className='Screenshot20240220211109' src = {ImgAsset.Registerpage_Screenshot20240220211109} />
						<span className='TaskAssemble'>TaskAssemble</span>
					</div>
				</div>
			</div>
			<img className='Screenshot202402202111091' src = {ImgAsset.Registerpage_Screenshot202402202111091} />
		</div>
	)
}