import styled from 'styled-components'

export const SuccessContainer = styled.main`
  .Content {
    padding: 80px 160px;
    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 32px;
      line-height: 130%;
      font-weight: 'ExtraBold';
      color: ${(props) => props.theme['yellow-dark']};
      margin-bottom: 4px;
    }
    .subtitle {
      font-family: 'Roboto', sans-serif;
      font-size: 20px;
      line-height: 130%;
      font-weight: 400;
      color: ${(props) => props.theme['base-subtitle']};
      margin-bottom: 40px;
    }
    .navegacao {
      display: flex;
      gap: 6.375rem;
    }
    .Informations {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 32.875rem;
      padding: 2.5rem;
      border: 2px solid ${(props) => props.theme.yellow};
      border-radius: 6px 10% 6px 10%;
      .blocksInformation {
        display: flex;
        align-items: center;
        gap: 12px;
        span {
          padding: 8px;
          border: none;
          border-radius: 50%;
          display: flex;
          justify-content: center;
        }
        p {
          font-family: 'Roboto', sans-serif;
          font-size: 16px;
          line-height: 130%;
          font-weight: 400;
          color: ${(props) => props.theme['base-text']};
        }
        strong {
          color: ${(props) => props.theme['base-text']};
        }
        .location {
          background: ${(props) => props.theme.purple};
        }
        .timer {
          background: ${(props) => props.theme.yellow};
        }
        .typePay {
          background: ${(props) => props.theme['yellow-dark']};
        }
      }
    }
  }
`
