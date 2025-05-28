import { Company } from "../../types/company";

 const urlStrapi = 'https://api-credenciamento-desenvolvimento.up.railway.app'; 
//  const urlStrapi = 'http://localhost:8080'; 

export interface ApiResponse<Company> {
    data: Company;
    status: number;
  }
  
  export async function getCompany() {
    const response = await fetch(`${urlStrapi}/api/company/companies`, {
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': token,
    },
    });
    
    const data = await response.json();
    return data;
  }
  
  export async function postCompany(companyData: Company) {
    const response = await fetch(`${urlStrapi}/api/company/companies`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': token,
        },
        body: JSON.stringify({ data: companyData }),
    });
    
    if (!response.ok) {
        throw new Error(`Erro: ${response.status}`);
    }
    
    return await response.json();
}
  
  
  export async function putCompany<T, U>( body: T): Promise<ApiResponse<U>> {
    const response = await fetch(urlStrapi, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return { data, status: response.status };
  }
  
  export async function deleteCompany(id: number) {
    try {
      const response = await fetch(`${urlStrapi}/${id}`, {
        method: 'DELETE',
      });
  
      return response.json();
    } catch (error) {
      console.error('Erro ao deletar empresa:', error);
      throw error;
    }
  }
  