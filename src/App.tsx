import './App.css'
import { RegisterEmployess } from './pages/registerEmployees'
import { CompanyRegisterForm } from './pages/registerCompany'
import { ListOfAllCompanies } from './pages/listOfAllCompanies'
import { EmployeeListCompany } from './pages/listCompanyEmployees'

function App() {

  return (
    <>
      <RegisterEmployess />
      <CompanyRegisterForm />
      <ListOfAllCompanies />
      <EmployeeListCompany />
    </>
  )
}

export default App
