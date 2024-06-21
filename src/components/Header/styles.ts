import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
  img {
    width: 5.25rem;
    height: 2.5rem;
  }
  .buttonsHeader {
    display: flex;
    gap: 0.75rem;
    position: relative;
    span {
      position: absolute;
      top: 0;
      margin-top: -6px;
      margin-right: -8px;
      right: 0;
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background: white;
      font-family: 'Roboto', sans-serif;
      font-weight: bold;
      font-size: 12px;
      font-weight: 130%;
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
  .buttonLocation {
    display: flex;
    align-items: center;
    gap: 3px;
    padding: 8px;
    background: ${(props) => props.theme['purple-light']};
    border: none;
    border-radius: 6px;
    p {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
  .buttonLocation:hover {
    background: ${(props) => props.theme['purple-dark']};
    transition: 0.3s;
    p {
      color: ${(props) => props.theme.white};
    }
    .map-pin-icon {
      color: ${(props) => props.theme.white};
    }
  }
  .buttonCart {
    display: flex;
    align-items: center;
    padding: 8px;
    background: ${(props) => props.theme['yellow-light']};
    border-radius: 6px;
    border: none;
  }
  .buttonCart:hover {
    transition: 0.3s;
    background-color: ${(props) => props.theme.yellow};
  }
  .map-pin-icon {
    color: ${(props) => props.theme.purple};
  }
`
