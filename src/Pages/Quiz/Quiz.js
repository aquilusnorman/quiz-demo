import React from 'react'
import { useLocation } from 'react-router-dom';
import { AnswerContainer, ExitButton, Item, QuizContainer, QuizRoot, TimerContainer, NextButton } from './Quiz.elements';
import { Title, Answer, Timer } from '../../Styles';
import { IoTimerOutline } from 'react-icons/io5';
import { GrNext } from 'react-icons/gr';
import { q1 } from '../../questions';

const Quiz = () => {

    const location = useLocation();

    
    return(
        <QuizRoot>
            <Item sd={2} ed={5}>
                <Title>{location.state.category}</Title>
            </Item>

            <Item sd={13} ed={14} style={{ alignSelf: 'center' }}>
                <ExitButton/>
            </Item>

            <Item>
                <QuizContainer>
                    <Title>{q1.question}</Title>
                    <AnswerContainer>
                        <Answer>{q1.a1}</Answer>
                        <Answer>{q1.a2}</Answer>
                        <Answer>{q1.a3}</Answer>
                        <Answer>{q1.a4}</Answer>
                    </AnswerContainer>
                </QuizContainer>
            </Item>

            <Item sd={2} ed={4}>
                <TimerContainer>
                    <IoTimerOutline style={{ fontSize: '80px' }}/>
                    <Timer style={{ marginLeft: '20px' }}>00:00</Timer>
                </TimerContainer>
            </Item>

            <Item sd={11} ed={14} style={{ justifySelf: 'end' }}>
                <NextButton to="#">
                    <Title>NEXT</Title>
                    <GrNext style={{ fontSize: '40px', marginLeft: '20px' }}/>
                </NextButton>
            </Item>

        </QuizRoot>
    );
}

export default Quiz;