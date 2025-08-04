import db from './db.js';

async function getItem(codemp, codfil, codsnf, numnfc, codfor) {
    const e440nfc = await db.getId(`select * from e440nfc where codemp=:codemp and codfil=:codfil and codsnf=:codsnf and numnfc=:numnfc and codfor=:codfor`,[codemp, codfil, codsnf, numnfc, codfor]);
    return e440nfc;
}

async function getAllProdutos(codemp, codfil, codsnf, numnfc, codfor) {
    const e440ipc = await db.getAll(`select * from e440ipc where codemp=:codemp and codfil=:codfil and codsnf=:codsnf and numnfc=:numnfc and codfor=:codfor`,[codemp, codfil, codsnf, numnfc, codfor]);
    return e440ipc;
}

async function getAllRateio(codemp, codfil, codsnf, numnfc, codfor, seqipc) {
    const e440rat = await db.getAll(`select * from e440rat where codemp=:codemp and codfil=:codfil and codsnf=:codsnf and numnfc=:numnfc and codfor=:codfor and seqipc=:seqipc`,[codemp, codfil, codsnf, numnfc, codfor, seqipc]);
    return e440rat;
}

export default { getItem, getAllProdutos, getAllRateio };
