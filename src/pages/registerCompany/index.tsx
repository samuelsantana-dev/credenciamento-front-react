import { useState, ChangeEvent, FormEvent } from 'react';
import { TextField, Button, Grid, Box, Typography, InputAdornment } from '@mui/material';
import { postCompany } from '../../api/company/company';
import { Company } from '../../types/company';


export function CompanyRegisterForm(){
  const [formData, setFormData] = useState<Company>({
    name_company: '',
    cnpj_company: 0,
    address: '',
    telephone: 0,
    email: '',
    foundation_date: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Converte a string da data para Date apenas no envio
    const dataToSend = {
      ...formData,
      foundation_date: formData.foundation_date ? new Date(formData.foundation_date) : null
    };

    console.log('Company Registered:', dataToSend);
    await postCompany(dataToSend);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Registro de Empresa
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nome da Empresa"
              variant="outlined"
              fullWidth
              required
              name="name_company"
              value={formData.name_company}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="cnpj_company"
              variant="outlined"
              fullWidth
              required
              name="cnpj_company"
              value={formData.cnpj_company}
              onChange={handleChange}
              InputProps={{
                startAdornment: <InputAdornment position="start">00.000.000/0000-00</InputAdornment>,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Endereço"
              variant="outlined"
              fullWidth
              required
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Telefone"
              variant="outlined"
              fullWidth
              required
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
              label="Data de Fundação"
              variant="outlined"
              fullWidth
              required
              name="foundation_date"
              type="date"
              value={formData.foundation_date}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                max: new Date().toISOString().split('T')[0] // Impede datas futuras
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Registrar Empresa
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};
