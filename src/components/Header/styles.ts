import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  height: 104px;
  align-items: center;
  justify-content: space-between;
  padding: 32px 160px;
  position: fixed;
  background-color: ${(props) => props.theme['background-white']};
  width: 100%;

  nav {
    display: flex;
    gap: 12px;
  }
`
export const LocationContainer = styled.div`
  background: ${(props) => props.theme['purple-light']};
  padding: 8px;
  border-radius: 6px;
  display: flex;
  gap: 4px;
  align-items: center;

  color: ${(props) => props.theme['purple-dark']};

  > :first-child {
    color: ${(props) => props.theme.purple};
  }
`

export const CartIcon = styled.div`
  background: ${(props) => props.theme['yellow-light']};
  padding: 8px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  :first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme['yellow-dark']};
  }
  div {
    background: ${(props) => props.theme['yellow-dark']};
    color: white;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    position: absolute;
    top: -8px;
    right: -8px;
  }
`
