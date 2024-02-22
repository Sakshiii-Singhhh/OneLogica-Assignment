import React from 'react'
import './Messagepage.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Messagepage () {
	return (
		<div className='Messagepage_Messagepage'>
			<div className='Clippathgroup'>
				<div className='clipiPhone_14_Pro_Max_4'>
					<img className='Vector' src = {ImgAsset.Messagepage_Vector} />
				</div>
				<div className='iPhone14ProMax4'>
					<img className='Vector_1' src = {ImgAsset.Messagepage_Vector_1} />
				</div>
			</div>
			<div className='Rectangle3'/>
			<Link to='/homepage'>
				<div className='Group12'>
					<span className='Dashboard'>Dashboard</span>
					<div className='Group11'>
						<img className='Line5' src = {ImgAsset.Messagepage_Line5} />
						<img className='Line6' src = {ImgAsset.Messagepage_Line6} />
						<img className='Line7' src = {ImgAsset.Messagepage_Line7} />
					</div>
				</div>
			</Link>
			<span className='Messages'>Messages</span>
			<Link to='/progresspage'>
				<img className='_634574' src = {ImgAsset.Pendingpage__634574} />
			</Link>
			<img className='_634573' src = {ImgAsset.Pendingpage__634574} />
			<img className='_634572' src = {ImgAsset.Pendingpage__634574} />
			<img className='_1' src = {ImgAsset.Pendingpage__634574} />
			<Link to='/chatpage'>
				<div className='Rectangle19'/>
			</Link>
			<img className='_634575' src = {ImgAsset.Pendingpage__634574} />
			<div className='Rectangle20'/>
			<div className='Rectangle21'/>
			<div className='Rectangle22'/>
			<img className='_634576' src = {ImgAsset.Pendingpage__634574} />
			<img className='_634577' src = {ImgAsset.Pendingpage__634574} />
			<img className='_634578' src = {ImgAsset.Pendingpage__634574} />
		</div>
	)
}