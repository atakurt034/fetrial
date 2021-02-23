import './App.scss'

function App() {
  return (
    <main>
      <left>
        <div className='steps'>
          steps
          <span className='active'>.</span>
          <span>.</span>
          <span>.</span>
        </div>

        <div className='body'>
          <h2>Let's set up your account</h2>
          <p>
            Already have an account? <span>Sign in</span>
          </p>
          <form>
            <input placeholder='Your name' type='text' />

            <input placeholder='Email address' type='email' />

            <select>
              <option>I would describe my user type as</option>
              <option>Programmer</option>
              <option>Front-end</option>
            </select>

            <div>
              <input type='password' id='password' placeholder='Password' />
              <label htmlFor='password'>Minimum 8 characters</label>
            </div>

            <button disabled type='submit'>
              Next
            </button>
            <p>
              By click the "Next" button, you agree to creating a free account,
              and to <span>Terms of Service</span> and{' '}
              <span>Privacy Policy</span>{' '}
            </p>
          </form>
        </div>
      </left>

      <right>
        <div>
          <h2>Dummy Heading</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            ejusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </right>
    </main>
  )
}

export default App
