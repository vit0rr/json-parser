import { createToken } from './createToken.js';
import { TOKEN_TYPES } from './enums/tokenTypes.js';
import { Token } from './interface/token.js';

export const lexer = (input: string): Token[] => {
    let current = 0;
    const tokens: Token[] = [];

    function isEmptyStrings(c: string) {
        // scan forward all
        // \t - tabs
        // \b - empty strings at the beginning and end of a word
        // \n - newline char
        return /[ \t\b\n]/.test(c);
    }

    function isNumber(c: string) {
        return /[0-9]/.test(c);
    }

    function isAlpha(c: string) {
        return /[_a-zA-Z]/.test(c);
    }

    function isDoubleQuotes(c: string) {
        return c === '"';
    }

    function scanForward(pred: (x: string) => boolean) {
        while (current < input.length && pred(input.charAt(current))) current++;
    }

    while (current < input.length) {
        const char = input[current];
        scanForward(isEmptyStrings);

        if (isNumber(char)) {
            const start = current;
            scanForward(isNumber);
            const value = input.slice(start, current);
            tokens.push(createToken(TOKEN_TYPES.NUMBER, value));
            continue;
        }

        if (isDoubleQuotes(char)) {
            current++;
            const start = current;
            scanForward((c) => !isDoubleQuotes(c));
            const value = input.slice(start, current);
            current++;
            tokens.push(createToken(TOKEN_TYPES.STRING, value));
            continue;
        }

        if (isAlpha(char)) {
            const start = current;
            scanForward(isAlpha);
            const value = input.slice(start, current);

            switch (value) {
                case 'true':
                    tokens.push(createToken(TOKEN_TYPES.TRUE));
                    continue;
                case 'false':
                    tokens.push(createToken(TOKEN_TYPES.FALSE));
                    continue;
                case 'null':
                    tokens.push(createToken(TOKEN_TYPES.NULL));
                    continue;
            }

            current++;
        }

        if (char === '{') {
            tokens.push(createToken(TOKEN_TYPES.LEFT_BRACE));
            current++;
            continue;
        }

        if (char === '}') {
            tokens.push(createToken(TOKEN_TYPES.RIGHT_BRACE));
            current++;
            continue;
        }

        if (char === '[') {
            tokens.push(createToken(TOKEN_TYPES.LEFT_BRACKET));
            current++;
            continue;
        }

        if (char === ']') {
            tokens.push(createToken(TOKEN_TYPES.RIGHT_BRACKET));
            current++;
            continue;
        }

        if (char === ':') {
            tokens.push(createToken(TOKEN_TYPES.COLON));
            current++;
            continue;
        }

        if (char === ',') {
            tokens.push(createToken(TOKEN_TYPES.COMMA));
            current++;
            continue;
        }

        throw new TypeError('I dont know what this character is: ' + char);
    }

    return tokens;
};
