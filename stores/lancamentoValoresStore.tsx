import { create, useStore } from 'zustand';

export interface LancamentoValores {
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

interface lancamentoValorStore{
  lancamentoValor: LancamentoValores,
  lancamentoValorEscolhido: LancamentoValores,
  lancamentoValores: LancamentoValores[],
  getLancamentoValores: (lancamentoValor: LancamentoValores) => void,
  postLancamentoValores: (lancamentoValor: LancamentoValores) => void,
  patchLancamentoValores: (lancamentoValor: LancamentoValores) => void,
  deleteLancamentoValores: (cnpj: string) => void,

  getSaleData: (id: string) => void,
}

export const empresaStore = create<lancamentoValorStore>((set) => {
  return {

    lancamentoValor: {cnpj:""},
    lancamentoValorEscolhido: {cnpj:""},
    lancamentoValores: [],

    getSaleData: (id) => set((state) => ({
      lancamentoValorEscolhido: state.lancamentoValores.filter(item => item.cnpj == id)[0]
    })),
    
    getLancamentoValores: async () => {
      try {
        const response = await fetch('http://localhost:4000/api/usuario/getAll',
          { method: 'GET', });
        const data = await response.json();
        if (data && data.length > 0) {
          empresaStore.setState({ lancamentoValorEscolhido: data });
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
    postLancamentoValores: async (lancamentoValor) => {
      await fetch('http://localhost:4000/api/usuario/create', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(lancamentoValor),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
        })
    },
    patchLancamentoValores: async (lancamentoValor) => {
      await fetch('http://localhost:4000/api/usuario/update', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(lancamentoValor),
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => {
          console.error('Erro:', error);
        });
    },
    deleteLancamentoValores: async (cnpj) => {
      await fetch(`http://localhost:4000/api/usuario/delete/${cnpj}`, {
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