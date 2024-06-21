import { Header } from '../../components/Header'
import { SuccessContainer } from './styles'
import imgSuccess from '../../assets/img-success.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

export function Success() {
  const { formData } = useContext(CartContext)

  if (!formData) {
    return <div>Nenhuma informação de pedido encontrada.</div>
  }
  return (
    <SuccessContainer>
      <Header />
      <div className="Content">
        <h1>Uhu! Pedido confirmado</h1>
        <p className="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </p>
        <div className="navegacao">
          <div className="Informations">
            <div className="blocksInformation">
              <span className="location">
                <MapPin size={16} weight="fill" color="#FFF" />
              </span>
              <div>
                <p>
                  Entrega em{' '}
                  <strong>
                    {formData.rua} {formData.numero}
                  </strong>
                </p>
                <p>
                  {formData.bairro} - {formData.cidade}, {formData.uf}
                </p>
              </div>
            </div>
            <div className="blocksInformation">
              <span className="timer">
                <Timer size={16} weight="fill" color="#FFF" />
              </span>
              <div>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </div>
            </div>
            <div className="blocksInformation">
              <span className="typePay">
                <CurrencyDollar size={16} color="#FFF" />
              </span>
              <div>
                <p>Pagamento na entrega</p>
                <strong>{formData.paymentMethod}</strong>
              </div>
            </div>
          </div>
          <img src={imgSuccess} alt="" />
        </div>
      </div>
    </SuccessContainer>
  )
}
