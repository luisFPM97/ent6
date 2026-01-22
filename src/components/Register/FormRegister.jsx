import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import '../Login/styles/FormLogin.css';

const FormRegister = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const { registerUser } = useAuth();

  const submit = (data) => {
    registerUser(data, () => {
      // Callback después del registro exitoso
      reset({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
      });
      // Redirigir al login
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Crear cuenta</h1>
          <p>Completa tus datos para registrarte</p>
        </div>
        
        <form onSubmit={handleSubmit(submit)} className="auth-form">
          <div className="form-group">
            <label htmlFor="firstName">Nombre</label>
            <input 
              id="firstName"
              className="form-input" 
              {...register("firstName")} 
              type="text" 
              placeholder="Tu nombre"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="lastName">Apellido</label>
            <input 
              id="lastName"
              className="form-input"  
              {...register("lastName")} 
              type="text" 
              placeholder="Tu apellido"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              id="email"
              className="form-input" 
              {...register("email")} 
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
              {...register("password")} 
              type="password" 
              placeholder="••••••••"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Teléfono</label>
            <input 
              id="phone"
              className="form-input" 
              {...register("phone")} 
              type="tel" 
              placeholder="+1234567890"
              required
            />
          </div>
          
          <button className="btn-primary btn-block" type="submit">
            Crear cuenta
          </button>
        </form>
        
        <div className="auth-footer">
          <p>Modo demo: cualquier dato será aceptado</p>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;


