import { Overlay, CartContainer } from './styles'

const Cart = () => {
  return (
    <CartContainer>
      <Overlay />
      <aside>
        <ul>
          <li>
            <h3>Nome do jogo</h3>
          </li>
        </ul>
        <p>2 jogo(s) no carrinho</p>
        <p>
          Total de R$ 250, 00 <span>Em até 6x sem juros</span>
        </p>
        <button title="Clique aqui para continuar a compra" type="button">
          Continuar com a compra
        </button>
      </aside>
    </CartContainer>
  )
}

export default Cart
