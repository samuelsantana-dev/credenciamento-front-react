import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Button, IconButton, Snackbar, Alert } from '@mui/material';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { deleteCompany, getCompany } from '../../api/company/company';
import { Company } from '../../types/company';

export default function DataCompaniesTable() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const navigate = useNavigate();

  function handleNavigate(companyId: string | number, nameCompany: string | number) {
    navigate(`/company/${companyId}/employees/${nameCompany}`);
  }
  async function handleDeleteCompany(id: number) {
    try {
        await deleteCompany(id);
        setCompanies((prev) => prev.filter((company) => company.id !== id));
        setSuccessOpen(true);
    } catch (error) {
      console.error('Delete error:', error);
      setErrorOpen(true);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getCompany();
        console.log('Dados recebidos:', response);
        setCompanies(response);
      } catch (error) {
        console.error('Erro ao buscar empresas:', error);
      }
    }

    fetchData();
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name_company', headerName: 'Nome da empresa', width: 200 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'cnpj_company', headerName: 'CNPJ', width: 150 },
    { field: 'telephone', headerName: 'Número', width: 150 },
    { field: 'address', headerName: 'Endereço', width: 150 },
    { field: 'foundation_date', headerName: 'Data de fundação', width: 150 },
    {
      field: 'actions',
      headerName: 'Ações',
      width: 150,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <div>
          <IconButton aria-label="edit" size="small" color="primary">
            <FontAwesomeIcon icon={faEdit} />
          </IconButton>
          <IconButton
            aria-label="delete"
            size="small"
            color="error"
            onClick={() => handleDeleteCompany(params.row.documentId)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </IconButton>
          <Button onClick={() => handleNavigate(params.row.id, params.row.name_company)}>
            <IconButton aria-label="view" size="small">
              Redirect
            </IconButton>
          </Button>
        </div>
      ),
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <>
      <Paper sx={{ height: 420, width: '100%', p: 2 }}>
        <h1>Todas as empresas</h1>
        <DataGrid
          rows={companies}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>

      {/* Snackbar de sucesso */}
      <Snackbar
        open={successOpen}
        autoHideDuration={3000}
        onClose={() => setSuccessOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setSuccessOpen(false)} severity="success" sx={{ width: '100%' }}>
          Empresa deletada com sucesso!
        </Alert>
      </Snackbar>

      {/* Snackbar de erro */}
      <Snackbar
        open={errorOpen}
        autoHideDuration={3000}
        onClose={() => setErrorOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setErrorOpen(false)} severity="error" sx={{ width: '100%' }}>
          Ocorreu um erro ao deletar a empresa.
        </Alert>
      </Snackbar>
    </>
  );
}
