import { useEffect } from 'react'
import styles from './App.module.css'

const API_URL = 'https://api.npoint.io/97d89162575a9d816661';

const LOOKING_CURRENCY = ['u$s', '$']

function App() {

  const getAccountsData = async() => {
    const response = await fetch(API_URL, {
      method: 'GET'
    })

    const data = await response.json();

    console.log(data)
  }

  useEffect(() => {

    getAccountsData();

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
          <button className={styles.account}>
            <p>Cuenta Corriente</p>
            <p>Nro: 872378326704</p>
          </button>

          <button className={styles.account}>
            <p>Cuenta Corriente</p>
            <p>Nro: 872378326704</p>
          </button>

          <button className={styles.account}>
            <p>Cuenta Corriente</p>
            <p>Nro: 872378326704</p>
          </button>

          <button className={styles.account}>
            <p>Cuenta Corriente</p>
            <p>Nro: 872378326704</p>
          </button>

          <button className={styles.account}>
            <p>Cuenta Corriente</p>
            <p>Nro: 872378326704</p>
          </button>

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
