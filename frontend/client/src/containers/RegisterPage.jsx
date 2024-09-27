import { useState } from 'react'
import Layout from 'components/Layout'
import { Navigate } from 'react-router-dom' // Import Navigate
import { useDispatch, useSelector } from 'react-redux'
import { register } from 'features/user'

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { registered } = useSelector(state => state.user);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });

  const { first_name, last_name, email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(register({ first_name, last_name, email, password }));
  }

  // Redirect to login page if registered successfully
  if (registered) return <Navigate to='/LoginPage' />;

  return (
    <Layout title='auth site | Register' content='RegisterPage'>
      <h1>Register for an account</h1>
      <form action="" onSubmit={onSubmit}>
        <div>
          <label htmlFor="first_name">First Name</label>
          <input type="text"
            id="first_name"
            name='first_name'
            onChange={onChange}
            value={first_name}
            required />
        </div>

        <div>
          <label htmlFor="last_name">Last Name</label>
          <input type="text"
            id="last_name"
            name='last_name'
            onChange={onChange}
            value={last_name}
            required />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="text"
            id="email"
            name='email'
            onChange={onChange}
            value={email}
            required />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password"
            id="password"
            name='password'
            onChange={onChange}
            value={password}
            required />
        </div>

        
          <button>Register</button>
        
      </form>
    </Layout>
  )
}

export default RegisterPage;
