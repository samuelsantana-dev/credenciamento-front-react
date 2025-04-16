import { useState, ChangeEvent, FormEvent } from 'react';
import { TextField, Button, Grid, Box, Typography, InputAdornment } from '@mui/material';

// Definindo os tipos para os dados da empresa
interface CompanyData {
  companyName: string;
  cnpj: string;
  address: string;
  phone: string;
  email: string;
  foundationDate: string;
}

export function CompanyRegisterForm(){
  const [formData, setFormData] = useState<CompanyData>({
    companyName: '',
    cnpj: '',
    address: '',
    phone: '',
    email: '',
    foundationDate: '',
  });

  // Função para lidar com as mudanças nos campos de input
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Aqui você pode processar o envio do formulário, como uma requisição para uma API
    console.log('Company Registered:', formData);
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
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="CNPJ"
              variant="outlined"
              fullWidth
              required
              name="cnpj"
              value={formData.cnpj}
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
              name="phone"
              value={formData.phone}
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
              name="foundationDate"
              type="date"
              value={formData.foundationDate}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
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
