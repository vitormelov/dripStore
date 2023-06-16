import {Link} from "react-router-dom";

import { Box, Button, Container, TextField } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import logo from './img/digital-college-icon.png'

import './styles.scss';


export default function Menu() { 
    return (
      <Container fixed>
        <Box sx={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', alignItems: 'center' } }>
          <div>
            <img src={logo} alt=""/>
          </div>
          <Link to='/'><h1>Digital Store</h1></Link>
          <TextField id="outlined-basic" label="Pesquisar produto..." variant="outlined" size="small" />
          <Link to='/'>Cadastre-se</Link>
          <Link to='/'><Button variant="contained">Entrar</Button></Link>
          <Link className="shoppingCart" to='/'><ShoppingCartOutlinedIcon/></Link>
        </Box>
      </Container>
      
    )
  }