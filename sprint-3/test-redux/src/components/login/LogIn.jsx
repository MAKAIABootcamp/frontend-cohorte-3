import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { userLoginAction } from "../../redux/actions/userActions";

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((store) => store.userReducer);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const logIn = (user) => {
    console.log(user);
    dispatch(userLoginAction(user));
    navigate("/");
    };
    
    if (error) {
        Swal.fire("Upps!", "Ocurrió un error en la auntenticación!", "error");
    }

  return (
    <Form className="p-5" onSubmit={handleSubmit(logIn)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <Form.Text className="text-muted">
            Por favor ingrese su email
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <Form.Text className="text-muted">
            Por favor ingrese su contraseña
          </Form.Text>
        )}
      </Form.Group>

      <Button variant="primary" type="submit">
        Iniciar Sesión
      </Button>
    </Form>
  );
};

export default LogIn;
