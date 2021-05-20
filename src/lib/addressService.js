const axios = require('axios').default

async function getAddress(cep) {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    return response.data
}

export default {
    getAddress
}