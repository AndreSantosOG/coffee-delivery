// pages/Checkout.tsx
import React, { useContext, useState } from 'react'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { Header } from '../../components/Header'
import { CheckoutContainer } from './styles'
import { CoffeeCard } from './components/CoffeeCard'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'

export function Checkout() {
  const { listCart, setFormData } = useContext(CartContext)
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null)
  const navigate = useNavigate()

  const totalItems = listCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )
  const deliveryFee = 3.5
  const totalPrice = totalItems + deliveryFee

  const handlePaymentSelect = (paymentMethod: string) => {
    setSelectedPayment(paymentMethod)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!selectedPayment) {
      alert('Por favor, selecione uma opção de pagamento.')
      return
    }
    if (listCart.length < 1) {
      alert('Por favor, escolher algum item para compra.')
      return
    }

    const formData = new FormData(event.currentTarget)
    const data = {
      cep: formData.get('cep') as string,
      rua: formData.get('rua') as string,
      numero: formData.get('numero') as string,
      complemento: formData.get('complemento') as string,
      bairro: formData.get('bairro') as string,
      cidade: formData.get('cidade') as string,
      uf: formData.get('uf') as string,
      paymentMethod: selectedPayment,
    }

    setFormData(data)
    navigate('/success')
  }

  return (
    <CheckoutContainer>
      <Header />
      <form onSubmit={handleSubmit}>
        <div className="LeftBlock">
          <h1>Complete seu pedido</h1>
          <div className="FirstBlock">
            <h2>
              <MapPinLine size={22} color="#C47F17" /> Endereço de Entrega
            </h2>
            <p>Informe o endereço onde deseja receber seu pedido</p>
            <input
              type="text"
              name="cep"
              placeholder="CEP"
              className="inputCep"
              required
            />
            <input
              type="text"
              name="rua"
              placeholder="Rua"
              className="inputRua"
              required
            />
            <div className="formDetails">
              <input
                type="text"
                name="numero"
                placeholder="Número"
                className="inputNumero"
                required
              />
              <input
                type="text"
                name="complemento"
                placeholder="Complemento"
                className="inputComplemento"
              />
              <div className="formDetailsFinish">
                <input
                  type="text"
                  name="bairro"
                  placeholder="Bairro"
                  className="inputBairro"
                  required
                />
                <input
                  type="text"
                  name="cidade"
                  placeholder="Cidade"
                  className="inputCidade"
                  required
                />
                <input
                  type="text"
                  name="uf"
                  placeholder="UF"
                  className="inputUF"
                  required
                />
              </div>
            </div>
          </div>
          <div className="SecondBlock">
            <h2>
              <CurrencyDollar size={22} color="#8047F8" />
              Pagamento
            </h2>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
            <div className="options">
              <button
                type="button"
                className={
                  selectedPayment === 'Cartão de Crédito' ? 'selected' : ''
                }
                onClick={() => handlePaymentSelect('Cartão de Crédito')}
              >
                <CreditCard size={16} color="#8047F8" />
                Cartão de crédito
              </button>
              <button
                type="button"
                className={
                  selectedPayment === 'Cartão de Débito' ? 'selected' : ''
                }
                onClick={() => handlePaymentSelect('Cartão de Débito')}
              >
                <Bank size={16} color="#8047F8" />
                Cartão de débito
              </button>
              <button
                type="button"
                className={selectedPayment === 'Dinheiro' ? 'selected' : ''}
                onClick={() => handlePaymentSelect('Dinheiro')}
              >
                <Money size={16} color="#8047F8" />
                Dinheiro
              </button>
            </div>
          </div>
        </div>
        <div className="RightBlock">
          <h1>Cafés selecionados</h1>
          <div className="InformationRightBlock">
            {listCart.map((item) => (
              <CoffeeCard
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
                quantity={item.quantity}
              />
            ))}
            <div className="FinishInformationsBuy">
              <div className="TotalOne">
                <p>Total de itens</p>
                <p>R$ {totalItems.toFixed(2)}</p>
              </div>
              <div className="Entrega">
                <p>Entrega</p>
                <p>R$ {deliveryFee.toFixed(2)}</p>
              </div>
              <div className="TotalTwo">
                <p>Total</p>
                <p>R$ {totalPrice.toFixed(2)}</p>
              </div>
              <button type="submit" className="ButtonSubmit">
                Confirmar pedido
              </button>
            </div>
          </div>
        </div>
      </form>
    </CheckoutContainer>
  )
}
