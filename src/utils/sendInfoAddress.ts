
let info: string[] = [];

function sendInfoAddress(cpf: string) {
    if (!info.includes(cpf)) info.push(cpf)
}

async function receiveInfoAddress() {
    return info;
}

export {sendInfoAddress, receiveInfoAddress};