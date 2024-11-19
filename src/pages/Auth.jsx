import React, { useState, useRef, useEffect } from "react";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { login, register } from "../app/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Auth() {
  const [formType, setFormType] = useState("login");
  const loginRef = useRef();
  const signUpRef = useRef();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const authSelector = useSelector((state) => state.auth);

  useEffect(() => {
    if (authSelector.status_login === "suceeded") {
      toast.success("Cuenta ingresada con exito");
      setTimeout(() => {
        window.location.href = "/"; // Redirige a la página de inicio
      }, 1000); // Puedes ajustar el tiempo de espera
    }

    if (authSelector.status_register === "suceeded") {
      toast.success("Cuenta registrada con exito");
      setTimeout(() => {
        window.location.href = "/"; // Redirige a la página de inicio
      }, 1000); // Puedes ajustar el tiempo de espera
    }

    if (authSelector.status_login == "error") {
      toast.error("Cuenta no registrada o credenciales incorrectas");
    }

    if (authSelector.status_register == "error") {
      toast.error("La cuenta ya esta registrada");
    }
  }, [authSelector.status_login, authSelector.status_register]);

  const handleJustifyClick = (value) => {
    if (value === formType) {
      return;
    }

    setFormType(value);
  };

  function loginSubmit(e) {
    e.preventDefault();
    const formData = new FormData(loginRef.current);
    const values = Object.fromEntries(formData);

    const data = {
      email: values.email,
      password: values.password,
    };
    console.log("login component");
    dispatch(login(data));
  }

  function signUpSubmit(e) {
    e.preventDefault();
    const formData = new FormData(signUpRef.current);
    const values = Object.fromEntries(formData);

    const data = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    dispatch(register(data));
  }

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBTabs
        pills
        justify
        className="mb-3 d-flex flex-row justify-content-between"
      >
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("login")}
            active={formType === "login"}
          >
            Iniciar sesion
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("register")}
            active={formType === "register"}
          >
            Registrarse
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane open={formType === "login"}>
          <form onSubmit={loginSubmit} ref={loginRef}>
            <MDBInput
              wrapperClass="mb-4"
              label="Email"
              name="email"
              type="email"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Contraseña"
              name="password"
              type="password"
              size="8"
            />

            <MDBBtn type="submit" className="mb-4 w-100">
              <a href="/">
                <span className="text-white">Iniciar sesion</span>
              </a>
            </MDBBtn>
          </form>
        </MDBTabsPane>

        <MDBTabsPane open={formType === "register"}>
          <form onSubmit={signUpSubmit} ref={signUpRef}>
            <MDBInput
              wrapperClass="mb-4"
              label="Nombre"
              type="text"
              name="name"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Email"
              name="email"
              type="email"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Contraseña"
              name="password"
              type="password"
              size="8"
            />
            <MDBBtn type="submit" className="mb-4 w-100">
              <a href="/">
                <span className="text-white">Registrarse</span>
              </a>
            </MDBBtn>
          </form>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}

export default Auth;
