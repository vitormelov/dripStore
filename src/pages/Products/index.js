import { Container } from "@mui/material"
import Filter from "../../Components/Filter"
import FilterTitle from "../../Components/FilterTitle"
import HotProducts from "../../Components/HotProducts"

export default function Products() { 
    return (
      <div>
        <Container>
          <FilterTitle/>

          <div className="products">
            <Filter/>

            <HotProducts/>
          </div>
        </Container>
      </div>
    )
  }