import { lexer } from '../lexer.js';

describe('lexer.ts', () => {
    it('returns a valid token', () => {
        const tokens = lexer('{"name":"Vitor","age":18}');
        expect(tokens).toEqual([
            { type: 'LEFT_BRACE', value: undefined },
            { type: 'STRING', value: 'name' },
            { type: 'COLON', value: undefined },
            { type: 'STRING', value: 'Vitor' },
            { type: 'COMMA', value: undefined },
            { type: 'STRING', value: 'age' },
            { type: 'COLON', value: undefined },
            { type: 'NUMBER', value: '18' },
            { type: 'RIGHT_BRACE', value: undefined },
        ]);
    });
});
