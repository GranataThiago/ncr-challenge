import PropTypes from 'prop-types'

export const getFormattedAccountType = (currency, type) => {
    const accountCurrency = currency === 'u$s' ? 'en dolares' : 'en pesos';

    return type === 'CA' ? `Caja de Ahorro ${accountCurrency}` : `Cuenta Corriente`;
}

export const AccountDetails = ({ account }) => {

    const accountType = getFormattedAccountType(account.moneda, account.tipo_letras);

    return (
        <div>
            <p>Saldo de la cuenta: ${isNaN(account.saldo) ? 0 : account.saldo}</p>
            <p>Tipo de cuenta: {accountType}</p>
            <p>Número de cuenta: {account.n}</p>
        </div>
    )
}

AccountDetails.propTypes = {
    account: PropTypes.object
}