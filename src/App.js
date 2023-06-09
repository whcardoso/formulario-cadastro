import './App.css';
import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@mui/material';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de Cadastro
        </Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF}/>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados)
}

function validarCPF(cpf){
  if(cpf.length !== 11){
    return {valido:false, texto: "O CPF precisa ter 11 dígitos."}
  }else{
    return {valido:true, texto: ""}
  }
}

export default App;
