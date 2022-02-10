import React from 'react';
import { HomeRoot, Title, Button, ButtonText } from './Home.elements';

const Home = () => {
  return(
      <HomeRoot>
          <Title>
              WELCOME TO QUIZ GAME
          </Title>
          
          <Button to="/category">
              <ButtonText>
                  Start
              </ButtonText>
          </Button>
      </HomeRoot>
  );
};

export default Home;