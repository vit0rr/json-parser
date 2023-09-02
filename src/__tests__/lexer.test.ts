import { lexer } from '../lexer.js';

describe('lexer.ts', () => {
    it('returns a valid token', () => {
        const tokens = lexer(
            '{"name":"Vitor","age":18,"isHuman":true,"isRobot":false}'
        );
        expect(tokens).toEqual([
            { type: 'LEFT_BRACE', value: undefined },
            { type: 'STRING', value: 'name' },
            { type: 'COLON', value: undefined },
            { type: 'STRING', value: 'Vitor' },
            { type: 'COMMA', value: undefined },
            { type: 'STRING', value: 'age' },
            { type: 'COLON', value: undefined },
            { type: 'NUMBER', value: '18' },
            { type: 'COMMA', value: undefined },
            { type: 'STRING', value: 'isHuman' },
            { type: 'COLON', value: undefined },
            { type: 'TRUE', value: undefined },
            { type: 'COMMA', value: undefined },
            { type: 'STRING', value: 'isRobot' },
            { type: 'COLON', value: undefined },
            { type: 'FALSE', value: undefined },
            { type: 'RIGHT_BRACE', value: undefined },
        ]);
    });
});
