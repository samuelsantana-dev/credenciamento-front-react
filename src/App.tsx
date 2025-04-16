import './App.css';
import { RegisterEmployess } from './pages/registerEmployees';
import { CompanyRegisterForm } from './pages/registerCompany';
import { ListOfAllCompanies } from './pages/listOfAllCompanies';
import { EmployeeListCompany } from './pages/listCompanyEmployees';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/homePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register-employee" element={<RegisterEmployess />} />
        <Route path="/register-company" element={<CompanyRegisterForm />} />
        <Route path="/companies" element={<ListOfAllCompanies />} />
        <Route path="/company/:companyId/employees" element={<EmployeeListCompany />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;