import React from 'react'
import { Link } from 'react-router-dom'
import IM from '../assets/profile.png'
import style from '../styles/Username.module.css'
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import { passwordValidate } from '../Helpers/validate'

export default function Password() {

  const formik = useFormik({
    initialValues:{
      password:''
    },
    validate : passwordValidate,
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
                  <input {...formik.getFieldProps('password')} className={style.textbox} type='password' placeholder='enter your password' />
                  <button className={style.btn} type='submit'>Sign In</button>
              </div>
              <div className='text-center py-3'>
                <span>Forgot Password <Link className='text-red-500' to="/recovery">Recover Now</Link></span>
              </div>

            </form> 

          </div>
        </div>
      </div>
    </div>
  )
}


