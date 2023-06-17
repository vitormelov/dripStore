import { Box, Button } from "@mui/material";

import spotlightShoes from "./img/spotlight-shoes.png"

import "./styles.scss"

export default function Spotlight() {
    return (
        <div className="spotlight">
            <Box sx={{ justifyContent: 'space-evenly', display: 'flex', flexDirection: 'row', alignItems: 'center' } }>
                <div className="spotlightImg">
                    <img src={spotlightShoes} alt=""></img>
                </div>
                
                <div className="spotlightText">
                    <p>Oferta especial</p>
                    <h2>Air Jordan edição de colecionador</h2>
                    <p><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</span></p>
                    <Button variant="contained">Ver oferta</Button>
                </div>
            </Box>
        </div>
    )
}