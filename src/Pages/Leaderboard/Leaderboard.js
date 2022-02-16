import React from 'react';
import { Title, Button } from '../../Styles';
import { LeaderboardRoot, Item, LeaderboardContainer, RankItem, RankNo, Username, Score } from './Leaderboard.elements';
import { users } from '../../users';

const Leaderboard = () => {
    return(
        <LeaderboardRoot>
            <Item ed={11}>
                <Title>Leaderboard</Title>
            </Item>

            <Item sd={13} ed={14}>
                <Button>Close</Button>
            </Item>

            <Item>
                <LeaderboardContainer>
                    {users.map((user) => 
                        <RankItem>
                            <RankNo>#{user.rankNo}</RankNo>
                            <Username>{user.uname}</Username>
                            <Score>{user.score}</Score>
                        </RankItem>
                    )}
                </LeaderboardContainer>
            </Item>

            <Item>
                <RankItem>
                    <RankNo>#900</RankNo>
                    <Username>NOOB</Username>
                    <Score>-500</Score>
                </RankItem>
            </Item>
        </LeaderboardRoot>
    );
}

export default Leaderboard;
