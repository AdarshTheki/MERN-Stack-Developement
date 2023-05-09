import React from 'react'

export default function LogIn(props) {
  return (
    <div>
      <form className='container'>
        <h1>Create Account</h1>
        <p>Get started with your free account.</p>
        <button className='google'>Signup via google</button>
        <button className='facebook'>Signup via facebook</button>
        <p>or</p>
        <label htmlFor='email'>
          <input
            id='email'
            type='text'
            required
            placeholder='Email address'
            name='email'
          />
        </label>
        <label htmlFor='password'>
          <input
            id='password'
            type='text'
            required
            placeholder='Create password'
            name='password'
          />
        </label>
        <label htmlFor='newPassword'>
          <input
            id='newPassword'
            type='text'
            required
            placeholder='Repeat password'
            name='repeatPassword'
          />
        </label>
        <button type="submit" className='create-account' >Create Account</button>
        <p>
          {/* Login, Status, Redirect incomplete */}
          You have an Account? <a href='/' onClick={props.login}>{props.status ? "Logout":"logIn"}</a>
        </p>  
      </form>
    </div>
  )
}
