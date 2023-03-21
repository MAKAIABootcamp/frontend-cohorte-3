import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { loginTypes } from "../types/loginTypes";

const loginUser = (user, error) => {
  return {
    type: loginTypes.LOGIN_USER,
    payload: {
      user,
      error,
    },
  };
};

export const loginUserAsync = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(toggleLoading());
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const currentUser = {
        name: user.displayName,
        email: user.email,
      };
      const error = { status: false, message: "" };
      dispatch(loginUser(currentUser, error));
      dispatch(toggleLogin());
      dispatch(toggleLoading());
    } catch (err) {
      const currentUser = {
        name: "",
        email: "",
      };
      const error = {
        status: true,
        message: "Usuario o contraseña incorrectos",
      };
      dispatch(loginUser(currentUser, error));
      dispatch(toggleLoading());
    }
  };
};

const userCreate = (user, error) => {
  return {
    type: loginTypes.CREATE_USER,
    payload: {
      user,
      error,
    },
  };
};

export const userCreateAsync = ({ email, password, name }) => {
  return async (dispatch) => {
    dispatch(toggleLoading());
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, { displayName: name });
      const user = {
        name,
        email,
      };
      const error = { status: false, message: "" };
      dispatch(userCreate(user, error));
      dispatch(toggleLogin());
      dispatch(toggleLoading());
    } catch (err) {
      const currentUser = {
        name: "",
        email: "",
      };
      const error = { status: true, message: "Error al crear nuevo usuario" };
      dispatch(userCreate(currentUser, error));
      dispatch(toggleLoading());
    }
  };
};

export const verifyCodeAsync = (code) => {
  return async (dispatch) => {
    confirmationResult
      .confirm(code)
      .then((result) => {
        const user = result.user.auth.currentUser;
        console.log(user);
        dispatch(
          loginUser(
            {
              name: user.displayName,
              phoneNumber: user.phoneNumber,
              userPhoto: user.photoURL,
            },
            { status: false, message: "" }
          )
        );
      })
      .catch((error) => {
        console.log(error);
        dispatch(
          loginUser({
            user: {},
            error: { status: true, message: error.message },
          })
        );
      });
  };
};

const toggleLoading = () => {
  return {
    type: loginTypes.TOGGLE_LOADING,
  };
};

const toggleLogin = () => {
  return {
    type: loginTypes.TOGGLE_LOGIN,
  };
};

export const updateProfileAsync = (userInfo) => {
  return async (dispatch) => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: userInfo.name,
        photoURL: userInfo.photo,
      });
      console.log(auth.currentUser);
      dispatch(
        updateProfileSync({
          user: {
            name: auth.currentUser.displayName,
            photo: auth.currentUser.photoURL,
            },
            error: {
                status: false,
                message: ""
            }
        })
      );
    } catch (err) {
        console.log(err);
        dispatch(updateProfileSync({
            user: {},
            error: {
                status: true,
                message: err.message
            }
        }))
    }
  };
};

const updateProfileSync = ({ user, error }) => {
  return {
    type: loginTypes.UPDATE_USER,
    payload: {
      user: { ...user },
      error: {
        ...error,
      },
    },
  };
};
