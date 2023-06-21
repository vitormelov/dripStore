import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Button, Box, Container, Paper } from '@mui/material'
import stepperShoes from './img/stepperShoes.png'
import dec1 from './img/dec1.png'

import './styles.scss'

export default function Stepper(props)
{
    var items = [
        {
            information1: "Melhores ofertas personalizadas",
            information2: "Queima de estoque Nike 🔥",
            information3: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur."
        },
        {
            information1: "Melhores ofertas personalizadas",
            information2: "Queima de estoque Nike 🔥",
            information3: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur."
        },
        {
            information1: "Melhores ofertas personalizadas",
            information2: "Queima de estoque Nike 🔥",
            information3: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur."
        },
        {
            information1: "Melhores ofertas personalizadas",
            information2: "Queima de estoque Nike 🔥",
            information3: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur."
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <div className='stepper'>
            <Paper>
                <Container>
                    <Box sx={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', alignItems: 'center' } }>
                        <div className='stepperInfo'>
                            <p>{props.item.information1}</p>
                            <h1>{props.item.information2}</h1>
                            <p><span>{props.item.information3}</span></p>
                            <Button variant="contained">Ver ofertas</Button>
                        </div>
                        <div className='stepperImg'>
                            <div className='stepperShoes'>
                                <img src={stepperShoes} alt=''/>
                            </div>
                            <div className='imgDec'>
                                <img src={dec1} alt=''/>
                            </div>
                        </div>
                    </Box>
                </Container>
            </Paper>
        </div>
    )
}