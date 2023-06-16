import React from "react";
import { Box, Container } from "@mui/material";
import "./styles.scss"
import { Link } from "react-router-dom";

import tshirtIcon from './img/tshirt-icon-gray.png'

export default function FeaturedCollectionsIcons() {
    return (
        <Container fixed>
            <div className="featured-collections-icons">
                
                <h2>Coleções em Destaque</h2>

                <Box sx={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center' } }>
                    <Link to="/">
                        <img src={tshirtIcon} alt=""/>
                        <p>Camisetas</p>
                    </Link>
                    <Link to="/">
                        <img src={tshirtIcon} alt=""/>
                        <p>Calças</p>
                    </Link>
                    <Link to="/">
                        <img src={tshirtIcon} alt=""/>
                        <p>Bonés</p>
                    </Link>
                    <Link to="/">
                        <img src={tshirtIcon} alt=""/>
                        <p>Headphones</p>
                    </Link>
                    <Link to="/">
                        <img src={tshirtIcon} alt=""/>
                        <p>Tênis</p>
                    </Link>
                </Box>
            </div>
        </Container>
    )
}