import React, { useState } from 'react';
import { CategoryRoot, Item, Box } from './Category.elements';
import { Title } from '../../Styles';

const Category = () => {

  return(
      <CategoryRoot>

        <Item>
          <Title style={{ textAlign: 'center' }}>CHOOSE CATEGORY</Title>
        </Item>

        <Item sd={4} ed={8}>
          <Box to="/quiz" state={{ category: 'Sports' }}>
            <Title>Sports</Title>
          </Box>
        </Item>

        <Item sd={8} ed={12}>
          <Box to="/quiz" state={{ category: 'Science' }}>
            <Title>Science</Title>
          </Box>
        </Item>
       
      </CategoryRoot>
  );
};

export default Category;
