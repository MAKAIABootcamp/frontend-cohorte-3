import React from "react";
import { useForm } from "react-hook-form";
import "./register.css";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    if (formData.password === formData.confirmPassword) {
      console.log(formData);
    } else {
      alert("Las contraseñas no coinciden");
    }
  };

  const validatePassword = (pass) => {
    if (pass.length < 8) {
      return "La contraseña debe contener más de 8 caracteres";
    } else if (pass.length > 16) {
      return "La contraseña debe contener máximo 16 caracteres";
    }
    return true;
  };

  return (
    <div>
      <h1 className="title">Crear una nueva cuenta</h1>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Nombre:
          <input
            type="text"
            {...register("name", {
              required: "El nombre es requerido",
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "El nombre debe ser solo texto",
              },
            })}
          />
          {errors.name && (
            <span className="message--error">{errors.name?.message}</span>
          )}
        </label>
        <label>
          E-mail:
          <input
            type="text"
            {...register("email", {
              required: "El email es requerido",
            })}
            aria-invalid={errors.email ? true : false}
          />
          {errors.email?.type === "required" && (
            <span className="message--error">{errors.email?.message}</span>
          )}
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            {...register("password", {
              required: true,
              validate: validatePassword,
            })}
          />
          {errors.password && (
            <span className="message--error">{errors.password.message}</span>
          )}
        </label>
        <label>
          Confirmar contraseña:
          <input
            type="password"
            {...register("confirmPassword", {
              required: true,
              validate: validatePassword,
            })}
          />
          {errors.confirmPassword && (
            <span className="message--error">
              {errors.confirmPassword.message}
            </span>
          )}
        </label>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default Register;
