import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Grid, Row } from '../../Layout';

export const CategoryRoot = styled(Grid)`
    
`

export const Item = styled(Row)`

`

export const Box = styled(Link)`
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

