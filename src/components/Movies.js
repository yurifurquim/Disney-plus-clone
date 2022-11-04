import React from 'react'
import styled from "styled-components"

function Movies() {
  return (
    <Container>
        <h4>Recommended For You</h4>
        <Content>
            <Wrap>
                <a href="/detail" >
                <img src="https://wallpaperaccess.com/full/2618005.jpg" alt="Click for more information"/>
                </a>
            </Wrap>
            <Wrap>
                <img src="https://tech4gamers.com/wp-content/uploads/2022/08/disney-plus-featured.jpg" />
            </Wrap>
            <Wrap>
                <img src="https://wallpaperaccess.com/full/2446491.jpg" />
            </Wrap>
            <Wrap>
                <img src="https://almomento.mx/wp-content/uploads/2021/11/Disney-Plus-Day-estrenos-segundo-aniversario.jpg" />
            </Wrap>
        </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`

`
const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr))
`
const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &:hover {
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
        rgb( 0 0 0 / 72%) 0px 30px 22px -10px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
`
const a = styled.a`

`