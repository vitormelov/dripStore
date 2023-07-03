import * as React from 'react';
import { Box, Button, Rating, Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

import "./styles.scss"

export default function ProductInfo() { 

  
    const [selectedColor, setSelectedColor] = React.useState(null);

    const handleColorClick = (color) => {
      setSelectedColor(color);
    };

    return (
      <div className='productInfo'>
        <h3>Tênis Nike Revolution 6 Next Nature Masculino</h3>
        <p>Casual | Nike | REF:38416711</p>

        <Box sx={{ justifyContent: 'flex-start', display: 'flex', flexDirection: 'row', alignItems: 'center'} }>
          <Stack spacing={1}>
            <Rating name="half-rating" defaultValue={4} precision={0.5} />
          </Stack>  

          <p><span>4,7<StarIcon sx={{ fontSize: 15}}/></span></p>
          <p>(90 avaliações)</p>
        </Box>
        
        <div>
          <h3>R$ 219,00</h3>
          <p>219,00</p>
        </div>

        <h4>Descrição do produto</h4>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

        <h4>Tamanho</h4>

        <div className='productSize'>
          <Box sx={{ justifyContent: 'flex-start', display: 'flex', flexDirection: 'row', alignItems: 'center'} }>
              <Button>39</Button>
              <Button>40</Button>
              <Button>41</Button>
              <Button>42</Button>
              <Button>43</Button>
          </Box>
        </div>

        <h4>Cor</h4>

        <div className='productColor'>
          <div className={`productColor1 ${selectedColor === 'color1' ? 'borderOn' : ''}`}>
            <Button style={{background: "#6FEEFF"}} onClick={() => handleColorClick('color1')}></Button>
          </div>
          <div className={`productColor2 ${selectedColor === 'color2' ? 'borderOn' : ''}`}>
            <Button style={{background: "#FF6969"}} onClick={() => handleColorClick('color2')}></Button>
          </div>
          <div className={`productColor3 ${selectedColor === 'color3' ? 'borderOn' : ''}`}>
            <Button style={{background: "#5E5E5E"}} onClick={() => handleColorClick('color3')}></Button>
          </div>
          <div className={`productColor4 ${selectedColor === 'color4' ? 'borderOn' : ''}`}>
            <Button style={{background: "#6D70B7"}} onClick={() => handleColorClick('color4')}></Button>
          </div>
        </div>

        <div className='buyButton'>
          <Button variant='contained'>COMPRAR</Button>
        </div> 
      </div>
    )
  }