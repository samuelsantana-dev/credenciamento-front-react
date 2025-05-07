import { useForm } from 'react-hook-form';
import { TextField, Button, Grid, Box, Typography, InputAdornment, CircularProgress, Alert, Snackbar } from '@mui/material';
import { postCompany } from '../../api/company/company';
import { Company } from '../../types/company';
// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function CompanyRegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Company>();

  const [isLoading, setIsLoading] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  // const navigate = useNavigate();

  const onSubmit = async (data: Company) => {
    setIsLoading(true);

    const formattedData = {
      ...data,
      foundation_date: data.foundation_date ? new Date(data.foundation_date) : null,
    };

    try {
      await postCompany(formattedData);
      setSuccessOpen(true);
      reset();
    } catch (error) {
      console.error('Erro ao registrar empresa:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Registro de Empresa
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nome da Empresa"
              variant="outlined"
              fullWidth
              required
              {...register('name_company', { required: 'Nome da empresa é obrigatório' })}
              error={!!errors.name_company}
              helperText={errors.name_company?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="CNPJ"
              variant="outlined"
              fullWidth
              required
              type="number"
              {...register('cnpj_company', { required: 'CNPJ é obrigatório' })}
              error={!!errors.cnpj_company}
              helperText={errors.cnpj_company?.message}
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
              {...register('address', { required: 'Endereço é obrigatório' })}
              error={!!errors.address}
              helperText={errors.address?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Telefone"
              variant="outlined"
              fullWidth
              required
              type="number"
              {...register('telephone', { required: 'Telefone é obrigatório' })}
              error={!!errors.telephone}
              helperText={errors.telephone?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
              type="email"
              {...register('email', { required: 'Email é obrigatório' })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Data de Fundação"
              variant="outlined"
              fullWidth
              required
              type="date"
              {...register('foundation_date', { required: 'Data de fundação é obrigatória' })}
              error={!!errors.foundation_date}
              helperText={errors.foundation_date?.message}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                max: new Date().toISOString().split('T')[0],
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" disabled={isLoading}>
              {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Registrar Empresa'}
            </Button>
          </Grid>
        </Grid>
      </form>

      <Snackbar
        open={successOpen}
        autoHideDuration={3000}
        onClose={() => setSuccessOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setSuccessOpen(false)} severity="success" sx={{ width: '100%' }}>
          Empresa cadastrada com sucesso!
        </Alert>
      </Snackbar>
    </Box>
  );
}
