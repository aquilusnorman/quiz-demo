import React from 'react';
import { HomeRoot, Item, StartButton, ButtonText, ModalBox, ModalField, SL } from './Home.elements';
import { Title, Button } from '../../Styles';
import { Modal } from '@mui/material';

const Home = () => {

  const [showModal, setShowModal] = React.useState(false);
  const [switchSL, setSwitchSL] = React.useState(false); // False == Login | True == Sign Up

  const buttonHandler = () => {
    setShowModal(!showModal); 
  }

  return(
    <>
      <HomeRoot>{/* GRID */}

        <Item>
          <Title style={{ textAlign: 'center' }}>Welcome to Quiz Game</Title>
        </Item>

        <Item sd={6} ed={10} style={{ justifySelf: 'center' }}>
          <StartButton onClick={() => buttonHandler()}>
            <ButtonText>Start</ButtonText>
          </StartButton>
        </Item>

      </HomeRoot>

      {
      showModal ?
        <ModalBox>

          <div style={{ display: 'flex', marginBottom: 20}}>
            <SL onClick={() => setSwitchSL(true)} style={{ marginRight: 30 }}>Sign Up</SL>
            <SL onClick={() => setSwitchSL(false)} style={{ marginLeft: 30 }}>Login</SL>
          </div>

          {
            switchSL ?
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 30 }}>
              <ModalField placeholder='username' variant="standard" InputProps={{ disableUnderline: true }} />
              <ModalField placeholder='email' variant="standard" InputProps={{ disableUnderline: true }} />
              <ModalField placeholder='password' variant="standard" InputProps={{ disableUnderline: true }} />
            </div>
            :
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 30 }}>
              <ModalField placeholder='email' variant="standard" InputProps={{ disableUnderline: true }} />
              <ModalField placeholder='password' variant="standard" InputProps={{ disableUnderline: true }} />
            </div>
          }

          <div style={{ display: 'flex' }}>
            <Button style={{ marginRight: 10 }} onClick={() => buttonHandler()}>Cancel</Button>
            <Button style={{ marginLeft: 10 }}>Submit</Button>
          </div>

        </ModalBox>

      :

      <></>
      }
    </>
      
  );
};

export default Home;