import './Login.scss'
import * as yup from "yup"
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import lockIcon from '../assets/lock-icon.svg'
import userIcon from '../assets/user-icon.svg'
import todoLogo from '../../public/todo.svg'
import { ToasterContainer, SuccessToast, ErrorToast, LoadingToast } from '../components/Toaster'
import { useLoginMutation } from '../features/auth/authApi'
import useLocalStorage from '../hooks/useLocalStorage'



const Login = () => {
  const [login, { isLoading }] = useLoginMutation();
  const [userDetails, setUserDetails] = useLocalStorage('user', null);

  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("password is required")
  });
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async(data) => {
    LoadingToast();
    try {
      const response = await login(data).unwrap();
      LoadingToast(false);
      SuccessToast(response.message.msg)
      setUserDetails(response.message.user);
      console.log(userDetails)
      
    } catch (error) {
      LoadingToast(false);
      console.log(error);
      ErrorToast(error.data);
    }
  };

  return (
    <div className="page">
      <ToasterContainer />
      <div className='container'>
        <img className='todo-logo' src={todoLogo} alt="no pic" />
        <div className="header">
          <h3>Sign In to your Account</h3>
          <p>Welcome back! please enter your detail</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-inputs">
            <label htmlFor="username" className='username'>
              <img src={userIcon} alt="nopic" />
              <input type="username" id='username' {...register("username")} placeholder="Username" />
            </label>
            {errors.username?.message && <p className='error'>{errors.username?.message}</p>}
            <label htmlFor="password" className='password'>
              <img src={lockIcon} alt="nopic" />
              <input type="password" id='password' {...register("password")} placeholder="Password" />
            </label>
            {errors.password?.message && <p className='error'>{errors.password?.message}</p>}
          </div>
          <div className='form-options'>
            <div className='remember-me'>
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <a href="/">Forgot password?</a>
          </div>
          <button type="submit">{isLoading ? "Loading..." : "Login In"}</button>
        </form>
        <p>Don't have an account? <Link to="/auth/signup"> Sign Up</Link></p>
      </div>
    </div>
  )
}

export default Login