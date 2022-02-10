import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryRoot = styled.div`
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
`

export const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Box = styled(Link)`
    width: 430px;
    height: 430px;
    border: 5px solid #000000;
    color: #000000;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: 0.2s ease-in-out;

    &:hover{
        transform: scale(1.05);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.40);
    }
`

