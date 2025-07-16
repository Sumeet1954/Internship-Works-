// CategoryBar.jsx
import React from 'react';
import { Box, Chip, useTheme } from '@mui/material';
import { styled } from '@mui/system';

// Example category data
const categories = [
  'All', 'Music', 'Mixes', 'Batter', 'Gaming', 'JavaScript',
  'Comedy Nights with Kapil', 'Tamil Cinema', 'C++',
  'T-Series', 'Shankar Mahadevan', 'Shark Tank', 'Trailers', 'Live'
];

// Scrollable container
const ScrollContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  scrollbarWidth: 'none', // Firefox
  msOverflowStyle: 'none', // IE/Edge
  '&::-webkit-scrollbar': {
    display: 'none', // Chrome/Safari
  },
  padding: theme.spacing(1),
  gap: theme.spacing(1),
  backgroundColor: '#fff',
}));

const CategoryBar = () => {
  const [selected, setSelected] = React.useState('All');
  const theme = useTheme();

  return (
    <ScrollContainer>
      {categories.map((category) => (
        <Chip
          key={category}
          label={category}
          onClick={() => setSelected(category)}
          clickable
          sx={{
            bgcolor: selected === category ? '#333' : '#f1f1f1',
            color: selected === category ? '#fff' : '#000',
            fontWeight: 500,
            px: 2,
            py: 0.5,
            borderRadius: '12px',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        />
      ))}
    </ScrollContainer>
  );
};

export default CategoryBar;
