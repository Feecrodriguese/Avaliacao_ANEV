import { useState } from 'react'
import { TextField, 
    Button, 
    Container,
    Paper,
    Typography } from '@material-ui/core';

import SaveIcon from '@material-ui/icons/Save'
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import axios from 'axios'


const Administrativa = () => {
    const [ lista, setLista ] = useState(() => [])

    const handleClick = async () => {
        const token = localStorage.getItem("NossoToken")
        
        var bearer = `Bearer ${token}`
        

        const url = "https://felipe-artin.herokuapp.com/usuarios/lista"
        await axios
                .get(
                    url,
                    {
                        headers: { "Authorization": bearer }
                    }
                )
                .then( retorno => {
                    setLista([ retorno.data ])
                })
    }



    const usuarios = lista.map( (linha, key) => {
        return (
            <div key={ key }>
                <div>{ linha.id } </div>
                <div>{ linha.nome } </div>
            </div>
        )
    })   


    return (
        <div>
            <Paper align="center"> 
                <Typography>
                    <h2>Área administrativa</h2>
                    <h3>Somente para funcionários do supermercado</h3>
                 </Typography>

                <Button
                    variant="contained"
                    color="secondary"
                    onClick={ () => handleClick() }
                >
                    Carregar usuários
                </Button>
                
                { usuarios }
                <br/>
            </Paper>
            <br/>
          
            <Container align="center">
                <Typography>
                    <h3>Cadastrar Produtos</h3>
                </Typography>
                

            <TextField id="outlined-basic"        
                       variant="outlined"
                       placeholder ="Nome do produto:"
                       size="small" />
            <spam>              </spam>

            <Button
                variant="contained"
                color="primary"
                endIcon={<Icon>send</Icon>}
                >
                     Cadastrar
                </Button>

                <br/>
                <br/>

            <TextField id="outlined-basic"        
                variant="outlined"
                placeholder ="Id:"
                size="small" />
             <spam>              </spam>

            <Button
                 variant="contained"
                color="default"
                startIcon={<CloudUploadIcon />}
                >
                    Atualizar
             </Button>
                <br/>
                <br/>

            <TextField 
                id="outlined-basic"        
                variant="outlined"
                placeholder ="Id:"
                size="small" />
             <spam>              </spam>

            <Button
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon />}
                >
                    Deletar
            </Button>
                <br/>
                <br/>



            <Button
                variant="contained"
                color="primary"
                size="medium"
                startIcon={<SaveIcon />}
                >
                    Salvar
                </Button>
                
            <span>     </span>
                <Button    
                    variant="contained"     
                    color="primary"
                    >
                     Produtos Cadastrados
                </Button>

            </Container>
            
         
        </div>
    )

    
}

export default Administrativa