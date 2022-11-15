import { useState } from 'react';
import axios from 'axios';
const Login = () => {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/auth/login', credentials);
    console.log(res);
  };

  return (
    <form className='container-md' onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input
          name='name'
          type='text'
          className='form-control'
          required
          onChange={handleChange}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='email' className='form-label'>
          Email address
        </label>
        <input
          onChange={handleChange}
          type='email'
          name='email'
          className='form-control'
          required
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='password' className='form-label'>
          Password
        </label>
        <input
          required
          onChange={handleChange}
          type='password'
          name='password'
          className='form-control'
        />
        {credentials.password != '' && credentials.password.length < 8 ? (
          <div className='form-text text-danger'>
            La contraseña debe contener almenos 8 caracteres
          </div>
        ) : (
          ''
        )}
      </div>
      <div className='mb-3'>
        <label htmlFor='confirmPassword' className='form-label'>
          Confirm password
        </label>
        <input
          required
          onChange={handleChange}
          name='confirmPassword'
          type='password'
          className='form-control'
        />

        {credentials.password !== credentials.confirmPassword ? (
          <div className='form-text text-danger'>
            Las contraseñas no coinciden
          </div>
        ) : (
          ''
        )}
      </div>
      <button
        type='submit'
        className={`btn btn-primary ${
          credentials.password !== credentials.confirmPassword ||
          credentials.password.length < 8
            ? 'disabled'
            : ''
        }`}
      >
        Submit
      </button>
    </form>
  );
};

export default Login;
