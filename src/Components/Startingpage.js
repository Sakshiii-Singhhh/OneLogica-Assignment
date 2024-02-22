import React from 'react'
import './Startingpage.css'
import ImgAsset from '../public'
export default function Startingpage () {
	return (
		<div className='Startingpage_Startingpage'>
			<div className='Clippathgroup'>
				<div className='clipiPhone_14_Pro_Max_1'>
					<img className='Vector' src = {ImgAsset.Startingpage_Vector} />
				</div>
				<div className='iPhone14ProMax1'>
					<img className='Vector_1' src = {ImgAsset.Startingpage_Vector_1} />
					<span className='TaskAssemble'>TaskAssemble</span>
					<div className='Component12'>
						<div className='Ellipse1'>
							<img className='Vector_2' src = {ImgAsset.Startingpage_Vector_2} />
							<img className='Vector_3' src = {ImgAsset.Startingpage_Vector_3} />
						</div>
					</div>
					<div className='Component11'>
						<div className='Ellipse1_1'>
							<img className='Vector_4' src = {ImgAsset.Startingpage_Vector_4} />
							<img className='Vector_5' src = {ImgAsset.Startingpage_Vector_5} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}