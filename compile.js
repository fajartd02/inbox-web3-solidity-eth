/* AUTHOR: FAJAR MUHAMMAD HAMKA ***********************************
NOTES:                                                            *
    Contract Source -> Solidity Compiler                          *
    Solidty Compiler will create 2 -> ABI & Contract Bytecode     *
    ABI: Javascript Interpretation Layer of what the contract is  *
    Bytecode: Deploy off to the thereum network                   *
*******************************************************************/

// compile code will go here
const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':Inbox'];