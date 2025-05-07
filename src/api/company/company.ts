import { Company } from "../../types/company";

 const urlStrapi = 'https://strapi-credenciamento.onrender.com/api/register-companies'; 
// export const urlStrapi = 'http://localhost:1337/api/register-companies'; 
export const token = 'Bearer 2cfc4fbffacd43a2396ed3d07724f620f07aa37c6299f1e7c0e2030334fe56718c3389b871d6e7e20bcca5056dd8896dab93be033a7efb41aa37c4acc1ae7bff8e18abcf49ed89dfa4cefb483150796d1f7d3f963c6dd2703f19a785469ceb1303d2bdc0eb824a6eaf94c04a712100e3da4dd954fceb5bfc822814434cc76419' 

export interface ApiResponse<Company> {
    data: Company;
    status: number;
  }
  
  export async function getCompany() {
    const response = await fetch(urlStrapi, {
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': token,
    },
    });
    
    const data = await response.json();
    return data;
  }
  
  export async function postCompany(companyData: Company) {
    const response = await fetch(urlStrapi, {
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
  
      const data = await response.json();
  
      if (!response.ok) {
        console.error('Erro ao deletar empresa:', data.message);
        throw new Error(data.message || 'Erro ao deletar a empresa');
      }
  
      return { data, status: response.status };
    } catch (error) {
      console.error('Erro ao deletar empresa:', error);
      throw error;
    }
  }
  