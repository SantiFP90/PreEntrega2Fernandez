import React, { useState } from "react";

const Form = () => {
  const [error, setError] = useState(false);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.name.length < 5) {
      alert("Nombre no valido");
      setError(true);
      return;
    }
    if (!userData.email.includes("@")) {
      alert("Email no valido");
      setError(true);
      return;
    }

    const str = userData.password.trim();
    const passwordValid = userData.password === str;

    if (
      !passwordValid ||
      userData.password.length < 5 ||
      userData.password.includes(" ")
    ) {
      setError(true);
      alert(
        "La contraseña no debe tener espacios en blanco y debe contener como minimo 5 caracteres"
      );
      return;
    }
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        color: "white",
      }}
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su usuario"
          onChange={handleChange}
          name="name"
        />
        <hr />
        <input
          type="email"
          placeholder="Ingrese su correo"
          onChange={handleChange}
          name="email"
        />
        <hr />
        <input
          type="password"
          placeholder="Ingrese su contraseña"
          name="password"
          onChange={handleChange}
        />
        <hr />
        <button type="submit">Enviar</button>
      </form>
      {error ? (
        <h1>El usuario no cumple con las validaciones (ツ)_/¯</h1>
      ) : null}
    </div>
  );
};

export default Form;
