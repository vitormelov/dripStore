import React from "react";
import { Grid, Button, Container } from "@mui/material";
import "./styles.scss"
import camiseta from './img/star-wars-storm-trooper-supreme-shirts-supreme-t-shirt-snoopy-clothing-apparel-t-shirt-text-transparent-png-616696 1.png'

export default function FeaturedCollections() {
    const [items, setItems] = React.useState([]); 

    React.useEffect(() => {    
        fetch('http://localhost:8000/collections')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    const Card = (props) => {
        return (
            <Grid item xs={4}>
                <div className="card">
                    <div>
                        <div className="card-discount">
                            {props.discount}
                            {props.discount && "% OFF"} 
                        </div>
                    
                        <br/>

                        <div className="card-title">
                            {props.text} 
                        </div>

                        <br/>

                        <Button variant="contained">Comprar</Button>
                    </div>

                    <div>
                        <img src={camiseta} alt=''></img>
                    </div>
                </div>
            </Grid>
        )
    }

    return (
        <Container fixed>
            <div className="featured-collections">
                
                <h2>Coleções em Destaque</h2>

                <Grid container spacing={2}>
                    {items.map(cada => (
                        <Card text={cada.title} discount={cada.discount} image={cada.image}/>
                    ))}
                </Grid>
            </div>
        </Container>
    )
}