import { useState, useEffect } from 'react'
import styles from './App.module.css'
import { Button } from './components/ui/Button';
import { AccountsList } from './components/AccountsList';
import { AccountDetails } from './components/AccountDetails';

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

function App() {

  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(null);

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

  const onLeaveClick = () => {
    setSelectedAccount(null);
  }

  const onAccountSelected = (account) => {
    setSelectedAccount(account);
  }

  return (
    <>
      <header className={styles.heading}>
        <h1>NCR Challenge</h1>
      </header>
      <main className={styles.resume}>
        <section className={styles.resumeHeading}>
          <p style={{fontSize: '1.5rem'}}>Consulta de Saldo</p>
          <p style={{fontWeight: 'bold'}}> {selectedAccount ? 'Este es tu saldo actual' : 'Seleccione la Cuenta a Consultar'}</p>
        </section>

        {
          selectedAccount 
          ? <AccountDetails account={selectedAccount} />
          : <AccountsList accounts={accounts} onAccountSelected={onAccountSelected} />
        }
        
        <footer className={styles.footer}>
          <Button onClick={onLeaveClick}>Salir</Button>
        </footer>

      </main>
    </>
  )
}

export default App
