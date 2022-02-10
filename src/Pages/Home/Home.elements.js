import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomeRoot = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-items: center;

    background: rgb(216,243,220);
    background: linear-gradient(144deg, rgba(216,243,220,1) 0%, rgba(27,67,50,1) 100%);
`

export const Title = styled.div`
    font-size: 80px;
    font-weight: bold;
    margin-bottom: 80px;
`

export const Button = styled(Link)`
    width: 352px;
    height: 95px;
    border: 5px solid black;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px 30px 60px;
    text-decoration: none;
    color: black;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.2s ease-in-out;

    &:hover{
        transform: translate(3%, -3%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.40);
    }
`

export const ButtonText = styled.div`
    font-weight: 500;
    font-size: 64px;
`