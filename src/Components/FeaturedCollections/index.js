import React from "react";
import { Grid, Button, Container } from "@mui/material";
import "./styles.scss"

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
                    <div className="card-info">
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
                </div>
            </Grid>
        )
    }

    return (
        <div className="featured-collections">
            <Container fixed>
            
                <h2>Coleções em Destaque</h2>

                <Grid container spacing={2}>
                    {items.map(cada => (
                        <Card text={cada.title} discount={cada.discount} image={cada.image}/>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}