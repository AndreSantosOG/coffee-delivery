import styled from 'styled-components'

export const HomeContainer = styled.div`
  .intro {
    display: flex;
    gap: 4rem;
    padding: 94px 160px 94px 160px;
    img {
      width: 476px;
      height: 360px;
    }
  }
  .intro-info {
    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 48px;
      line-height: 130%;
      font-weight: 'ExtraBold';
      margin-bottom: 1rem;
    }
    h2 {
      font-size: 20px;
      line-height: 130%;
      font-weight: 400;
      margin-bottom: 4.125rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
  .intro-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;

    p {
      display: flex;
      align-items: center;
      gap: 5.5px;
      color: ${(props) => props.theme['base-text']};
    }
    span {
      background: blue;
      padding: 6px 7px;
      border-radius: 50%;
    }
    .icons {
      color: ${(props) => props.theme.white};
    }
    .detail-One {
      background: ${(props) => props.theme['yellow-dark']};
    }
    .detail-Two {
      background: ${(props) => props.theme['base-text']};
    }
    .detail-Three {
      background: ${(props) => props.theme.yellow};
    }
    .detail-Four {
      background: ${(props) => props.theme.purple};
    }
  }
`
export const ListCoffeeContainer = styled.div`
  padding: 0 160px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  h1 {
    margin-bottom: 30px;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
  }
  .Coffees {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 50px;
    margin-bottom: 157px;
  }
`
