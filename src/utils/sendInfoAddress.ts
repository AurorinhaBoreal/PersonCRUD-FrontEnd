
let info: string[] = [];

function sendInfoAddress(cpf: string) {
    if (!info.includes(cpf)) info.push(cpf)
}

async function receiveInfoAddress() {
    return info;
}

async function receiveSpecificInfo(index: number) {
    return info[index]
}

export {sendInfoAddress, receiveInfoAddress, receiveSpecificInfo};