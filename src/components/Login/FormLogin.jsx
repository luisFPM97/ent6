import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import './styles/FormLogin.css';

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
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Iniciar sesión</h1>
          <p>Ingresa tus datos para continuar</p>
        </div>
        
        <form onSubmit={handleSubmit(submit)} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              id="email"
              className="form-input" 
              {...register('email')} 
              type="email" 
              placeholder="tu@email.com"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input 
              id="password"
              className="form-input" 
              {...register('password')} 
              type="password" 
              placeholder="••••••••"
              required
            />
          </div>
          
          <button className="btn-primary btn-block" type="submit">
            Ingresar
          </button>
        </form>
        
        <div className="auth-footer">
          <p>Modo demo: cualquier credencial funcionará</p>
        </div>
      </div>
    </div>
  );
}

export default FormLogin