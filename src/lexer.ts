import { createToken } from "./createToken.js";
import { TOKEN_TYPES } from "./enums/tokenTypes.js";
import { Token } from "./interface/token.js";

export const lexer = (input: string): Token[] => {
    let current = 0;
    const tokens: Token[] = [];

    while (current < input.length) {
        let char = input[current];

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

        const WHITESPACE = /\s/;
        if (WHITESPACE.test(char)) {
            current++;
            continue;
        }

        const NUMBERS = /[0-9]/;
        if (NUMBERS.test(char)) {
            let value = '';

            while (NUMBERS.test(char)) {
                value += char;
                char = input[++current];
            }

            tokens.push(createToken(TOKEN_TYPES.NUMBER, value));
            continue;
        }

        if (char === '"') {
            let value = '';

            char = input[++current];

            while (char !== '"') {
                value += char;
                char = input[++current];
            }

            char = input[++current];

            tokens.push(createToken(TOKEN_TYPES.STRING, value));
            continue;
        }

        if (
            char === 't' &&
            input[current + 1] === 'r' &&
            input[current + 2] === 'u' &&
            input[current + 3] === 'e'
        ) {
            tokens.push(createToken(TOKEN_TYPES.TRUE));
            current += 4;
            continue;
        }

        if (
            char === 'f' &&
            input[current + 1] === 'a' &&
            input[current + 2] === 'l' &&
            input[current + 3] === 's' &&
            input[current + 4] === 'e'
        ) {
            tokens.push(createToken(TOKEN_TYPES.FALSE));
            current += 5;
            continue;
        }

        if (
            char === 'n' &&
            input[current + 1] === 'u' &&
            input[current + 2] === 'l' &&
            input[current + 3] === 'l'
        ) {
            tokens.push(createToken(TOKEN_TYPES.NULL));
            current += 4;
            continue;
        }

        throw new TypeError('I dont know what this character is: ' + char);
    }

    return tokens;
};
