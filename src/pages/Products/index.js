import { Container, Box } from "@mui/material"
import Filter from "../../Components/Filter"
import FilterTitle from "../../Components/FilterTitle"
import HotProducts from "../../Components/HotProducts"

export default function Products() { 
    return (
      <div style={{background: "#F9F8FE", padding: "20px 0"}}>
        <Container>
          <FilterTitle/>

          <Box sx={{ justifyContent: 'flex-start', display: 'flex', flexDirection: 'row'} }>
            <Filter/>

            <HotProducts/>
          </Box>
        </Container>
      </div>
    )
  }