import './SignUp.scss'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Link } from 'react-router-dom'
import * as yup from "yup"
import lockIcon from '../assets/lock-icon.svg'
import emailIcon from '../assets/mail-icon.svg'
import userIcon from '../assets/user-icon.svg'
import todoLogo from '../../public/todo.svg'
import { ToasterContainer, SuccessToast, ErrorToast, LoadingToast } from '../components/Toaster'
import { useRegisterUserMutation } from '../features/auth/authApi'

const SignUp = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    username: yup.string().required("Username is required"),
    password: yup.string().required("password is required").min(4, "Password must be at least 8 characters"),
    confirmPassword: yup.string().required("confirm password is required").oneOf([yup.ref('password'), null], 'Passwords must match'),
    terms: yup.bool().oneOf([true], "You must accept the terms and conditions")

  });
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [registerUser, { isLoading}] = useRegisterUserMutation();

  const onSubmit = async (data) => {
    LoadingToast();
    try {
      const { confirmPassword, terms, ...rest } = data;
      const response = await registerUser(rest).unwrap();
      LoadingToast(false);
      SuccessToast(response.message);
    } catch (error) {
      LoadingToast(false);
      ErrorToast(error.data.error);
    }
  };

  return (
    <div className="page">
      <ToasterContainer />
      <div className='container'>
        <img className='todo-logo' src={todoLogo} alt="no pic" />
        <h3>Sign Up for an Account</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-inputs">
            <label htmlFor="username" className='email'>
              <img src={userIcon} alt="nopic" />
              <input type="text" id='username'  {...register("username")} placeholder='Username' />
            </label>
            {errors.username?.message && <p className='error'>{errors.username?.message}</p>}
            <label htmlFor="email" className='email'>
              <img src={emailIcon} alt="nopic" />
              <input type="email" id='email' {...register("email")} placeholder="Email" />
            </label>
            {errors.email?.message && <p className='error'>{errors.email?.message}</p>}
            <label htmlFor="password" className='password'>
              <img src={lockIcon} alt="nopic" />
              <input type="password" id='password' {...register("password")} placeholder="Password" />
            </label>
            {errors.password?.message && <p className='error'>{errors.password?.message}</p>}
            <label htmlFor='confirm-password' className='password'>
              <img src={lockIcon} alt="nopic" />
              <input type="password" id='confirm-password' {...register("confirmPassword")} placeholder="Confirm Password" />
            </label>
            {errors.confirmPassword?.message && <p className='error'>{errors.confirmPassword?.message}</p>}
          </div>
          <div className='form-options'>
            <input type="checkbox"  {...register("terms")} />
            <label>By creating an account means you agree to the Terms & Conditions and Privacy Policy</label>
          </div>
          {errors.terms?.message && <p className='error'>{errors.terms?.message}</p>}
          <button type='submit'>{isLoading ? "Loading..." : "Sign Up"}</button>
        </form>
        <p>Already have an account? <Link to="/auth/login">Login In</Link></p>
      </div>
    </div>
  )
}

export default SignUp