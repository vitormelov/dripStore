import { Box, Container } from "@mui/material";
import ProductImages from "../../Components/ProductImages";
import ProductInfo from "../../Components/ProductInfo";

export default function Orders() { 
    return (
      <div style={{background: '#F9F8FE', padding: '30px 0'}}>
        <Container>
          <Box sx={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row'} }>
            <ProductImages/>

            <ProductInfo/>
          </Box>
        </Container>
      </div>
    )
  }