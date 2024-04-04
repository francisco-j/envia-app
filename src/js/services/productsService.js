import myFetch from "../utils/myFetch"

export default {
    getAll: async () => {
        const response = await myFetch('/products')
        return response
    },
    getById: async () => {
        const response = await myFetch(`/products/${id}`)
        return response
    }
}