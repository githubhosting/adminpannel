import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Title } from 'react-admin';
import styles from './styles.css';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// export default () => (
//     <Card variant="outlined">
//         <Title title="Welcome to the administration" />
//         <CardContent>All Components Will be listed Here after CIE</CardContent>
//     </Card>
// );

export default () => (
  <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
        Hello, Welcome to Admin Webpage
      </Typography>
      <br />
      <Typography variant="h5" component="div">
        FOODEY <br />
        Indigo Infrastructures Private Limited
      </Typography>
      <br />
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Website made by Shravan
      </Typography>
      {/* <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography> */}
    </CardContent>
    <CardActions>
      <Button
        href="https://myselfshravan.github.io/"
        target="_blank"
        size="medium"
        variant="contained"
      >
        Dev Portfolio
      </Button>
    </CardActions>
  </Card>
);
