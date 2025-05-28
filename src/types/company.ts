export interface Company {
    id?: number;
    documentId?: string;
    name_company: string;
    cnpj_company: number;
    address: string;
    telephone: number;
    email: string;
    foundation_date: Date | string | null;
  }
  