import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  .CoffeeCard {
    display: flex;
    align-items: center;
    width: 368px;
    height: 80px;
    padding: 0 0 24px 0;
    margin-bottom: 24px;
    background: ${(props) => props.theme['base-card']};
    border-bottom: 2px solid ${(props) => props.theme['base-button']};
    .price {
      margin-left: 40px;
      margin-top: -38px;
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      line-height: 130%;
      font-weight: bold;
      color: ${(props) => props.theme['base-text']};
    }
    img {
      height: 4rem;
      width: 4rem;
      margin-right: 20px;
    }
    h3 {
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      line-height: 130%;
      font-weight: 400;
      color: ${(props) => props.theme['base-subtitle']};
    }
    .buttonsCoffeeCard {
      display: flex;
      align-items: center;
      margin-top: 8px;
      gap: 8px;
      button {
        height: 32px;
        width: 91px;
        display: flex;
        gap: 4px;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        font-family: 'Roboto', sans-serif;
        font-size: 12px;
        line-height: 160%;
        font-weight: 400;
        border: none;
        border-radius: 6px;
        color: ${(props) => props.theme['base-text']};
        background: ${(props) => props.theme['base-button']};
      }
    }
    .input {
      display: flex;
      align-items: center;
      input {
        width: 20px;
        height: 32px;
        border: none;
        font-size: 16px;
        background: ${(props) => props.theme['base-button']};
        color: ${(props) => props.theme['base-title']};
        text-align: center;
      }
      input[type='number']::-webkit-outer-spin-button,
      input[type='number']::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      input[type='number'] {
        -moz-appearance: textfield;
      }
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 32px;
        padding: 8px;
        background: ${(props) => props.theme['base-button']};
        border: none;
        color: ${(props) => props.theme.purple};
      }
      .buttonLess {
        border-radius: 8px 0 0 8px;
        font-size: 28px;
      }
      .buttonMore {
        border-radius: 0 8px 8px 0;
        font-size: 20px;
      }
    }
  }
`
