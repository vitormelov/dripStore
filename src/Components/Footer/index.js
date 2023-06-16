import { Box, Container } from "@mui/material";
import './styles.scss';

import whiteLogo from './img/digital-college-white-icon.png'
import fbIcon from './img/fb-icon.png'
import instagramIcon from './img/instagram-icon.png'
import twitterIcon from './img/twitter-icon.png'

export default function Footer() { 
    return (
        <div className="footer">
            <Container>
                <Box sx={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row' } }>
                    <div className="ds-footer">
                        <Box sx={{ justifyContent: 'flex-start', display: 'flex', flexDirection: 'row', alignItems: 'center' } }>
                            <div className="logo-icon">
                                <img src={whiteLogo} alt=""/>
                            </div>
                            <h1>Digital College</h1>
                        </Box>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <Box sx={{ justifyContent: 'flex-start', display: 'flex', flexDirection: 'row', alignItems: 'center'  }}>
                            <img className="sm-icons" src={fbIcon} alt=""/>
                            <img className="sm-icons" src={instagramIcon} alt=""/>
                            <img className="sm-icons" src={twitterIcon} alt=""/>
                        </Box>
                    </div>

                    <div>
                        <h3>Informação</h3>
                        <p>Sobre Drip Store</p>
                        <p>Segurança</p>
                        <p>Wishlist</p>
                        <p>Blog</p>
                        <p>Trabalhe conosco</p>
                        <p>Meus pedidos</p>
                    </div>

                    <div>
                        <h3>Categorias</h3>
                        <p>Camisetas</p>
                        <p>Calças</p>
                        <p>Bonés</p>
                        <p>Headphones</p>
                        <p>Tênis</p>
                    </div>

                    <div className="contact-footer">
                        <h3>Contato</h3>
                        <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                        <p>(85) 3051-3411</p>
                    </div>
                </Box>

                <hr className="line-footer"/>

                <Box sx={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', py: 3 }}>
                    @ 2022 Digital College
                </Box>
            </Container>
        </div>
    )
  }