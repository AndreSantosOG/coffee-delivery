import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  form {
    padding: 40px 160px;
    display: flex;
    gap: 2rem;
    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 18px;
      line-height: 130%;
      font-weight: bold;
      color: ${(props) => props.theme['base-subtitle']};
      margin-bottom: 15px;
    }
    .FirstBlock {
      padding: 40px;
      background-color: red;
      display: flex;
      flex-direction: column;
      border: none;
      border-radius: 6px;
      margin-bottom: 12px;
      background: ${(props) => props.theme['base-card']};
      h2 {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        line-height: 130%;
        font-weight: 'Regular & Bold';
        color: ${(props) => props.theme['base-subtitle']};
        display: flex;
        gap: 8px;
        align-items: center;
      }
      p {
        margin-left: 30px;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        line-height: 130%;
        font-weight: 400;
        color: ${(props) => props.theme['base-text']};
        margin-bottom: 32px;
      }
      .inputCep,
      .inputBairro,
      .inputNumero {
        width: 200px;
        margin-right: 12px;
      }
      .inputRua {
        width: 100%;
      }
      .inputComplemento {
        width: 348px;
      }
      .inputCidade {
        width: 276px;
        margin-right: 12px;
      }
      .inputUF {
        width: 60px;
      }
      .inputCep,
      .inputRua,
      .inputNumero,
      .inputComplemento,
      .inputBairro,
      .inputCidade,
      .inputUF {
        height: 42px;
        border: none;
        border-radius: 4px;
        padding: 12px;
        margin-bottom: 16px;
        background: ${(props) => props.theme['base-input']};
        color: ${(props) => props.theme['base-label']};
      }
    }
    .SecondBlock {
      padding: 40px;
      display: flex;
      flex-direction: column;
      border: none;
      border-radius: 6px;
      background: ${(props) => props.theme['base-card']};
      h2 {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        line-height: 130%;
        font-weight: 'Regular & Bold';
        color: ${(props) => props.theme['base-subtitle']};
        display: flex;
        align-items: center;
        gap: 8px;
      }
      p {
        margin-left: 30px;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        line-height: 130%;
        font-weight: 400;
        color: ${(props) => props.theme['base-text']};
        margin-bottom: 32px;
      }
      .options {
        display: flex;
        gap: 12px;
        button {
          width: 178px;
          height: 51px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          font-family: 'Roboto', sans-serif;
          font-size: 12px;
          line-height: 160%;
          font-weight: 400;
          text-transform: uppercase;
          border: none;
          border-radius: 6px;
          background-color: ${(props) => props.theme['base-button']};
          color: ${(props) => props.theme['base-text']};
        }
      }
    }
    .options button.selected {
      background-color: ${(props) => props.theme['purple-light']};
      border: 1px solid ${(props) => props.theme.purple};
    }
    .InformationRightBlock {
      width: 448px;
      background: ${(props) => props.theme['base-card']};
      padding: 40px;
      border-radius: 0 10% 0 10%;
      .FinishInformationsBuy {
        display: flex;
        flex-direction: column;
        gap: 12px;
        .TotalOne,
        .TotalTwo,
        .Entrega {
          display: flex;
          justify-content: space-between;
        }
        .TotalOne,
        .Entrega p {
          font-family: 'Roboto', sans-serif;
          font-size: 14px;
          line-height: 130%;
          font-weight: 400;
          color: ${(props) => props.theme['base-text']};
        }
        .TotalOne,
        .Entrega p:last-of-type {
          font-family: 'Roboto', sans-serif;
          font-size: 16px;
          line-height: 130%;
          font-weight: 400;
          color: ${(props) => props.theme['base-text']};
        }
        .TotalTwo {
          font-family: 'Roboto', sans-serif;
          font-size: 20px;
          line-height: 130%;
          font-weight: bold;
          color: ${(props) => props.theme['base-subtitle']};
        }
        button {
          margin-top: 12px;
          height: 46px;
          border: none;
          border-radius: 6px;
          text-transform: uppercase;
          background: ${(props) => props.theme.yellow};
          font-family: 'Roboto', sans-serif;
          font-size: 14px;
          line-height: 160%;
          font-weight: bold;
          color: ${(props) => props.theme.white};
        }
        button:hover {
          background: ${(props) => props.theme['yellow-dark']};
          transition: 0.2s;
        }
      }
    }
  }
`
