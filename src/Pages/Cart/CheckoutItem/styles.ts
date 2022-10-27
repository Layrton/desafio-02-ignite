import styled from 'styled-components'

export const CheckoutItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;

  > :nth-child(1) {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 20px;
    flex: 1;
    img {
      height: 64px;
    }
  }

  > :nth-child(2) {
    display: flex;
    font-weight: bold;
  }
`

export const TitleAndAmount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`

export const AmountPickerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  > :nth-child(2) {
    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    font-size: 12px;
    gap: 4px;
  }
`

export const AmountPicker = styled.div`
  display: flex;
  background: ${(props) => props.theme['base-button']};
  width: 72px;
  height: 38px;
  border-radius: 6px;
  align-items: center;
  justify-content: space-around;

  .minus,
  .plus {
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.purple};
    height: 100%;

    > :first-child {
      color: ${(props) => props.theme.purple};
    }
    :hover {
      cursor: pointer;
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
