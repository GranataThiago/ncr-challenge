import { describe, expect, test } from "vitest";
import { getFormattedAccountType } from "./AccountDetails";

describe('AccountDetails', () => {

    test('should return correct account type as string', () => {
        expect(getFormattedAccountType('u$s', 'CA')).toBe('Caja de Ahorro en dolares');

        expect(getFormattedAccountType('$', 'CA')).toBe('Caja de Ahorro en pesos');
    })

})