import {Link} from "react-router-dom";

import './styles.scss';
import { Box, Container } from "@mui/material";

export default function Navbar() {
    return (
        <Container fixed>
            <nav className="navbar">
                <Box sx={{ justifyContent: 'flex-start', display: 'flex', flexDirection: 'row', alignItems: 'center' } }>
                    <Link to="/">Home</Link>
                    <Link to="/produtos">Produtos</Link>
                    <Link to="/categorias">Categorias</Link>
                    <Link to="/meus-pedidos">Meus Pedidos</Link>
                </Box>
            </nav>
        </Container>
    )
}   