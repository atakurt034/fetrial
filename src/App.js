import React from 'react'
import './App.scss'

import { e } from './lib/error_index'

const App = () => {
  const [data, setData] = React.useState({})
  const { name, email, user_type, password } = data

  const [errors, setErrors] = React.useState([])
  const [active, setActive] = React.useState({})

  const changeHandler = (event) => {
    const { name, value } = event.target
    setData({ ...data, [name]: value })
    e.recheck(event, active, setActive)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    e.error_check(data, setErrors, active, setActive)
  }

  React.useEffect(() => {
    if (!Object.values(active).includes(true)) {
      setErrors([])
    }
  }, [active])

  return (
    <main>
      <section className='left'>
        <div className='steps'>
          step 1 of 3
          <ul>
            <li className='active' />
            <li />
            <li />
          </ul>
        </div>

        <div className='body'>
          <form onSubmit={submitHandler}>
            <h2>Let's set up your account</h2>
            <p>
              Already have an account? <span className='bold'>Sign in</span>
            </p>
            <div className='input-container'>
              <input
                required
                className={e.class_error(name, 'name', errors, active)}
                type='text'
                id='name'
                name='name'
                onChange={changeHandler}
              />
              <label
                className={e.label_error(errors, 'name', active)}
                htmlFor='name'
              >
                Your name
              </label>
              {e.err_msg(errors, 'name', active)}
            </div>

            <div className='input-container '>
              <input
                required
                className={e.class_error(email, 'email', errors, active)}
                type='email'
                name='email'
                onChange={changeHandler}
              />
              <label
                className={e.label_error(errors, 'email', active)}
                htmlFor='email'
              >
                Email address
              </label>
              {e.err_msg(errors, 'email', active)}
            </div>

            <div className='input-container select'>
              <select
                required
                className={
                  user_type && user_type.length > 0 ? 'input filled' : 'input'
                }
                name='user_type'
                onChange={changeHandler}
              >
                <option value=''></option>
                <option value='programmer'>Programmer</option>
                <option value='frontend'>Front-end</option>
              </select>
              <label className='label'>I would describe my user type as</label>
            </div>

            <div className='input-container'>
              <input
                required
                className={e.class_error(password, 'password', errors, active)}
                type='password'
                id='password'
                name='password'
                onChange={changeHandler}
              />
              <label
                className={e.label_error(errors, 'password', active)}
                htmlFor='password'
              >
                Password
              </label>
              {e.err_msg(errors, 'password', active)}
            </div>
            {errors.length > 0 ? (
              <button type='submit' disabled className='disabled'>
                Next
              </button>
            ) : (
              <button type='submit' className={'button'}>
                Next
              </button>
            )}

            <p>
              By click the "Next" button, you agree to creating a free account,
              and to <span>Terms of Service</span> and
              <span> Privacy Policy</span>
            </p>
          </form>
        </div>
      </section>

      <section className='right'>
        <div>
          <h2>Dummy Heading</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            ejusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
    </main>
  )
}

export default App
