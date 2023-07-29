import React from 'react'
import style from '../styles/Username.module.css'
import {Toaster} from 'react-hot-toast'

export default function Recovery() {

  return (
    <div>
      <div className='container mx-auto'>

      <Toaster position='top-center' reverseOrder={false}></Toaster>

        <div className='flex justify-center items-center h-screen'>
          <div className={style.glass}>
            <div className='title flex flex-col items-center'>
              <h4 className='text-5xl font-bold'>Recovery</h4>
              <span className='py-4 text-xl w-2/3 text-center text-gray-5'>
                 Enter OTP to recover password.
              </span>
            </div>
            <form className='pt-20'>

              <div className='textbox flex flex-col items-center gap-6'>
                  <span className='py-4 text-sm text-left text-gray-500'>
                    Enter 6 digit OTP sent to your email address.
                  </span>
                  <input className={style.textbox} type='password' placeholder='OTP' />
                  <button className={style.btn} type='submit'>Recover</button>
              </div>
              <div className='text-center py-3'>
                <span>Can't get OTP ? <button className='text-red-500'>Resend</button></span>
              </div>

            </form> 

          </div>
        </div>
      </div>
    </div>
  )
}