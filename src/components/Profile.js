import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import IM from '../assets/profile.png'
import style from '../styles/Username.module.css'
import extend from'../styles/profile.module.css'
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import { profileValidation } from '../Helpers/validate'
import convertToBase64 from '../Helpers/Convert'

export default function Profile() {

  const [file,setFile] = useState()

  const formik = useFormik({
    initialValues:{
      firstname:'',
      lastname:'',
      mobile:'',
      email:'',
      address:''
    },
    validate : profileValidation,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit : async values =>{
      values = await Object.assign(values,{profile:file || ''})
      console.log(values)
  }
})

/** formik doesn't support file upload so we need to create this handle */
const onUpload = async e => {
  const base64 = await convertToBase64(e.target.files[0]);
  setFile(base64);
}

  return (
    <div>
      <div className='container mx-auto'>

      <Toaster position='top-center' reverseOrder={false}></Toaster>

        <div className='flex justify-center items-center h-screen'>
          <div className={`${style.glass} ${extend.glass}`} style={{paddingTop:"1.5em"}}>
            <div className='title flex flex-col items-center'>
              <h4 className='text-5xl font-bold'>Profile</h4>
              <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              You can update the details ?
              </span>
            </div>

            <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className='profile flex justify-center'>
                <label htmlFor='profile'>
                <img src={file || IM} className={`${style.profile_img} ${extend.profile_img}`} alt='avatar' />
                </label>
                <input onChange={onUpload} type='file' id='profile' name='profile' />
              </div>

              <div className='textbox flex flex-col items-center gap-2'>
                <div className='name flex w-/4 gap-5'>
                  <input {...formik.getFieldProps('firstname')} className={`${style.textbox} ${extend.textbox}`} type='text' placeholder='First Name' />
                  <input {...formik.getFieldProps('lastname')} className={`${style.textbox} ${extend.textbox}`} type='text' placeholder='Last Name' />
                </div>
                <div className='name flex w-/4 gap-5'>
                  <input {...formik.getFieldProps('mobile')} className={`${style.textbox} ${extend.textbox}`} type='text' placeholder='Mobile No.' />
                  <input {...formik.getFieldProps('email')} className={`${style.textbox} ${extend.textbox}`} type='email' placeholder='Email' />
                </div>
                
                <input {...formik.getFieldProps('address')} className={`${style.textbox} ${extend.textbox}`} type='text' placeholder='Address' />
                <button className={style.btn} type='submit'>Update</button>
              </div>

              <div className='text-center'>
                <span>come back later?<Link className='text-red-500' to="/">Log out</Link></span>
              </div>
            </form> 
          </div>
        </div>
      </div>
    </div>
  )
}


