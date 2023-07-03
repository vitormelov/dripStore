import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Container } from '@mui/material';

import './styles.scss'

export default function BasicSelect() {
  const [filtrar, setFiltrar] = React.useState('');

  const handleChange = (event) => {
    setFiltrar(event.target.value);
  };

  return (
    <div className='filterTitle'>
        <Container fixed>
            <Box sx={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', alignItems: 'center' } }>
                <h3>Resultados para: (LINKAR)</h3>
                <div className='filterOrder'>
                    <FormControl>
                            <InputLabel id="demo-simple-select-label">Ordenar por:</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={filtrar}
                                label="Ordernar por:"
                                onChange={handleChange}>
                                <MenuItem value={10}>Mais relavantes</MenuItem>
                                <MenuItem value={20}>Mais baratos</MenuItem>
                                <MenuItem value={30}>Maiores descontos</MenuItem>
                            </Select>
                    </FormControl>
                </div>
            </Box>
        </Container>
    </div>
    
  );
}