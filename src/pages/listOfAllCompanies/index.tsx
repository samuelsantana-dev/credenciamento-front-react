import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Button, IconButton } from '@mui/material';
import { faTrash, faEdit  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

export default function DataCompaniesTable() {
  const navigate = useNavigate();
  
  function handleNavigate(companyId: string | number, nameCompany: string | number){
    console.log('teste')
    navigate(`/company/${companyId}/employees/${nameCompany}`);
  }
  
  const columns: GridColDef[] = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'lastName', headerName: 'Nome da empresa', width: 200 },
      { field: 'firstName', headerName: 'Marca da empresa', width: 250 },
      {
        field: 'cnpj',
        headerName: 'CNPJ',
        width: 150,
      },
      { field: 'segment', headerName: 'Setor', width: 150 },
      {
        field: 'fullCompanyName',
        headerName: 'Full Company Name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 350,
      },
      {
        field: 'actions',
        headerName: 'Actions',
        width: 120,
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        renderCell: () => {        
         return ( <div>
            <IconButton aria-label="edit" size="small" color="primary">
              <FontAwesomeIcon icon={faEdit} />
            </IconButton>
            <IconButton aria-label="delete" size="small" color="error">
              <FontAwesomeIcon icon={faTrash} />
            </IconButton>
            <Button onClick={() => handleNavigate(1, 'teste')}>
              <IconButton 
                aria-label="view" 
                size="small" 
              >
              Redirect
            </IconButton>
            </Button>
            
          </div>)
      },
      },
    ];
  
  const rows = [
      { id: 1, lastName: 'Tech Solutions Inc.', firstName: 'Soluções Tecnológicas Ltda.', cnpj: '01.234.567/0001-89', segmento: 'Tecnologia' },
      { id: 2, lastName: 'Alimentos Deliciosos S.A.', firstName: 'Indústria de Alimentos Saborosos S.A.', cnpj: '98.765.432/0002-10', segmento: 'Alimentos' },
      { id: 3, lastName: 'Construções Master', firstName: 'Construtora Master Eireli', cnpj: '11.222.333/0003-45', segmento: 'Construção Civil' },
      { id: 4, lastName: 'Moda Bella', firstName: 'Comércio de Vestuário Bella Ltda.', cnpj: '44.555.666/0004-78', segmento: 'Moda' },
      { id: 5, lastName: 'Educação Inovadora', firstName: 'Instituto Educacional Inovar S/C Ltda.', cnpj: '77.888.999/0005-01', segmento: 'Educação' },
      { id: 6, lastName: 'Saúde Bem-Estar', firstName: 'Clínica Médica Bem Estar S/S', cnpj: '22.333.444/0006-56', segmento: 'Saúde' },
      { id: 7, lastName: 'Transportes Rápidos', firstName: 'Empresa de Logística Rápida Ltda.', cnpj: '55.666.777/0007-89', segmento: 'Transporte e Logística' },
      { id: 8, lastName: 'Energia Sustentável', firstName: 'Geração de Energia Verde S.A.', cnpj: '88.999.000/0008-12', segmento: 'Energia' },
      { id: 9, lastName: 'Consultoria Expert', firstName: 'Consultoria Empresarial Expert Ltda.', cnpj: '33.444.555/0009-23', segmento: 'Consultoria' },
    ];
  
  const paginationModel = { page: 0, pageSize: 5 };
  
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
        <h1>Todas as empresas</h1>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}