// styledComponents.js
import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #ffffff;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 20px;
`

export const CardContainer = styled.div`
  background-color: #ffffff;
  padding: 30px;
  margin: 10px;
  text-align: center;
  width: 70%;
  align-items: center;
  @media screen and (min-width: 768px) {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
`

export const MainHeading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto', sans-serif;
  font-size: 35px;
  text-align: center;
`

export const Paragraph = styled.p`
  color: #334155;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
`

export const Image = styled.img`
  width: 60%;
  height: 500px;
`

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #1e293b;
  text-align: center;
`

export const Button = styled.button`
  background-color: #1f81ff;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  margin-top: 10px;
`
