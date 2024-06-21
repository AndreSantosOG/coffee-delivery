import { Header } from '../../components/Header'
import { HomeContainer, ListCoffeeContainer } from './styles'
import CoffeeImg from '../../assets/Coffee-img.svg'
import { Package, ShoppingCart, Timer, Coffee } from 'phosphor-react'
import { CoffeeTicket } from './components/CoffeeTicket'
import ExpressoTradicional from '../../assets/Expresso.svg'
import ExpressoAmericano from '../../assets/Americano.svg'
import ExpressoCremoso from '../../assets/Expresso Cremoso.svg'
import ExpressoGelado from '../../assets/Café Gelado.svg'
import CafeLeite from '../../assets/Café com Leite.svg'
import Latte from '../../assets/Latte.svg'
import Capuccino from '../../assets/Capuccino.svg'
import Macchiato from '../../assets/Macchiato.svg'
import Mocaccino from '../../assets/Mochaccino.svg'
import ChocolateQuente from '../../assets/Chocolate Quente.svg'
import Cubano from '../../assets/Cubano.svg'
import Havaiano from '../../assets/Havaiano.svg'
import Arabe from '../../assets/Árabe.svg'
import Irlandes from '../../assets/Irlandês.svg'

export const coffeeData = [
  {
    id: 0,
    name: 'Expresso Tradicional',
    subtitle: 'O tradicional café feito com água quente e grãos moídos',
    img: ExpressoTradicional,
    type: 'tradicional',
    price: 12.5,
  },
  {
    id: 1,
    name: 'Expresso Americano',
    subtitle: 'Expresso diluído, menos intenso que o tradicional',
    img: ExpressoAmericano,
    type: 'tradicional',
    price: 15.0,
  },
  {
    id: 2,
    name: 'Expresso Cremoso',
    subtitle: 'Café expresso tradicional com espuma cremosa',
    img: ExpressoCremoso,
    type: 'tradicional',
    price: 9.5,
  },
  {
    id: 3,
    name: 'Expresso Gelado',
    subtitle: 'Bebida preparada com café expresso e cubos de gelo',
    img: ExpressoGelado,
    type: 'gelado',
    price: 8.0,
  },
  {
    id: 4,
    name: 'Café com Leite',
    subtitle: 'Meio a meio de expresso tradicional com leite vaporizado',
    img: CafeLeite,
    type: 'tradicionalMilk',
    price: 15.5,
  },
  {
    id: 5,
    name: 'Latte',
    subtitle: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    img: Latte,
    type: 'tradicionalMilk',
    price: 16.0,
  },
  {
    id: 6,
    name: 'Capuccino',
    subtitle: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    img: Capuccino,
    type: 'tradicionalMilk',
    price: 16.5,
  },
  {
    id: 7,
    name: 'Macchiato',
    subtitle: 'Café expresso misturado com um pouco de leite quente e espuma',
    img: Macchiato,
    type: 'tradicionalMilk',
    price: 16.0,
  },
  {
    id: 8,
    name: 'Mocaccino',
    subtitle: 'Café expresso com calda de chocolate, pouco leite e espuma',
    img: Mocaccino,
    type: 'tradicionalMilk',
    price: 16.5,
  },
  {
    id: 9,
    name: 'Chocolate Quente',
    subtitle: 'Bebida feita com chocolate dissolvido no leite quente e café',
    img: ChocolateQuente,
    type: 'especialMilk',
    price: 15.5,
  },
  {
    id: 10,
    name: 'Cubano',
    subtitle: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    img: Cubano,
    type: 'especialAlcoolGelado',
    price: 17.0,
  },
  {
    id: 11,
    name: 'Havaiano',
    subtitle: 'Bebida adocicada preparada com café e leite de coco',
    img: Havaiano,
    type: 'especial',
    price: 17.5,
  },
  {
    id: 12,
    name: 'Árabe',
    subtitle: 'Bebida preparada com grãos de café árabe e especiarias',
    img: Arabe,
    type: 'especial',
    price: 17.0,
  },
  {
    id: 13,
    name: 'Irlandês',
    subtitle: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    img: Irlandes,
    type: 'especialAlcool',
    price: 17.5,
  },
]

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <div className="intro">
        <div className="intro-info">
          <h1>
            Encontre o café perfeito <br /> para qualquer hora do dia
          </h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a<br />
            qualquer hora
          </h2>
          <div className="intro-details">
            <p>
              <span className="detail-One">
                <ShoppingCart size={16} weight="fill" className="icons" />
              </span>
              Compra simples e segura
            </p>
            <p>
              <span className="detail-Two">
                <Package size={16} weight="fill" className="icons" />
              </span>
              Embalagem mantém o café intacto
            </p>
            <p>
              <span className="detail-Three">
                <Timer size={16} weight="fill" className="icons" />
              </span>
              Entrega rápida e rastreada
            </p>
            <p>
              <span className="detail-Four">
                <Coffee size={16} weight="fill" className="icons" />
              </span>
              O café chega fresquinho até você
            </p>
          </div>
        </div>
        <img src={CoffeeImg} alt="" />
      </div>
      <ListCoffeeContainer>
        <h1>Nossos cafés</h1>
        <div className="Coffees">
          {coffeeData.map(({ id, name, subtitle, img, type, price }) => (
            <CoffeeTicket
              key={id}
              id={id}
              name={name}
              subtitle={subtitle}
              img={img}
              type={type}
              price={price}
            />
          ))}
        </div>
      </ListCoffeeContainer>
    </HomeContainer>
  )
}
