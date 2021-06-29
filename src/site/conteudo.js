import { Paper, Typography, Container } from '@material-ui/core'

const Conteudo = () => {
    return (
        <Container align="center ">    
            <Paper style={{ marginTop: 10, padding: 20 }}>
                <Typography variant="h4">
                    Um pouquinho da nossa história!
                </Typography>
                <Typography variant="body">
                    <br/>
                    Tudo começou no ano de 1954 quando um jovem do interior paulista decidiu se aventurar na cidade de  São Paulo,
                     ele sofreu muito no início, mas não desistiu, abriu uma quintandinha com o nome de Quitanda do Felipe e 
                     a evolução do comércio se tornou o grande empreendimento que hoje é o supermercado do Felipe.
                </Typography>
            </Paper>
        </Container>
    )
}

export default Conteudo