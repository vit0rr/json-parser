import { lexer } from './lexer';
import { parser } from './parser';

const tokens = lexer('{"name":"Vitor","age":18}');
const json = parser(tokens);

console.log('parser:', JSON.stringify(json, null, 2));
