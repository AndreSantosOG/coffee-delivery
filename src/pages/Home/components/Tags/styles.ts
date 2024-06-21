import styled from 'styled-components'

export const TagContainer = styled.div`
  .tags {
    background: blue;
    padding: 4px 8px;
    border-radius: 100px;
    margin-right: 4px;
    display: flex;
    align-items: center;
    background: ${(props) => props.theme['yellow-light']};
    span {
      font-size: 10px;
      line-height: 130%;
      font-weight: bold;
      text-transform: uppercase;
      color: ${(props) => props.theme['yellow-dark']};
    }
  }
`
