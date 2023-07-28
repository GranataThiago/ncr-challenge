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
  
  return true;
}

function App() {

  const [accounts, setAccounts] = useState([]);
  const [length, setLength] = useState(0);


  useEffect(() => {
    fetch(API_URL, {
      method: 'GET'
    })
    .then(resp => resp.json())
    .then(data => {
        const filteredAccounts = data.cuentas.filter(account => isDesiredAccount(account));
        setAccounts(filteredAccounts);
        setLength(data.cuentas.length);
    });
  }, [])


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

        <div className={styles.accountsList}>
          {
            accounts.slice(0, 5).map(account => (
              <button className={styles.account} key={account.n}>
                <p>Cuenta Corriente</p>
                <p>Nro: {account.n}</p>
              </button>
            ))
          }


          <button className={styles.account}>
            <p>Más opciones &#187;</p>
          </button>
        </div>

        <hr />

        <footer className={styles.footer}>
          <button>Salir</button>
        </footer>

      </main>
    </>
  )
}

export default App
