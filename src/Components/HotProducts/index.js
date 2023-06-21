import React from "react";
import { Box, Container } from "@mui/material";
import "./styles.scss"
import hotShoes from './img/hotShoes.png'
import { Link } from "react-router-dom";

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function HotProducts() {
    const [items, setItems] = React.useState([]); 

    React.useEffect(() => {    
        fetch('http://localhost:8000/hotProducts')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);


    const Card = (props) => {

        const hasDiscount = props.discount > 0;

        return (
            <Box>
                <div className="card">
                    <div className="card-card">
                        <div className="card-discount">
                            {props.discount}
                            {props.discount && "% OFF"} 
                        </div>
                        <div className="cardImg">
                            <img src={hotShoes} alt=''></img>
                        </div>
                    </div>
                    <div className="cardDetails">
                        <p>{props.type}</p>
                        <h4>{props.title}</h4>
                        <h4>
                            {hasDiscount && (
                                <span className="old-price">
                                    ${props.price}
                                </span>
                            )}
                            <span className="new-price">
                                ${(
                                    props.price - (props.price * props.discount / 100)
                                )}
                            </span>
                        </h4>
                    </div>
                </div>
            </Box>
        )
    }

    return (
        <div className="hotProducts">
            <Container fixed>
                <Box sx={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' } }>
                    <h2>Produtos em alta</h2>
                    <Link>
                        <p>Ver todos</p> 
                        <ArrowRightAltIcon/>
                    </Link>
                </Box>
                

                <Box sx={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' } }>
                    {items.map(cada => (
                        <Card discount={cada.discount} image={cada.image} type={cada.type} title={cada.title} price={cada.price}/>
                    ))}
                </Box>
            </Container>
        </div>
    )
}