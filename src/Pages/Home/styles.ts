import styled from 'styled-components'
import background from '../../assets/intro-background.png'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const IntroContainer = styled.section`
  font-family: 'Baloo 2', sans-serif;
  display: grid;
  grid-template-columns: 1fr 476px;
  padding: 196px 160px 92px 160px;
  gap: 56px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;
    margin-bottom: 16px;
  }

  h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }

  ul {
    margin-top: 4.125rem;
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'first second'
      'third fourth';
    list-style-type: none;
    gap: 20px;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-text']};
    li {
      display: flex;
      gap: 12px;
      align-items: center;

      p {
        font-size: 1rem;
      }

      .cart {
        background: ${(props) => props.theme['yellow-dark']};
        color: ${(props) => props.theme['background-white']};
        border-radius: 50%;
        padding: 8px;
      }
      .package {
        background: ${(props) => props.theme['base-text']};
        color: ${(props) => props.theme['background-white']};
        border-radius: 50%;

        padding: 8px;
      }
      .timer {
        background: ${(props) => props.theme.yellow};
        color: ${(props) => props.theme['background-white']};
        border-radius: 50%;

        padding: 8px;
      }
      .coffee {
        background: ${(props) => props.theme.purple};
        color: ${(props) => props.theme['background-white']};
        border-radius: 50%;

        padding: 8px;
      }
    }
  }
`

export const ProductsContainer = styled.section`
  padding: 32px 160px;

  h3 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
  }

  > div {
    /* display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 32px; */
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    row-gap: 2.5rem;
    margin-top: 3.5rem;
  }
`
