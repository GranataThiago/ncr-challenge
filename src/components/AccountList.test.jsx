import { fireEvent, render, screen } from "@testing-library/react";
import { test, describe, beforeEach, vi, expect } from "vitest";
import { AccountsList } from "./AccountsList";

describe('AccountsList', () => {
    const accounts = [
        {
            "e": "1",
            "n": "872378326799",
            "t": "02",
            "saldo": "rai",
            "moneda": "u$s",
            "tipo_letras": "CC"
        },
        {
            "e": "1",
            "n": "872378326702",
            "t": "01",
            "saldo": "-600",
            "moneda": "$",
            "tipo_letras": "Cc"
        },
        {
            "e": "1",
            "n": "872378326703",
            "t": "01",
            "saldo": "745",
            "moneda": "$",
            "tipo_letras": "CC"
        },
        {
            "e": "1",
            "n": "872378326704",
            "t": "01",
            "saldo": "852.36",
            "moneda": "$uy",
            "tipo_letras": "CA"
        },
        {
            "e": "1",
            "n": "872378326705",
            "t": "01",
            "saldo": "569",
            "moneda": "$",
            "tipo_letras": "CC"
        },
        {
            "e": "1",
            "n": "872378326706",
            "t": "01",
            "saldo": "2-5-0",
            "moneda": "$",
            "tipo_letras": "CA"
        },
        {
            "e": "1",
            "n": "872378326707",
            "t": "01",
            "saldo": "25000",
            "moneda": "$uy",
            "tipo_letras": "CC"
        },
        {
            "e": "1",
            "n": "872378326708",
            "t": "01",
            "saldo": "659",
            "moneda": "u$s",
            "tipo_letras": "CCP"
        },
        {
            "e": "1",
            "n": "872378326709",
            "t": "01",
            "saldo": "458",
            "moneda": "$",
            "tipo_letras": "CC"
        },
        {
            "e": "1",
            "n": "872378326710",
            "t": "01",
            "saldo": "700",
            "moneda": "bs",
            "tipo_letras": "CC"
        },
        {
            "e": "1",
            "n": " ",
            "t": "01",
            "saldo": "6458925",
            "moneda": "$",
            "tipo_letras": "CC"
        },
        {
            "e": "1",
            "n": "872378327823",
            "t": "11",
            "saldo": "250",
            "moneda": "$",
            "tipo_letras": "CA"
        },
        {
            "e": "1",
            "n": "872378327823",
            "t": "12",
            "saldo": "45",
            "moneda": "u$s",
            "tipo_letras": "CA"
    }]

    const onSelectedAccount = vi.fn();

    beforeEach(() => {
        vi.restoreAllMocks();
        render(
            <AccountsList key={1} accounts={accounts} onAccountSelected={onSelectedAccount}/>
        )
    });

    test('should render six buttons', () => {
        expect(screen.getAllByRole('button').length).toBe(6);
    })

    test('should go to next page', () => {
        const button = screen.getAllByText(/Más opciones/i);
        fireEvent.click(button[0]);
        expect(screen.getByText(/Opciones anteriores/i)).toBeDefined();
    })

    test('should go to first page', () => {
        const backButton = screen.getByTestId('back-page');
        fireEvent.click(backButton);
        expect(screen.queryByText(/Opciones anteriores/)).toBeNull();
    })

})

