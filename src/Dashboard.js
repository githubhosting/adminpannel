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
  <>
    <Card
      sx={{
        mt: 3,
        ml: 1,
        mr: 1,
        boxShadow: 3,
        borderRadius: 2,
        // width: {
        //   xs: 300, // theme.breakpoints.up('xs')
        //   sm: 400, // theme.breakpoints.up('sm')
        //   md: 500, // theme.breakpoints.up('md')
        //   lg: 600, // theme.breakpoints.up('lg')
        //   xl: 700, // theme.breakpoints.up('xl')
        // },
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          Welcome to Admin Webpage
        </Typography>
        <br />
        <Typography variant="h5" component="div">
          Indigo Infrastructures Private Limited
        </Typography>
        <br />
        <Typography sx={{ mb: 1 }} color="text.secondary">
          Website made by <i>Shravan</i>
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
          boxShadow="1"
          color="primary"
          sx={{ ml: 1, mr: 1, mb: 2 }}
        >
          Portfolio
        </Button>
      </CardActions>
    </Card>
    <Card sx={{ mt: 3, ml: 1, mr: 1, mb: 0, boxShadow: 2, borderRadius: 1 }}>
      <CardActions>
        <Button
          href="https://adminpannel.vercel.app/#/Users"
          size="medium"
          variant="contained"
          boxShadow="2"
          sx={{ mt: 1, ml: 1, mr: 1, mb: 1 }}
        >
          Users
        </Button>
        <Button
          href="https://adminpannel.vercel.app/#/Cooks"
          size="medium"
          variant="contained"
          boxShadow="2"
          sx={{ mt: 1, ml: 1, mr: 1, mb: 1 }}
        >
          Cooks
        </Button>
        <Button
          href="https://adminpannel.vercel.app/#/Blogs"
          size="medium"
          variant="contained"
          boxShadow="2"
          sx={{ mt: 1, ml: 1, mr: 1, mb: 1 }}
        >
          Blogs
        </Button>
      </CardActions>
    </Card>
  </>
);
