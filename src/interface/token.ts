import { TOKEN_TYPES } from "../enums/tokenTypes.js";

export interface Token {
    type: TOKEN_TYPES;
    value?: any;
}
