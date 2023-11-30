import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const FormLogin = () => {

  const {register, handleSubmit, reset} = useForm()

  const {loginUser} = useAuth()

    const submit = (data) =>{
        loginUser(data)
        reset({
          email:'',
          password:''
        })
    }

  return (
    <div className="form_login">
      <form onSubmit={handleSubmit(submit)} className="form_login_form">
        <label>
          <span>Email</span>
          <input className="input_login" {...register('email')} type="email" />
        </label>
        <label>
          <span>Password</span>
          <input className="input_login" {...register('password')} type="password" />
        </label>
        <button className="btn_login">Login</button>
      </form>
    </div>
  );
}

export default FormLogin