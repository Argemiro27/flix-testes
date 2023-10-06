import * as React from "react";
import { Button, Link, Typography } from "@mui/material";
import "./style.js";
import { BoxLogin, CardLogin } from "./style.js";
import { BtnPrimary } from "../../components/Button/customBtn.js";
import { TextInput } from "../../components/TextInput/style.js";
import { StyledLink } from "../../components/Link/style.js"
import bg from '../../assets/bglogin.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if(email == 'mirojr' || password == 'mirojr'){
      toast.success('Login efetuado com sucesso !')
    }
  };

  return (
    <BoxLogin
      className="container-login d-flex justify-content-center align-items-center"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center", minHeight: "100vh" }}
    >
      <ToastContainer/>
      <CardLogin className="rounded bg-transparent border-0 p-4">
        <Typography variant="h4" className="text-center" gutterBottom>
          Login - Flix
        </Typography>
        <TextInput
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={handleEmailChange}
        />
        <TextInput
          label="Senha"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={handlePasswordChange}
        />
        <BtnPrimary
          variant="contained"
          fullWidth
          onClick={handleLogin}
        >
          Login
        </BtnPrimary>
        <StyledLink href="#" variant="body2" className="mt-3 mb-3">
          Esqueceu a senha?
        </StyledLink>
        <BtnPrimary
          variant="contained"
          fullWidth
          onClick={handleLogin}
        >
          Registre-se
        </BtnPrimary>
      </CardLogin>
    </BoxLogin>
  );
}

export default Login;
