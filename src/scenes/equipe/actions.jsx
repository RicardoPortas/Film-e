import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import axios from "axios" 
import { Api } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const apiUrl = "https://ironrest.cyclic.app/86_film-e"

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const { _id } = useParams ()
  const [ user, setUser ] = useState ()

  useEffect ( () => {

    axios.get (`${apiUrl}/${_id}`)
      .then (response => {


        setUser (response.data)
      })
      .catch (error => console.log(error))


  }, [])

  const handleFormSubmit = (values) => {
    
    axios.put (apiUrl, values)
      .then (response => {})
      .catch (error => console.log(error))

    console.log(values);
  };

  if (!user) {
    return <p>loading</p>

  }

  return (
    <Box m="20px">
      <Header title="CADASTRO DE EQUIPE" subtitle= "Adicione membros para seu projeto" />

      <Formik
        onSubmit={handleFormSubmit} // em vez post, um put - _id na url 
        initialValues={user} // pegar de um estado (id de uma pessoa {_id}) (dar um get na API e colocar o resultado dentro do values)
        validationSchema={checkoutSchema}
      >
        {({
          values, 
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Nome"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.nome}
                name="nome"
                error={!!touched.nome && !!errors.nome}
                helperText={touched.nome && errors.nome}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Sobrenome"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.sobrenome}
                name="sobrenome"
                error={!!touched.sobrenome && !!errors.sobrenome}
                helperText={touched.sobrenome && errors.sobrenome}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contato"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contato}
                name="contato"
                error={!!touched.contato && !!errors.contato}
                helperText={touched.contato && errors.contato}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Função"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.funcao}
                name="funcao"
                error={!!touched.funcao && !!errors.funcao}
                helperText={touched.funcao && errors.funcao}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="CNPJ"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cnpj}
                name="cnpj"
                error={!!touched.cnpj && !!errors.cnpj}
                helperText={touched.cnpj && errors.cnpj}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Adicionar Membro
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  nome: yup.string().required("required"),
  sobrenome: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contato: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  funcao: yup.string().required("required"),
  cnpj: yup.string().required("required"),
});
const initialValues = {
  nome: "",
  sobrenome: "",
  email: "",
  contato: "",
  funcao: "",
  cnpj: "",
};

export default Form;