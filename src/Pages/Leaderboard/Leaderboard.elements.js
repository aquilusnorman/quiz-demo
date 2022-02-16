import styled from 'styled-components';
import { Grid, Row } from '../../Layout';

export const LeaderboardRoot = styled(Grid)`

`

export const Item = styled(Row)`

`

export const LeaderboardContainer = styled.div`
    display: flex;
    height: 500px;
    flex-direction: column;
    border: 5px solid black;
    padding: 20px;
    overflow-y: scroll;
`

export const RankItem = styled.div`
    display: flex;
    font-size: 30px;
    padding: 20px;
    background: #c4c4c4;
    margin: 10px;
`

export const RankNo = styled.div`

`

export const Username = styled.div`
    margin-left: 40px;
`

export const Score = styled.div`
    margin-left: auto;
`