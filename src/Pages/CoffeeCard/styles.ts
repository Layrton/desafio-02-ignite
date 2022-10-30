import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  margin-top: 40px;
  height: 310px;
  width: 256px;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  padding: 20px 24px;

  > img {
    margin-top: -40px;
  }
`

export const CardTags = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 4px;
  font-size: 10px;
  font-weight: 700;

  > div {
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    padding: 4px 8px;
    border-radius: 100px;
  }
`

export const CoffeeTitle = styled.div`
  margin-top: 16px;
  font-family: 'Baloo 2';

  font-size: 20px;
`

export const CoffeeDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 33px;
`

export const PriceContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-size: 24px;
  }
`

export const BuySection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const AmountPicker = styled.div`
  display: flex;
  background: ${(props) => props.theme['base-button']};
  width: 72px;
  height: 38px;
  flex-direction: row;
  border-radius: 6px;
  align-items: center;
  justify-content: space-around;
  margin-right: 8px;
  margin-left: 23px;

  div {
    /* border: 1px solid red; */
  }
`

export const IconWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: none;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  &.plus {
    transition: 0.1s;
    color: ${(props) => props.theme['purple']};


    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  &.minus {
    transition: 0.1s;
    color: ${(props) => props.theme['purple']};


    &:hover {
      /* background: ${(props) => props.theme.purple}; */
      cursor: pointer;
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`

export const CartButton = styled.div`
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};
  padding: 8px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.1s;

  &:hover {
    background: ${(props) => props.theme.purple};
    cursor: pointer;
  }
`
