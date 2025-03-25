import React, { useState } from 'react';
import { TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';

interface Employee {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  hireDate: string;
}

const employees: Employee[] = [
  { id: 1, name: 'João Silva', role: 'Desenvolvedor', email: 'joao.silva@example.com', phone: '(11) 1234-5678', hireDate: '2020-06-15' },
  { id: 2, name: 'Maria Oliveira', role: 'Designer', email: 'maria.oliveira@example.com', phone: '(21) 9876-5432', hireDate: '2019-02-20' },
  { id: 3, name: 'Carlos Pereira', role: 'Analista de Sistemas', email: 'carlos.pereira@example.com', phone: '(31) 2345-6789', hireDate: '2018-04-10' },
  { id: 4, name: 'Ana Souza', role: 'Gerente de Projetos', email: 'ana.souza@example.com', phone: '(41) 3456-7890', hireDate: '2021-08-25' },
];

export function EmployeeListCompany() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>(employees);

  // Função para filtrar os funcionários com base no termo de busca
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredEmployees(
      employees.filter(
        (employee) =>
          employee.name.toLowerCase().includes(term) ||
          employee.role.toLowerCase().includes(term) ||
          employee.email.toLowerCase().includes(term) ||
          employee.phone.includes(term)
      )
    );
  };

  return (
    <Paper sx={{ padding: 2 }}>
      <TextField
        variant="outlined"
        label="Buscar Funcionários"
        fullWidth
        value={searchTerm}
        onChange={handleSearch}
        // InputProps={{
        //   startAdornment: <SearchIcon />,
        // }}
        sx={{ marginBottom: 2 }}
      />
      <h1>
        Funcionario de uma empresa especifica
      </h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Cargo</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Telefone</TableCell>
              <TableCell>Data de Contratação</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredEmployees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.role}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.phone}</TableCell>
                <TableCell>{employee.hireDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
