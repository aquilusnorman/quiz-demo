import React, { useState } from 'react';
import { CategoryRoot, Title, Box, BoxContainer } from './Category.elements';

const Category = () => {

  const [catState, setCatState] = useState('');

  const changeCategory = (val) => {
    setCatState(val);
  }

  return(
      <CategoryRoot>
          <Title>CHOOSE CATEGORY</Title>
          <BoxContainer>
            <Box to="#" style={{ marginRight: '20px' }}>
              <Title onClick={() => changeCategory('Sports')}>Sports</Title>
            </Box>
            <Box to="#" style={{ marginLeft: '20px' }}>
              <Title onClick={() => changeCategory('Mystery')}>Mystery</Title>
            </Box>
          </BoxContainer>
          <Title>{catState}</Title>
      </CategoryRoot>
  );
};

export default Category;
