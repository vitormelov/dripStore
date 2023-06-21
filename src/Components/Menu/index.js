import {Link} from "react-router-dom";

import { Box, Button, Container, TextField } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';

import logo from './img/digital-college-icon.png'

import './styles.scss';


export default function Menu() { 
    return (
      <div className="menu">
          <Container fixed>
            <Box sx={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', alignItems: 'center' } }>
              <div className="menu-logo">
                <div>
                  <img src={logo} alt=""/>
                </div>
                <Link to='/'><h1>Digital Store</h1></Link>
              </div>
              <div className="menu-input">
                <TextField id="outlined-basic" label="Pesquisar produto..." variant="outlined" size="small" />
                <div className="input-glass">
                  <span><SearchIcon/></span>
                </div>
              </div>
              <Link to='/'><span>Cadastre-se</span></Link>
              <Link to='/'><Button variant="contained">Entrar</Button></Link>
              <Link className="shoppingCart" to='/'><ShoppingCartOutlinedIcon/></Link>
            </Box>
          </Container>
      </div>
    )
  }