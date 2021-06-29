import { TextField, 
        Button, 
        CircularProgress,
        Container,
        Paper,
        Typography } from '@material-ui/core'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {

    const [ carregar, setCarregar ] = useState(false)
    const [ usuario, setUsuario ] = useState()
    const [ senha, setSenha ] = useState()

    const efetuarLogin = async () => {
        setCarregar(true)

        let url = "https://felipe-artin.herokuapp.com/login"
        var data = { 
            usuario: usuario, 
            senha
        }

        await axios.post(
            url,
            data
        )
            .then( (retorno) => {
                
                if (retorno.data.token) {
                    alert("Login efetuado com sucesso")
                    localStorage.setItem("NossoToken", retorno.data.token)
                    window.location = "/"

                }

                if (retorno.data.token === undefined)
                    alert(retorno.data)

                setCarregar(false)
            })
    }

    return (
        <div>
             <Paper align="center">
                <Typography>
                    <h2>Bem vindo ao supermercado do Felipe!</h2>
                    <h3>Por favor, entre com os seus dados</h3>
                 </Typography>
            </Paper>
            <div>
            <Container align="center">
                <div>
                    <Typography>
                      <h3>Usuário:</h3>  
                    </Typography>
           
            <TextField 
                id="outlined-basic" 
                label="Usuario" 
                placeholder ="Digite o usuário" 
                variant="outlined"
                name="usuario" 
                value = {usuario }
                onChange={ (e) => setUsuario(e.target.value)} />

                    <Typography>
                        <h3>Senha:</h3>  
                    </Typography>

                 <TextField id="outlined-basic"     
                 label="Senha" 
                 placeholder="Digite a senha" 
                 variant="outlined" 
                 type="password"
                 name="senha" 
                 value={ senha }  
                 onChange={ (e) => setSenha(e.target.value)}/>
               
                <br/>
                { 
                    (carregar)?(<CircularProgress color="secondary"/>):("")
                }
                <br/>

                <Button
                    variant="contained" 
                    color="primary"
                    onClick={ () => efetuarLogin() }
                >
                    Entrar
                </Button>
                </div>
            </Container>
            
            </div>
        </div>
    )
}

export default Login