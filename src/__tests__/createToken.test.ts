import { createToken } from '../createToken.js';
import { TOKEN_TYPES } from '../enums/tokenTypes.js';

describe('CreateToken.ts', () => {
    it('creates a LEFT_BRACE token', () => {
        const leftBrace = createToken(TOKEN_TYPES.LEFT_BRACE, '{');
        expect(leftBrace).toEqual({
            type: TOKEN_TYPES.LEFT_BRACE,
            value: '{',
        });
    });

    it('creates a RIGHT_BRACE token', () => {
        const rightBrace = createToken(TOKEN_TYPES.RIGHT_BRACE, '}');
        expect(rightBrace).toEqual({
            type: TOKEN_TYPES.RIGHT_BRACE,
            value: '}',
        });
    });

    it('creates a LEFT_BRACKET token', () => {
        const leftBracket = createToken(TOKEN_TYPES.LEFT_BRACKET, '[');
        expect(leftBracket).toEqual({
            type: TOKEN_TYPES.LEFT_BRACKET,
            value: '[',
        });
    });

    it('creates a RIGHT_BRACKET token', () => {
        const rightBracket = createToken(TOKEN_TYPES.RIGHT_BRACKET, ']');
        expect(rightBracket).toEqual({
            type: TOKEN_TYPES.RIGHT_BRACKET,
            value: ']',
        });
    });

    it('creates a COLON token', () => {
        const colon = createToken(TOKEN_TYPES.COLON, ':');
        expect(colon).toEqual({
            type: TOKEN_TYPES.COLON,
            value: ':',
        });
    });

    it('creates a COMMA token', () => {
        const comma = createToken(TOKEN_TYPES.COMMA, ',');
        expect(comma).toEqual({
            type: TOKEN_TYPES.COMMA,
            value: ',',
        });
    });

    it('creates a STRING token', () => {
        const string = createToken(TOKEN_TYPES.STRING, '"string"');
        expect(string).toEqual({
            type: TOKEN_TYPES.STRING,
            value: '"string"',
        });
    });

    it('creates a NUMBER token', () => {
        const number = createToken(TOKEN_TYPES.NUMBER, '123');
        expect(number).toEqual({
            type: TOKEN_TYPES.NUMBER,
            value: '123',
        });
    });

    it('creates a BOOLEAN token', () => {
        const _true = createToken(TOKEN_TYPES.TRUE, 'true');
        const _false = createToken(TOKEN_TYPES.FALSE, 'false');
        expect(_true).toEqual({
            type: TOKEN_TYPES.TRUE,
            value: 'true',
        });
        expect(_false).toEqual({
            type: TOKEN_TYPES.FALSE,
            value: 'false',
        });
    });

    it('creates a NULL token', () => {
        const _null = createToken(TOKEN_TYPES.NULL, 'null');
        expect(_null).toEqual({
            type: TOKEN_TYPES.NULL,
            value: 'null',
        });
    });

    it('creates a token with no value', () => {
        const leftBrace = createToken(TOKEN_TYPES.LEFT_BRACE);
        expect(leftBrace).toEqual({
            type: TOKEN_TYPES.LEFT_BRACE,
            value: undefined,
        });
    });
});
