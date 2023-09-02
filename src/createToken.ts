import { TOKEN_TYPES } from './enums/tokenTypes.js';
import { Token } from './interface/token.js';

export const createToken = (type: TOKEN_TYPES, value?: string): Token => ({
    type,
    value,
});
