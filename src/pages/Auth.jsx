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
import { Link } from "react-router-dom";

function Auth() {
  const [formType, setFormType] = useState("login");
  const loginRef = useRef();
  const signUpRef = useRef();

  const dispatch = useDispatch();
  const authSelector = useSelector((state) => state.auth);

  const handleJustifyClick = (value) => {
    if (value === formType) {
      return;
    }

    setFormType(value);
  };

  useEffect(() => {
    // console.log("token", authSelector.token);
    const token = authSelector.token;
    console.log("token", token);
    localStorage.setItem("authToken", token);
  }, [authSelector.status]);

  function loginSubmit(e) {
    e.preventDefault();
    const formData = new FormData(loginRef.current);
    const values = Object.fromEntries(formData);

    const data = {
      email: values.email,
      password: values.password,
    };
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
              <Link to="/">
                <span className="text-white">Iniciar sesion</span>
              </Link>
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
              <Link to="/">
                <span className="text-white">Registrarse</span>
              </Link>
            </MDBBtn>
          </form>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}

export default Auth;