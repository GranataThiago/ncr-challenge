import PropTypes from 'prop-types'

export const AccountDetails = ({ account }) => {
  return (
    <div>
        <p>Saldo de la cuenta: ${account.saldo}</p>
        <p>Tipo de cuenta: {account.tipo_letras === 'CA' ? 'Caja de Ahorro' : 'Cuenta Corriente'}</p>
        <p>Número de cuenta: {account.n}</p>
    </div>
  )
}

AccountDetails.propTypes = {
    account: PropTypes.object
}