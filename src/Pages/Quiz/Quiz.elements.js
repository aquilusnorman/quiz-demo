import styled from 'styled-components';
import { ImCross } from 'react-icons/im';
import { Grid, Row } from '../../Layout';
import { Link } from 'react-router-dom';

export const QuizRoot = styled(Grid)`

`

export const Item = styled(Row)`

`

export const ExitButton = styled(ImCross)`
    font-size: 50px;
`

export const QuizContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 5px solid black;
    padding: 30px;
`

export const AnswerContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 100px;
`

export const TimerContainer = styled.div`
    display: flex;
    align-items: center;
`

export const NextButton = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000;

    &:hover{
        transform: scale(1.05);
    }
`