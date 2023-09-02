import { lexer } from '../lexer.js';
import { parser } from '../parser.js';

describe('parser.ts', () => {
    it('returns a valid parsed json', () => {
        const tokens = lexer(
            '{"name":"Vitor","age":18,"isHuman":true,"isRobot":false}'
        );

        const json = parser(tokens);

        expect(json).toEqual({
            type: 'Program',
            body: [
                {
                    type: 'ObjectExpression',
                    properties: [
                        {
                            type: 'Property',
                            key: {
                                type: 'STRING',
                                value: 'name',
                            },
                            value: {
                                type: 'StringLiteral',
                                value: 'Vitor',
                            },
                        },
                        {
                            type: 'Property',
                            key: {
                                type: 'STRING',
                                value: 'age',
                            },
                            value: {
                                type: 'NumberLiteral',
                                value: '18',
                            },
                        },
                        {
                            type: 'Property',
                            key: {
                                type: 'STRING',
                                value: 'isHuman',
                            },
                            value: {
                                type: 'BooleanLiteral',
                                value: true,
                            },
                        },
                        {
                            type: 'Property',
                            key: {
                                type: 'STRING',
                                value: 'isRobot',
                            },
                            value: {
                                type: 'BooleanLiteral',
                                value: false,
                            },
                        },
                    ],
                },
            ],
        });
    });
});
