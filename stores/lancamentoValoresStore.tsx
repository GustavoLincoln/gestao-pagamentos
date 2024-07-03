import { create, useStore } from 'zustand';

export interface LancamentoValores {
  id: number,
  numLancamento?: number,
  empresa?: number,
  tipoLancamento?: string,
  tipoFixo?: boolean,
  descricao?: string,
  valor?: number,
  tipoPagamento?: string,
  vencimento?: string,
  parcelas?: number,
  status?: boolean,
  dataLancamento?: string
}

interface lancamentoValorStore{
  lancamentoValor: LancamentoValores,
  lancamentoValorEscolhido: LancamentoValores,
  lancamentoValores: LancamentoValores[],
  getLancamentoValores: (lancamentoValor: LancamentoValores) => void,
  postLancamentoValores: (lancamentoValor: LancamentoValores) => void,
  patchLancamentoValores: (lancamentoValor: LancamentoValores) => void,
  deleteLancamentoValores: (id: number) => void,

  teste: (id: number) => void,
}

export const empresaStore = create<lancamentoValorStore>((set) => {
  return {

    lancamentoValor: {id:0},
    lancamentoValorEscolhido: {id:0},
    lancamentoValores: [],

    teste: (id) => set((state) => ({
      lancamentoValorEscolhido: state.lancamentoValores.filter(item => item.id == id)[0]
    })),
    
    getLancamentoValores: async () => {
      try {
        const response = await fetch('http://localhost:5168/api/LancamentoValores',
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
      await fetch('http://localhost:5168/api/LancamentoValores', {
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
      await fetch('http://localhost:5168/api/LancamentoValores', {
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
    deleteLancamentoValores: async (id) => {
      await fetch(`http://localhost:5168/api/LancamentoValores/${id}`, {
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