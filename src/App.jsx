import { useState, useEffect } from 'react'
import styles from './App.module.css'

const API_URL = 'https://api.npoint.io/97d89162575a9d816661';

const isDesiredAccount = (acc) => {
  if(acc.moneda !== 'u$s' && acc.moneda !== '$'){
    return false;
  }

  if(acc.tipo_letras !== 'CA' && acc.tipo_letras !== 'CC'){
    return false;
  }

  if(acc.n?.trim() === '') return false;
  
  return true;
}

const paginate = (total, page, lastLastIndex, itemsPerPage = 4) => {
  if(page === 1) return { firstIndex: 0, lastIndex: 5 };
  const lastIndex = Math.max(0, Math.min(page * itemsPerPage, total));
  const firstIndex = lastLastIndex;

  return { firstIndex, lastIndex };
}

function App() {

  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [page, setPage] = useState(1);
  const [indexes, setIndexes] = useState({
    first: 0,
    last: 5,
  });


  useEffect(() => {
    fetch(API_URL, {
      method: 'GET'
    })
    .then(resp => resp.json())
    .then(data => {
        const filteredAccounts = data.cuentas.filter(account => isDesiredAccount(account));
        setAccounts(filteredAccounts);
    });
  }, [])

  const onAccountSelected = (account) => {
    setSelectedAccount(account);
  }

  const onLeaveClick = () => {
    setSelectedAccount(null);
  }

  const onPageChanged = (isNext = false) => {
    const newPage = (isNext) ? page + 1 : page - 1;
    const { length } = accounts;
    const { firstIndex, lastIndex } = paginate(length, newPage, indexes.last)
    setPage(newPage);
    setIndexes({ first: firstIndex, last: lastIndex });
  }

  const currentAccounts = accounts.slice(indexes.first, indexes.last);

  console.log({page, indexes, length: accounts.length})

  return (
    <>
      <header className={styles.heading}>
        <h1>NCR Challenge</h1>
      </header>
      <main className={styles.resume}>
        <div className={styles.resumeHeading}>
          <p style={{'fontSize': '1.5rem'}}>Consulta de Saldo</p>
          <p style={{fontWeight: 'bold'}}>Seleccione la Cuenta a Consultar</p>
        </div>
        {
          selectedAccount 
          ? <div>
            <p>Saldo de la cuenta: ${selectedAccount.saldo}</p>
            <p>Tipo de cuenta: {selectedAccount.tipo_letras === 'CA' ? 'Caja de Ahorro' : 'Cuenta Corriente'}</p>
            <p>Número de cuenta: {selectedAccount.n}</p>
          </div>
          : <div className={styles.accountsList}>

            {
            page !== 1 && <button className={styles.account} onClick={() => onPageChanged(false)}>
              <p>&#171; Opciones anteriores</p>
            </button>
            }

          {
            currentAccounts?.map((account, index) => (
              <button onClick={() => onAccountSelected(account)} className={styles.account} key={index}>
                <p>{account.tipo_letras === 'CA' ? 'Caja de Ahorro' : 'Cuenta Corriente'}</p>
                <p>Nro: {account.n}</p>
              </button>
            ))
          }

            {
              accounts.length !== indexes.last && 
              <button className={styles.account} onClick={() => onPageChanged(true)}>
                <p>Más opciones &#187;</p>
              </button>
            }
          </div>
        }
        
        <footer className={styles.footer}>
          <button onClick={onLeaveClick}>Salir</button>
        </footer>

      </main>
    </>
  )
}

export default App
