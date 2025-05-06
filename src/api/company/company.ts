import { Company } from "../../types/company";
import { urlStrapi, token } from "./routes-company";

export interface ApiResponse<Company> {
    data: Company;
    status: number;
  }
  
  export async function getCompany<T extends Company[]>(this: void): Promise<ApiResponse<T>> {
    const response = await fetch(urlStrapi, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    },
    });
    
    const data = await response.json();
    return data as ApiResponse<T>;
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
  