import * as React from 'react';
import { Card, CardContent } from '@mui/material';
import { Title } from 'react-admin';

const Settings = () => (
  <Card
    sx={{
      mt: 3,
      ml: 1,
      mr: 1,
      boxShadow: 3,
      borderRadius: 2,
    }}
  >
    <Title title="Settings" />
    <CardContent>Settings Page</CardContent>
  </Card>
);

export default Settings;
