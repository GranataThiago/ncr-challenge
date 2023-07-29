import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react';
import { AccountDetails, getFormattedAccountType } from "./AccountDetails";

describe('AccountDetails', () => {

    test('should return correct account type as string', () => {
        expect(getFormattedAccountType('u$s', 'CA')).toBe('Caja de Ahorro en dolares');

        expect(getFormattedAccountType('$', 'CA')).toBe('Caja de Ahorro en pesos');

        expect(getFormattedAccountType('$', 'CC')).toBe('Cuenta Corriente');

        expect(getFormattedAccountType('u$s', 'CC')).toBe('Cuenta Corriente');
    })

    test('should display all account details', () => {
        render(<AccountDetails account={{
            "e": "1",
            "n": "872378326703",
            "t": "01",
            "saldo": "745",
            "moneda": "$",
            "tipo_letras": "CC"
        }}/>)
        expect(screen.getByText(/Saldo de la cuenta/i)).toBeDefined();
        expect(screen.getByText(/Tipo de cuenta/i)).toBeDefined();
        expect(screen.getByText(/Número de cuenta/i)).toBeDefined();
    })

})