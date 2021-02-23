export const error_check = (data, setErrors) => {
  const { name, email, password } = data
  if (name.length < 3) {
    setErrors((prev) => [
      ...prev,
      { type: 'name', msg: 'Please input minimum of 3 letters' },
    ])
  }
  if (!name.match(/^[A-Za-z\s]+$/)) {
    setErrors((prev) => [
      ...prev,
      { type: 'name', msg: 'Please use only letters' },
    ])
  }
  if (
    !email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    setErrors((prev) => [
      ...prev,
      { type: 'email', msg: 'Please provide a valid email' },
    ])
  }

  if (password.length < 8) {
    setErrors((prev) => [
      ...prev,
      { type: 'password', msg: 'Please input a minimum of 8 characters' },
    ])
  }
}

export const class_error = (data_type, string_type, errors) => {
  if (data_type && data_type.length > 0) {
    const res = errors.find((err) => err.type === string_type && true)
    if (res) {
      return 'input filled error'
    } else {
      return 'input filled'
    }
  } else {
    return 'input'
  }
}

export const label_error = (errors, string_type) => {
  const res = errors.find((err) => err.type === string_type && true)
  if (res) {
    return 'errorLabel'
  } else {
    return 'label'
  }
}

export const err_msg = (errors, string_type) => {
  let msg = errors.map(
    (err, index) =>
      err.type === string_type && (
        <span key={index} className='errorText'>
          {err.msg}
        </span>
      )
  )
  if (string_type === 'password') {
    msg = errors.map((err, index) =>
      err.type === string_type ? (
        <span key={index} className='errorText'>
          {err.msg}
        </span>
      ) : (
        <span className='helper'>Minimum of 8 characters</span>
      )
    )
  }
  return msg
}
