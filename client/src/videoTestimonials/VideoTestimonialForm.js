import React, {useState} from 'react'

export default function VideoTestimonial() {
	const [errors,setErrors] = useState({})
	const [inputs, setInputs] = useState({
		subject:'',
		comment:'',
		cms_id:'',
		privacy:false,
		valid:{}

	})
	const handleInput = (e) => {
		const { name, value } = e.target
		name=='privacy'?setInputs({...inputs, privacy:!value}):null
		setInputs({
			...inputs,
			[name]:value
		})
	} 
	const validation=()=>{
		let err={}
		let val={}
		if(inputs.privacy == false){
			err['privacy'] = 'Please read and accept the privacy agreement to continue. '
		}else {
			err['privacy'] = ''
		}
		for(const property in inputs){
			if(!`${inputs[property]}`.trim()){
				err[`${property}`] = `${property} can not be left blank!`
			}else{
				err[`${property}`] = ''
				val[`${property}`] = true
			}
		}
		setErrors(err)
		setInputs({...inputs, valid:{val}})
		

	}
	const resetForm = () => {
		setInputs({
			subject:'',
			comment:'',
			cms_id:'',
			privacy:false
		})
		setErrors({})
	}
	const submit = async() => {
		const body = {inputs}

		let url = 'api/v1/videoTestimonials'
		const response = await fetch(url, {
			method:POST,
			body:JSON.stringify(inputs),
			headers: {'Content-type': 'application/json; charset=UTF-8 '}
		})
		
	}
	return(

			<div className="card">
				<h2 className="card-title">add Video Testimonial </h2>
				<form onSubmit={submit}>
					<label>Subject</label>
					<input type="text" value={inputs.subject} name="subject" onChange={handleInput} required />
					{errors.subject?<p>{errors.subject}</p>:null}
					<label> Comment </label>
					<textarea type="text" value={inputs.comment} name="comment" onChange={handleInput} required />
					{errors.comment?<p>{errors.comment}</p>:null}
					<label>Video CMS ID </label>
					<input type="text" value={inputs.cms_id} name="cms_id" onChange={handleInput} required/>
					<input type="checkbox" value={inputs.privacy} name="privacy_statement_accepted" onChange={handleInput} required /> Privacy Statement Acknowledgement
					<button type="submit" className="add-btn" onClick={(e)=>{e.preventDefault();validation();console.log(inputs)}}>Add</button>
					<button type="button" className="reset-btn" onClick={resetForm} >Reset</button>
				</form>
			</div>

	)
}