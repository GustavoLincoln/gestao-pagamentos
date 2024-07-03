import { create, useStore } from 'zustand';

export interface Empresa {
  cnpj: string,
  razaoSocial?: string,
  nomeFantasia?: string,
  inscricaoMunicipal?: string,
  inscricaoEstadual?: string,
  dataAbertura?: string,
  email?: string,
  logradouro?: string,
  cidade?: string,
  estado?: string,
  pais?: string,
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
  deleteEmpresa: (cnpj: string) => void,

  teste: (id: string) => void,
}

export const empresaStore = create<empresaStore>((set) => {
  return {

    empresa: {cnpj:""},
    empresaEscolhida: {cnpj:""},
    empresas: [],

    teste: (id) => set((state) => ({
      empresaEscolhida: state.empresas.filter(item => item.cnpj == id)[0]
    })),
    
    getEmpresa: async () => {
      try {
        const response = await fetch('http://localhost:5168/api/Empresa',
          { method: 'GET', });
        const data = await response.json();
        if (data && data.length > 0) {
          empresaStore.setState({ empresaEscolhida: data });
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
    postEmpresa: async (empresa) => {
      await fetch('http://localhost:5168/api/Empresa', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(empresa),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
        })
    },
    patchEmpresa: async (empresa) => {
      await fetch('http://localhost:5168/api/Empresa', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(empresa),
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => {
          console.error('Erro:', error);
        });
    },
    deleteEmpresa: async (cnpj) => {
      await fetch(`http://localhost:5168/api/Empresa/${cnpj}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => {
          console.error('Erro:', error);
        });
    },
  }
})