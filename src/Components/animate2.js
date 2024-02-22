import React from 'react'
import './animate2.css'
import ImgAsset from '../public'
export default function Animate2 () {
	return (
		<div className='animate2_animate2'>
			<div className='Clippathgroup'>
				<div className='clipiPhone_14_Pro_Max_2'>
					<img className='Vector' src = {ImgAsset.animate2_Vector} />
				</div>
				<div className='iPhone14ProMax2'>
					<img className='Vector_1' src = {ImgAsset.animate2_Vector_1} />
					<div className='Component12'>
						<div className='Ellipse1'>
							<img className='Vector_2' src = {ImgAsset.animate2_Vector_2} />
							<img className='Vector_3' src = {ImgAsset.animate2_Vector_3} />
						</div>
					</div>
					<div className='Group5'>
						<div className='LetsPlanToday'>
							<span className='Lets'>Let's</span>
							<span className='PlanToday'>Plan Today!</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}