import { Box, Button } from "@mui/material"
import React from "react"

import whiteSneakers from "./img/White-Sneakers.png"
import "./styles.scss"

export default function ProductImages() {
    const [image, setImage] = React.useState(whiteSneakers);
    const [backgroundColor, setBackgroundColor] = React.useState("#E2E3FF");
  
    const changeImage = (newImage, newBackgroundColor) => {
      setImage(newImage);
      setBackgroundColor(newBackgroundColor);
    };
  
    return (
      <div className="productImages">
        <div className="principalImage" style={{backgroundColor}}>
            <img src={image} alt="" />
        </div>
        
        <div className="otherImages">
            <Box sx={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', alignItems: 'center' } }>
                <Button style={{background: "#E2E3FF"}} onClick={() => changeImage(whiteSneakers, "#E2E3FF")}>
                    <img src={whiteSneakers} alt="" style={{width: "100%"}}/>
                </Button>
                <Button style={{background: "#FFE8BC"}} onClick={() => changeImage(whiteSneakers, "#FFE8BC")}>
                    <img src={whiteSneakers} alt="" style={{width: "100%"}}/>
                </Button>
                <Button style={{background: "#FFC0BC"}} onClick={() => changeImage(whiteSneakers, "#FFC0BC")}>
                    <img src={whiteSneakers} alt="" style={{width: "100%"}}/>
                </Button>
                <Button style={{background: "#DEC699"}} onClick={() => changeImage(whiteSneakers, "#DEC699")}>
                    <img src={whiteSneakers} alt="" style={{width: "100%"}}/>
                </Button>
                <Button style={{background: "#E8DFCF"}} onClick={() => changeImage(whiteSneakers, "#E8DFCF")}>
                    <img src={whiteSneakers} alt="" style={{width: "100%"}}/>
                </Button>
            </Box>
        </div>
      </div>
    );
}  