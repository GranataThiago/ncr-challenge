import PropTypes from 'prop-types'

export const AccountDetails = ({ account }) => {

    const accountCurrency = account.moneda === 'u$s' ? 'en dolares' : 'en pesos';
    const accountType = account.tipo_letras === 'CA' ? `Caja de Ahorro ${accountCurrency}` : `Cuenta Corriente`;


    return (
        <div>
            <p>Saldo de la cuenta: ${account.saldo}</p>
            <p>Tipo de cuenta: {accountType}</p>
            <p>Número de cuenta: {account.n}</p>
        </div>
    )
}

AccountDetails.propTypes = {
    account: PropTypes.object
}