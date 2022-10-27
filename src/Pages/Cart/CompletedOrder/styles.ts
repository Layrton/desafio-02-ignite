import styled from 'styled-components'

export const CompletedOrderContainer = styled.main`
  padding: 144px 160px 92px 160px;
  display: flex;
  height: 100vh;
  gap: 32px;
  flex-direction: column;

  > :nth-child(2) {
    display: flex;
    gap: 100px;
    justify-content: space-around;
    align-items: center;
  }
`

export const AnnouncementContainer = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-size: 32px;
    font-weight: 800;
    color: ${(props) => props.theme['yellow-dark']};
  }

  h3 {
    font-size: 20px;
    font-weight: 400;
  }
`

export const DeliveryCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 32px;
  border-radius: 6px 36px;
  background: linear-gradient(
        ${(props) => props.theme['background-white']},
        ${(props) => props.theme['background-white']}
      )
      padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme.yellow},
        ${(props) => props.theme.purple}
      )
      border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;

  > div {
    display: flex;
    gap: 12px;
  }
`

export const IconContainer = styled.div`
  height: 32px;
  width: 32px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &.map {
    background: ${(props) => props.theme.purple};
  }
  &.timer {
    background: ${(props) => props.theme.yellow};
  }
  &.currency {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
