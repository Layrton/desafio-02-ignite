import styled from 'styled-components'

export const CartContainer = styled.main`
  padding: 144px 160px 92px 160px;
  display: flex;
  height: 100vh;
  gap: 32px;

  h2 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const FormContainer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;

  > div {
    background: ${(props) => props.theme['base-card']};
    padding: 40px;
    display: flex;
    flex-direction: column;

    form {
      margin-top: 32px;
      display: grid;
      grid-template-columns: 200px auto 60px;
      column-gap: 0.75rem;
      row-gap: 1rem;
      grid-auto-flow: dense;

      > div {
        border: 1px solid ${(props) => props.theme['base-button']};
      }

      .cep {
        grid-column: span 3;
        max-width: 12.5rem;
      }
      .street {
        grid-column: span 3;
      }
      .additional {
        grid-column: span 2;
      }
    }

    input {
      background: ${(props) => props.theme['base-input']};
      box-shadow: none;
      border: none;
      padding: 12px;
      border-radius: 4px;
      color: ${(props) => props.theme['base-text']};
      border: 1px solid transparent;
      height: 95%;
      width: 95%;

      &:focus {
        outline: red;
        border: 1px solid ${(props) => props.theme['yellow-dark']};
      }
    }
  }
`

export const InputStyled = styled.input`
  flex: 1;
  height: 100%;
  background: none;
  border: none;
  font-size: 0.75rem;
  padding: 0 0.75rem;
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${(props) => props.theme['base-input']};
  width: 100%;
  height: 42px;
  border-radius: 6px;
  margin-bottom: 1rem;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    height: 42px;
    justify-content: center;
  }

  > p {
    color: red;
    font-size: 12px;
    position: absolute;
    bottom: -1.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`

export const OptionalText = styled.div`
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme['base-label']};
`

export const AddressTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`

export const PaymentContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 40px;
  display: flex;
  flex-direction: column;
`

export const PaymentMethodButtons = styled.div`
  /* display: flex;
  width: 100%;
  justify-content: space-around;
  gap: 12px;
  > p {
    color: red;
  } */  

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  > p {
    grid-column: span 3;
    color: red;
  }
`

export const PaymentTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`

export const CheckoutContainer = styled.aside`
  width: 448px;
  > div {
    margin-top: 15px;
    padding: 40px;
    background: ${(props) => props.theme['base-card']};
    border-radius: 6px 44px;
  }
`

export const SeparatorContainer = styled.div`
  height: 0px;
  border: 1px solid ${(props) => props.theme['base-button']};
  margin: 24px 0;
`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  gap: 12px;

  > :nth-child(3) {
    font-weight: bold;
    font-size: 20px;
  }

  > div {
    display: flex;
    justify-content: space-between;
  }
`

export const ConfirmButton = styled.button`
  background: ${(props) => props.theme.yellow};
  width: 100%;
  color: ${(props) => props.theme.white};
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 6px;
  transition: 0.2s;
  border: none;

  :hover {
    background: ${(props) => props.theme['yellow-dark']};
    cursor: pointer;
  }
`
