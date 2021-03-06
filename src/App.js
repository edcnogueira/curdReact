import { useState } from 'react'
import './css/button.css'
import './css/main.css'
import './css/modal.css'
import './css/records.css'


function App() {
  const [modal, setModal] = useState('modal')

  
  
  
  return (
    <div className="App">
      <header>
          <h1 className="header-titlle">Cadastro de Clientes</h1>
      </header>
      <main>
        <button onClick={() => setModal('active')} type="button" className="button blue mobile" id="cadastrarCliente">Cadastrar cliente</button>
        <table id="tableClient" className="records">
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Celular</th>
              <th>Cidade</th>
              <th>Ação</th>
            </tr>
          </thead>
        </table>

        <div className={modal} id="modal">
          <div className="modal-content">
            <header className="modal-header">
              <h2>Novo Cliente</h2>
              <span onClick={() => setModal('modal')} className={modal} id="modalClose">&#10006;</span>
            
            </header>
            <form>
              <input id="nome" type="text" data-index="new" className="modal-field" placeholder="Nome do Cliente" required></input>
              <input id="email" type="email" className="modal-field" placeholder="e-mail do Cliente" required></input>
              <input id="celular" type="text" className="modal-field" placeholder="Celular do Cliente" required></input>
              <input id="cidade" type="text" className="modal-field" placeholder="Cidade do Cliente" required></input>
            </form>

            <footer className='modal-footer'>
              <button id="save" className='button green'>Salvar</button>
              <button id="cancel" className='button blue'>Cancelar</button>

            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
