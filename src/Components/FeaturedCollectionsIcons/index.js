import React from "react";
import { Box, Container } from "@mui/material";
import "./styles.scss"
import { Link } from "react-router-dom";

import tshirtIcon from './img/tshirt-icon.svg'
import jeansIcon from './img/jeans-icon.svg'
import headphoneIcon from './img/headphone-icon.svg'
import shoesIcon from './img/shoes-icon.svg'

export default function FeaturedCollectionsIcons() {
    return (
        <div className="featured-collections-icons">
            <Container fixed>
            
                <h2>Coleções em Destaque</h2>

                <Box sx={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center' } }>
                    <Link to="/">
                        <div>
                            <img src={tshirtIcon} alt=""/>
                        </div>
                        <p>Camisetas</p>
                    </Link>
                    <Link to="/">
                        <div>
                            <img src={jeansIcon} alt=""/>
                        </div>
                        <p>Calças</p>
                    </Link>
                    <Link to="/">
                        <div>
                            <img src={jeansIcon} alt=""/>
                        </div>
                        <p>Bonés</p>
                    </Link>
                    <Link to="/">
                        <div>
                            <img src={headphoneIcon} alt=""/>
                        </div>
                        <p>Headphones</p>
                    </Link>
                    <Link to="/">
                        <div>
                            <img src={shoesIcon} alt=""/>
                        </div>
                        <p>Tênis</p>
                    </Link>
                </Box>
            </Container>
        </div>
    )
}