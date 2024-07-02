import { create, useStore } from 'zustand';

export interface Empresa {
  cnpj: string,
  razaoSocial?: string,
  nomeFantasia?: string,
  inscricaoMunicipal?: string,
  inscricaoEstadual?: string,
  dataAbertura?: string,
  email?: string,
  complemento?: string,
  numero?: number,
  telefone?: string,
  dataCadastro?: string
}

interface empresaStore{
  empresa: Empresa,
  empresaEscolhida: Empresa,
  empresas: Empresa[],
  getEmpresa: (empresa: Empresa) => void,
  postEmpresa: (empresa: Empresa) => void,
  patchEmpresa: (empresa: Empresa) => void,
  deleteEmpresa: (id: string) => void,

  getSaleData: (id: string) => void,
}

export const empresaStore = create<empresaStore>((set) => {
  return {

    empresa: {cnpj:""},
    empresaEscolhida: {cnpj:""},
    empresas: [],
    
    getUserDataDBAll: async () => {
      try {
        const response = await fetch('http://localhost:4000/api/usuario/getAll',
          { method: 'GET', });
        const data = await response.json();
        if (data && data.length > 0) {
          useStore.setState({ empresaEscolhida: data });
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  }
})