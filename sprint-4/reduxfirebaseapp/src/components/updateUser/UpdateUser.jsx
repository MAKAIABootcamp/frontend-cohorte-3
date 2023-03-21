import React from "react";
import { GiStrawberry } from "react-icons/gi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { fileUpload } from "../../services/fileUpload";
import { updateProfileAsync } from "../../redux/actions/loginActions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const regex = /^[a-zA-Z\s]{1,10}$/;

const schema = yup
  .object({
    name: yup
      .string()
      .matches(regex, "Debe de ingresar un nombre válido")
      .required("El campo nombre es requerido"),
  })
  .required();

const UpdateUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { error } = useSelector((store) => store.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    const photo = await fileUpload(data.photo[0]);
    const user = { name: data.name, photo };
    dispatch(updateProfileAsync(user));
  };

  if (error.status) {
    Swal.fire("Ops!", `Ha ocurido un error: ${error.message}`, "error");
  }

  if (error.status === false) {
    Swal.fire(
      "Exito!",
      "Tus datos fueron actualizados exitosamente",
      "success"
    ).then(() => {
      navigate("/");
    });
  }

  return (
    <main className="bg-bg-login flex items-center h-screen justify-center w-screen bg-center">
      <section className=" bg-cover formphone shadow-red-200 flex flex-col items-center justify-center m-5">
        <div className="bg-cover formphone flex items-center justify-center rounded-full p-2 mt-3">
          <GiStrawberry className="drop-shadow-xl text-red-500 text-shadow text-6xl pl-1" />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" p-5 flex flex-col gap-5 text-center"
        >
          <label className="flex flex-col gap-3">
            <span className="font-semibold underline  text-xl font-montserrat decoration-green-600">
              Nombre
            </span>
            <input
              {...register("name")}
              type="text"
              className="border-2 border-blue-200 p-2 rounded-md shadow-md outline-none shadow-[#0a7a76]/30 hover:animate-ping-slow  ease-in duration-300"
            />
          </label>

          {errors.name ? (
            <span className="p-2 rounded-md bg-red-400 text-white">
              {errors.name.message}
            </span>
          ) : (
            <></>
          )}

          <label className="flex flex-col gap-3">
            <span className="font-bold underline text-xl decoration-[#0a7a76]">
              URL Foto
            </span>
            <input
              type="file"
              className="border-2 border-red-300 p-2 rounded-lg file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-[#0a7a76]
              hover:file:bg-violet-100"
              {...register("photo")}
            />
          </label>
          {errors.photo ? (
            <span className="p-2 rounded-md bg-red-400 text-white">
              {errors.photo.message}
            </span>
          ) : (
            <></>
          )}
          <button
            type="submit"
            className=" p-3 rounded-md text-white bg-[#0a7a76]"
          >
            Actualizar Información
          </button>
        </form>
      </section>
    </main>
  );
};

export default UpdateUser;
