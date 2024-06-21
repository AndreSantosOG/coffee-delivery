import { createContext, useState, ReactNode } from 'react'

interface CartItem {
  id: number
  name: string
  price: number
  img: string
  quantity: number
}

interface FormData {
  cep: string
  rua: string
  numero: string
  complemento?: string
  bairro: string
  cidade: string
  uf: string
  paymentMethod: string
}

interface CartContextProps {
  listCart: CartItem[]
  setListCart: React.Dispatch<React.SetStateAction<CartItem[]>>
  formData: FormData | null
  setFormData: React.Dispatch<React.SetStateAction<FormData | null>>
}

export const CartContext = createContext({} as CartContextProps)

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [listCart, setListCart] = useState<CartItem[]>([])
  const [formData, setFormData] = useState<FormData | null>(null)

  return (
    <CartContext.Provider
      value={{ listCart, setListCart, formData, setFormData }}
    >
      {children}
    </CartContext.Provider>
  )
}
