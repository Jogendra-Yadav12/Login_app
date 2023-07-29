import React from 'react'
import { Link } from 'react-router-dom'
import IM from '../assets/profile.png'
import style from '../styles/Username.module.css'
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import { usernameValidate } from '../Helpers/validate'

export default function Username() {

  const formik = useFormik({
    initialValues:{
      username:''
    },
    validate : usernameValidate,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit : async values =>{
      console.log(values)
  }
})

  return (
    <div>
      <div className='container mx-auto'>
      <Toaster position='top-center' reverseOrder={false}></Toaster>
        <div className='flex justify-center items-center h-screen'>
          <div className={style.glass}>
            <div className='title flex flex-col items-center'>
              <h4 className='text-5xl font-bold'>Hello Again!</h4>
              <span className='py-4 text-xl w-2/3 text-center text-gray-5'>
                 Explore more by connectiong with us
              </span>
            </div>
            <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className='profile flex justify-center py-4'>
                <img src={IM} className={style.profile_img} alt='avatar'></img>
              </div>

              <div className='textbox flex flex-col items-center gap-6'>
                  <input {...formik.getFieldProps('username')} className={style.textbox} type='text' placeholder='enter username'/>
                  <button className={style.btn} type='submit'>Let's Go</button>
              </div>
              <div className='text-center py-3'>
                <span>Not a Member <Link className='text-red-500' to="/register">Register Now</Link></span>
              </div>

            </form> 

          </div>
        </div>
      </div>
    </div>
  )
}

