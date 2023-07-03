import { Box, Container } from "@mui/material";
import ProductImages from "../../Components/ProductImages";
import ProductInfo from "../../Components/ProductInfo";

import "./styles.scss"
import HotProducts from "../../Components/HotProducts";

export default function Orders() { 
    return (
      <div className="orders" style={{background: '#F9F8FE', padding: '10px 0'}}>
        <Container>
          <section>
            <p><b>Home</b> / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino</p>
          </section>
          <Box sx={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row'} }>
            <ProductImages/>

            <ProductInfo/>
          </Box>
        </Container>

        <HotProducts/>
      </div>
    )
  }