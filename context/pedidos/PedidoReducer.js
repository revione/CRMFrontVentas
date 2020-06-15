import { 
  SELECCIONAR_CLIENTE,
  SELECCIONAR_PRODUCTO,
  CANTIDAD_DE_PRODUCTOS,
  ACTUALIZAR_EL_TOTAL
} from '../../types'

export default ( state, action ) => {
  switch (action.type) {
    case SELECCIONAR_CLIENTE:
      return {
        ...state,
        cliente: action.payload
      }
    case SELECCIONAR_PRODUCTO:
      return {
        ...state,
        productos: action.payload
      }
      
    case CANTIDAD_DE_PRODUCTOS:
      return {
        ...state,
        productos: state.productos.map( prod => prod.id === action.payload.id ? prod = action.payload : prod )
      }
    case ACTUALIZAR_EL_TOTAL:
      return {
        ...state,
        total: state.productos.reduce( 
          (nuevoTotal, producto) => nuevoTotal += producto.precio * producto.cantidad, 0 
        )
      }
    default: 
      return state
  }
}