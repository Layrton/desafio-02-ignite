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
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      grid-template-areas:
        'cep cep cep'
        'street street street'
        'number additional optionalinfo'
        'neighborhood city state';
      gap: 12px;
    }

    input {
      background: ${(props) => props.theme['base-input']};
      box-shadow: none;
      border: none;
      padding: 12px;
      border-radius: 4px;
    }

    .cep {
      grid-area: cep;
      width: 200px;
    }
    .street {
      grid-area: street;
    }
    .number {
      grid-area: number;
    }
    .additional {
      grid-area: additional;
    }
    .optional {
      grid-area: optionalinfo;
    }
    .neighborhood {
      grid-area: neighborhood;
    }
    .city {
      grid-area: city;
    }
    .state {
      grid-area: state;
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
  flex-direction: column;
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
    bottom: -1rem;
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

export const PaymentButtons = styled.div`
  display: flex;
  justify-content: space-around;

  > div {
    background: ${(props) => props.theme['base-button']};
    font-size: 12px;
    display: flex;
    padding: 16px;
    margin-top: 48px;
    width: 178px;
    border-radius: 6px;
    align-items: center;
    gap: 12px;
    color: ${(props) => props.theme['base-text']};
    border: 1px solid transparent;

    :hover {
      cursor: pointer;
      background: ${(props) => props.theme['base-hover']};
    }

    &.selected {
      background: ${(props) => props.theme['purple-light']};
      border: 1px solid ${(props) => props.theme.purple};
    }
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
