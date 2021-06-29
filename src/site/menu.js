import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
} from '@material-ui/core'

import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';

import { makeStyles } from '@material-ui/core/styles'

import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: 8,
    },
    title: {
      flexGrow: 1,
    },
  }));


const Menu = ({ tema }) => {
    const classes = useStyles()

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton 
                    edge="start" 
                    color="inherit" 
                    aria-label="menu"
                    onClick={ tema }
                >
                   <PermDataSettingIcon/>
                </IconButton>
                <Typography variant="h6" className={classes.title} >
                    SUPERMERDADO DO FELIPE
                </Typography>
                
                <Link 
                    to="/admin" 
                    style={{ textDecoration: "none", color: "white" }}
                >
                    <Button color="inherit">Área do Funcionário</Button>
                </Link>
                <Button color="inherit" className={classes.menuButton}>Ofertas</Button>
                <Button color="inherit" className={classes.menuButton}>Contato</Button>
                <a href="/login">
                    <Button color="inherit">Login</Button>
                </a>
               
            </Toolbar>
        </AppBar>
    )
}

export default Menu