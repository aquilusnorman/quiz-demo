import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Grid, Row } from '../../Layout'
import { TextField } from '@mui/material';

export const HomeRoot = styled(Grid)`
    
`

export const Item = styled(Row)`
    
`

export const SL = styled.div`
    font-size: 70px;
    font-weight: bold;

    &:hover {
        transform: scale(1.01);
    }
`

export const StartButton = styled.div`
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

export const ModalBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    border: 2px solid black;
    box-shadow: 10px 10px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    padding: 40px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ModalField = styled(TextField)`
    width: 500px;
    margin-top: 20px !important;
    padding: 10px !important;
    background: #EFEFEF;
    border-radius: 30px;
`

export const Button = styled.div`
    width: 200px;
    height: auto;
    background: #C4C4C4;
    border-radius: 8px;
    padding: 10px;
    text-align: center;
    font-weight: bold;
    font-size: 30px;

    &:hover{
        transform: scale(1.01);
    }
`