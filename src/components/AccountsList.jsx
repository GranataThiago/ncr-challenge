import { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from './ui/Button';
import styles from './AccountList.module.css'

export const AccountsList = ({accounts, onAccountSelected}) => {

    const [page, setPage] = useState(1);
    const [indexes, setIndexes] = useState({
        first: 0,
        last: 5,
    });

    const paginate = (total, newPage, itemsPerPage = 4) => {
        if(newPage === 1) return { firstIndex: 0, lastIndex: 5 };
        const firstIndex = page > newPage ? indexes.first - itemsPerPage : indexes.last;
        const lastIndex = Math.max(0, Math.min(firstIndex + itemsPerPage, total));
      
        return { firstIndex, lastIndex };
    }

    const onPageChanged = (isNext = false) => {
        const newPage = (isNext) ? page + 1 : page - 1;
        const { length } = accounts;
        const { firstIndex, lastIndex } = paginate(length, newPage)
        setPage(newPage);
        setIndexes({ first: firstIndex, last: lastIndex });
    }

    const currentAccounts = accounts.slice(indexes.first, indexes.last);
    
    return (
        <div className={styles.accountsList}>
            {
                page !== 1 && 
                <Button data-testid='back-page' onClick={() => onPageChanged(false)}>
                    <p>&#171; Opciones anteriores</p>
                </Button>
            }

            {
                currentAccounts?.map((account, index) => (
                    <Button onClick={() => onAccountSelected(account)} key={index}>
                        <p>{account.tipo_letras === 'CA' ? 'Caja de Ahorro' : 'Cuenta Corriente'}</p>
                        <p>Nro: {account.n}</p>
                    </Button>
                ))
            }

            {
            accounts.length !== indexes.last && 
            <Button data-testid='next-page' onClick={() => onPageChanged(true)}>
                <p>Más opciones &#187;</p>
            </Button>
            }
        </div>
        
    )
}

AccountsList.propTypes = {
    accounts: PropTypes.array,
    onAccountSelected: PropTypes.func
}

