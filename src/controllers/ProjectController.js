import * as User from '../models/User'
import * as AddressService from '../lib/addressService'



const getAll = async (req, res) => {
    const usersMongo = await User.default.find()
    return res.json(usersMongo)
}


const getById = async (req, res) => {
    const { id } = req.params;
    const user = await User.default.findOne({ _id: id })

    return res.json(user)
}

const create = async (req, res) => {
    const { name, email, cep } = req.body;
    const address = await AddressService.default.getAddress(cep)
    const user = await User.default.create({
        name,
        email,
        address
    })
    return res.json(user)
}

const update = async (req, res) => {
    const { id } = req.params;
    const { title, description, cep } = req.body

    const address = await AddressService.default.getAddress(cep)
    const user = await User.default.updateOne({ _id: id }, { title, description, address })

    return res.json(user)

}

const remove = async (req, res) => {
    const { id } = req.params;
    const user = await User.default.deleteOne({ _id: id })

    return res.json({ message: 'user deleted' })
}

export default {
    getAll,
    getById,
    create,
    update,
    remove
}