import * as React from 'react';
import { Layout } from 'react-admin';
import MyAppBar from './MyAppBar';
import ResponsiveAppBar from './ResponsiveAppBar';

const MyLayout = (props) => <Layout {...props} appBar={MyAppBar} />;

export default MyLayout;