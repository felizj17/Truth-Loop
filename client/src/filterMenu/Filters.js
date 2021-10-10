import React, {useState, useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {States,Categories} from './selections'
import PropTypes from 'prop-types'
import { updateAppSettings } from '../store/appSettings.duck'

export default function Filters(){
	const dispatch = useDispatch()
	const [locations, setLocations] = useState([])
	const [categories, setCategories] = useState([])
	const { filters } = useSelector(({appSettings})=> appSettings)
	useEffect(()=>{
		setLocations(filters.location)
		setCategories(filters.category)
	},[])
	const handleFilters = (e) => {
		if(e.target.name === 'states'){
			setLocations([...locations, e.target.value])
		}else{
			setCategories([...categories, e.target.value])
		}
	}
	const applyFilters=(locations, categories)=>{
		let payload = {
			filters:{
				location:locations,
				category:categories
			}
		}
		dispatch(updateAppSettings(payload))
	}
	return(
		<div>
			<AppliedFilters states={locations} categories={categories} />
			<label>State: </label>
			<select
			className="select"
			name='states'
			onChange={(e)=>{handleFilters(e)}}
			>
			<option value=''>---Please Select One---</option>
			{
				States.map((state,index)=>(
					<option key={`state-option-${index}`} value={state}>{state}</option>
				))
			}
			</select>
			<select
			className="select"
			name='categories'
			onChange={(e)=>{handleFilters(e)}}
			>
			<option value=''>---Please Select One---</option>
			{
				Categories.map((category,index)=>(
					<option key={`category-option-${index}`} value={category}> {category} </option>
				))
			}
			</select>
			<button type='button' onClick={()=>applyFilters(locations,categories)}>apply</button>
		</div>
	)
}

const AppliedFilters = (props) => {
	return(
		<div className="applied-filters">
			<div className="applied-filter">
				{props.states.map((state,index)=>(
					<p key={`state-filter-${index}`}>{state}</p>
				))}
			</div>
			<div className="applied-filter">
				{props.categories.map((cat,index)=>(
					<p key={`category-filter-${index}`}>{cat}</p>
				))}
			</div>
		</div>
	)
}
AppliedFilters.propTypes = {
	states:PropTypes.array,
	categories:PropTypes.array
}