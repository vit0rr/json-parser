import { TOKEN_TYPES } from './enums/tokenTypes.js';
import { Token } from './interface/token.js';

export const createToken = (type: TOKEN_TYPES, value?: any): Token => {
    return {
        type,
        value,
    };
};
