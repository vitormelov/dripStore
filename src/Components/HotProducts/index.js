import React from "react";
import { Box, Container } from "@mui/material";
import "./styles.scss"
import hotShoes from './img/hotShoes.png'

export default function HotProducts() {
    const [items, setItems] = React.useState([]); 

    React.useEffect(() => {    
        fetch('http://localhost:8000/hotProducts')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);


    const Card = (props) => {

        return (
            <Box>
                <div className="card">
                    <div>
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
                        <h4><span>{props.price && "$"}{props.price}</span></h4>
                    </div>
                </div>
            </Box>
        )
    }

    return (
        <Container fixed>
            <div className="hotProducts">
                
                <h2>Produtos em alta</h2>

                <Box sx={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' } }>
                    {items.map(cada => (
                        <Card discount={cada.discount} image={cada.image} type={cada.type} title={cada.title} price={cada.price}/>
                    ))}
                </Box>
            </div>
        </Container>
    )
}