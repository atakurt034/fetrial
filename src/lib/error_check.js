export const error_check = (data, setErrors, active, setActive) => {
  const { name, email, password } = data
  if (name.length < 3 || !name.match(/^[A-Za-z\s]+$/)) {
    setErrors((prev) => [
      ...prev,
      {
        type: 'name',
        msg: 'Please use only letters with a minimum of 3 characters',
      },
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

export const class_error = (data_type, string_type, errors, active) => {
  if (data_type && data_type.length > 0) {
    const res = errors.find((err) => err.type === string_type)
    const status = active[string_type]

    if (res && status) {
      return 'input filled error'
    } else {
      return 'input filled'
    }
  } else {
    return 'input'
  }
}

export const label_error = (errors, string_type, active) => {
  const res = errors.find((err) => err.type === string_type && true)
  const status = active[string_type]
  if (res && status) {
    return 'errorLabel'
  } else {
    return 'label'
  }
}

export const err_msg = (errors, string_type, active) => {
  const status = active[string_type]
  let msg = errors.map(
    (err, index) =>
      err.type === string_type && (
        <span key={index} className='errorText'>
          {err.msg}
        </span>
      )
  )
  if (string_type === 'password') {
    msg = errors.map(
      (err, index) =>
        err.type === string_type && (
          <span key={index} className='errorText'>
            {err.msg}
          </span>
        )
    )
  }
  if (string_type === 'password') {
    if (!errors.find((err) => err.type === 'password' && true)) {
      msg = <span className='helper'>Minimum of 8 characters</span>
    }
  }
  if (!status) {
    msg = ''
  }
  return msg
}

export const recheck = (event, active, setActive) => {
  const { name, value } = event.target

  switch (name) {
    case 'name':
      if (value.length < 3 || !value.match(/^[A-Za-z\s]+$/)) {
        setActive({ ...active, [name]: true })
      } else {
        setActive({ ...active, [name]: false })
      }
      break
    case 'email':
      if (
        !value.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        setActive({ ...active, [name]: true })
      } else {
        setActive({ ...active, [name]: false })
      }
      break
    case 'password':
      if (value.length < 8) {
        setActive({ ...active, [name]: true })
      } else {
        setActive({ ...active, [name]: false })
      }
      break
    default:
      break
  }
}
