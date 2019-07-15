import React from 'react'
import styled from 'styled-components'

// TODO: it is proper place for using background gradient while img is loading
// TODO: add webp support
const Wrapper = styled.div`
  height: 100vh;
  background: #999 url('/static/img/hero-styled.jpg') center no-repeat;
  /* background: #999 url(data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAA4DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQG/8QAIBABAAEDAwUAAAAAAAAAAAAAAgEAAxEEEyEUIjGBkf/EABUBAQEAAAAAAAAAAAAAAAAAAAED/8QAGBEAAwEBAAAAAAAAAAAAAAAAAQIDABH/2gAMAwEAAhEDEQA/AMb1V83DFzUlpTwdnEefVWmUmjCGc57hPHylKpSrqRw5jFHB6N//2Q==) center no-repeat; */
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Text = styled.div`
  font-size: 42px;
  color: #fff;
  text-transform: capitalize;
`

const Hero = () => (
    <Wrapper>
        <Text>Аренда квартир в Блаблабл</Text>
    </Wrapper>
)

export default Hero