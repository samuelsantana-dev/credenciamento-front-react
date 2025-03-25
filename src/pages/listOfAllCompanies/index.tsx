import React, { useState } from 'react';
import { TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';

interface Company {
  id: number;
  companyName: string;
  cnpj: string;
  email: string;
  phone: string;
  foundationDate: string;
}

const companies: Company[] = [
  { id: 1, companyName: 'Empresa A', cnpj: '00.000.000/0001-00', email: 'empresaA@example.com', phone: '(11) 1234-5678', foundationDate: '2000-01-01' },
  { id: 2, companyName: 'Empresa B', cnpj: '00.000.000/0001-01', email: 'empresaB@example.com', phone: '(21) 9876-5432', foundationDate: '2005-02-15' },
  { id: 3, companyName: 'Empresa C', cnpj: '00.000.000/0001-02', email: 'empresaC@example.com', phone: '(31) 2345-6789', foundationDate: '2010-03-20' },
  { id: 4, companyName: 'Empresa D', cnpj: '00.000.000/0001-03', email: 'empresaD@example.com', phone: '(41) 3456-7890', foundationDate: '2015-05-30' },
];

export function ListOfAllCompanies(){
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>(companies);

  // Função para filtrar empresas com base no termo de busca
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredCompanies(
      companies.filter(
        (company) =>
          company.companyName.toLowerCase().includes(term) ||
          company.cnpj.includes(term) ||
          company.email.toLowerCase().includes(term) ||
          company.phone.includes(term)
      )
    );
  };

  return (
    <Paper sx={{ padding: 2 }}>
      <TextField
        variant="outlined"
        label="Buscar Empresas"
        fullWidth
        value={searchTerm}
        onChange={handleSearch}
        // InputProps={{
        //   startAdornment: <SearchIcon />,
        // }}
        sx={{ marginBottom: 2 }}
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome da Empresa</TableCell>
              <TableCell>CNPJ</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Telefone</TableCell>
              <TableCell>Data de Fundação</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCompanies.map((company) => (
              <TableRow key={company.id}>
                <TableCell>{company.companyName}</TableCell>
                <TableCell>{company.cnpj}</TableCell>
                <TableCell>{company.email}</TableCell>
                <TableCell>{company.phone}</TableCell>
                <TableCell>{company.foundationDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
