import styled from 'styled-components'

export const CoffeTicketContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  margin-right: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  justify-content: center;
  border-radius: 0px 10% 0 10%;

  .Tags {
    display: flex;
  }
  img {
    margin-top: -40px;
    height: 120px;
    width: 120px;
  }
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 20px;
    line-height: 130%;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
  }
  .subtitle {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 130%;
    font-weight: 400;
    margin-top: -32px;
    color: ${(props) => props.theme['base-label']};
  }
  .footer {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 24.5px;
    margin-left: -15px;
    span {
      display: flex;
      align-items: baseline;
      font-size: 12px;
      font-family: 'Roboto', sans-serif;
      color: ${(props) => props.theme['base-label']};
      p {
        font-size: 21px;
        margin-left: 3px;
        font-family: 'Baloo 2', sans-serif;
        font-weight: bold;
        color: ${(props) => props.theme['base-subtitle']};
        margin-right: 15px;
      }
    }
    .input {
      display: flex;
      align-items: center;
      input {
        width: 20px;
        height: 38px;
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
        width: 20px;
        height: 38px;
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
    .buttonCart {
      margin-left: 8px;
      width: 36px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 6px;
      background: ${(props) => props.theme['purple-dark']};
      .icon {
        color: ${(props) => props.theme.white};
      }
    }
    .buttonCart:hover {
      background: ${(props) => props.theme.purple};
      transition: 0.2s;
    }
  }
`
