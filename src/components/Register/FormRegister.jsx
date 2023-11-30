import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const FormRegister = () => {
  const { register, handleSubmit, reset } = useForm();

  const { registerUser } = useAuth();

  const submit = (data) => {
    registerUser(data);
    alert('Usuario Registrado Correctamete')
    reset({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
    });
  };

  return (
    <article className="form_register">
      <form onSubmit={handleSubmit(submit)} className="form_register-form">
        <h3>Register User</h3>
        <label>
          <span>First Name</span>
          <input className="input_register" {...register("firstName")} type="text" />
        </label>
        <label>
          <span>Last Name</span>
          <input className="input_register"  {...register("lastName")} type="text" />
        </label>
        <label>
          <span>E-mail</span>
          <input className="input_register" {...register("email")} type="email" />
        </label>
        <label>
          <span>Password</span>
          <input className="input_register" {...register("password")} type="password" />
        </label>
        <label>
          <span>Phone</span>
          <input className="input_register" {...register("phone")} type="text" />
        </label>
        <button className="btn_register">Register</button>
      </form>
    </article>
  );
};

export default FormRegister;
