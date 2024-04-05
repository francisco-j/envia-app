import { ref } from 'vue'
// this is just for the test.
// since this is a plane object it only lasts as long as the seesion
// in fact. it is tab-specific
export const cartObject = ref({})

export default {
    addToCart: (id, ammount = 1) => {
        let newAmmount = cartObject.value[id] || 0;
        newAmmount += ammount

        cartObject.value[id] = newAmmount;
    },
    getCart: () => {
        return cartObject;
    },
    updateAmount: (id, ammount) => {
        cartObject.value[id] = ammount;
    },
    buyCart: () => {
        cartObject.value = {}
        alert("carrito comprado con exito")
    }
}