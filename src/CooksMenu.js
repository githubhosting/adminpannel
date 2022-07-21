import * as React from 'react';
import { Card, CardContent } from '@mui/material';
import { Title } from 'react-admin';

const CooksMenu = () => (
  <Card
    sx={{
      mt: 3,
      ml: 1,
      mr: 1,
      boxShadow: 3,
      borderRadius: 2,
    }}
  >
    <Title title="CooksMenu" />
    <CardContent>Menu</CardContent>
  </Card>
);

export default CooksMenu;