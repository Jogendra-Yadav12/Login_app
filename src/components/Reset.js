import React from 'react'
import style from '../styles/Username.module.css'
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import { resetValidate } from '../Helpers/validate'

export default function Reset() {

  const formik = useFormik({
    initialValues:{
      password:'',
      confirm_pass:''
    },
    validate : resetValidate,
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
              <h4 className='text-5xl font-bold'>Reset</h4>
              <span className='py-4 text-xl w-2/3 text-center text-gray-5'>
                 Enter new password
              </span>
            </div>
            <form className='py-2' onSubmit={formik.handleSubmit}>

              <div className='textbox flex flex-col items-center gap-4'>
                  <input {...formik.getFieldProps('password')} className={style.textbox} type='password' placeholder='new password'/>
                  <input {...formik.getFieldProps('confirm_pass')} className={style.textbox} type='password' placeholder='confirm password'/>
                  <button className={style.btn} type='submit'>Reset</button>
              </div>

            </form> 

          </div>
        </div>
      </div>
    </div>
  )
}



