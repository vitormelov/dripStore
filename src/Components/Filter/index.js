import { Checkbox, FormControl, FormControlLabel, FormGroup, Radio, RadioGroup } from "@mui/material";

import './styles.scss'

export default function Filter() { 
    return (
        <div className="filter">
            <div className="filterInfo">
                <h2>Filtrar por</h2>

                <hr/>

                <h3>Marca</h3>

                <FormGroup>
                    <FormControlLabel control={<Checkbox/>} label="Adidas" />
                    <FormControlLabel control={<Checkbox/>} label="Calenciaga" />
                    <FormControlLabel control={<Checkbox/>} label="K-Swiss" />
                    <FormControlLabel control={<Checkbox/>} label="Nike" />
                    <FormControlLabel control={<Checkbox/>} label="Puma" />
                </FormGroup>

                <h3>Categoria</h3>

                <FormGroup>
                    <FormControlLabel control={<Checkbox/>} label="Esporte e lazer"/>
                    <FormControlLabel control={<Checkbox/>} label="Casual"/>
                    <FormControlLabel control={<Checkbox/>} label="Utilitário"/>
                    <FormControlLabel control={<Checkbox/>} label="Corrida"/>
                </FormGroup>

                <h3>Gênero</h3>

                <FormGroup>
                    <FormControlLabel control={<Checkbox/>} label="Masculino"/>
                    <FormControlLabel control={<Checkbox/>} label="Feminino"/>
                    <FormControlLabel control={<Checkbox/>} label="Unissex"/>
                </FormGroup>

                <h3>Estado</h3>

                <FormControl>
                    <RadioGroup>
                        <FormControlLabel value="new" control={<Radio/>} label="Novo" />
                        <FormControlLabel value="used" control={<Radio/>} label="Usado" />
                    </RadioGroup>
                </FormControl>
            </div>
        </div>
        
    )
  }