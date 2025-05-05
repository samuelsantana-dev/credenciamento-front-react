import { Company } from "../types/company";

const urlStrapi = 'http://localhost:1337/api/register-companies'; 
const token = '9a33ec7da865bc8ccccdd93364e11d6d83d8dc41585342ad27dcb8d3693b8ebcf8246dd09c36a62fb3db3585a87f37fb05c7038752ffeea2dd630c43bfbd19e542bc65cb7dfc6c1dc724c7164a2a570cf19673c8ad7d3a94b1c059eb01070ef48d62055764a60ab67dd086b7da51e38e241f5efd3890ff63cf10145af670f27e'

export interface ApiResponse<Company> {
    data: Company;
    status: number;
  }
  
  export async function getCompany<T>(): Promise<ApiResponse<T>> {
    const response = await fetch(urlStrapi);
    const data = await response.json();
    return { data, status: response.status };
  }
  
  export async function postCompany(companyData: Company) {
    const response = await fetch(urlStrapi, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
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
  
  export async function deleteCompany<T>(): Promise<ApiResponse<T>> {
    const response = await fetch(urlStrapi, {
      method: 'DELETE',
    });
    const data = await response.json();
    return { data, status: response.status };
  }
  