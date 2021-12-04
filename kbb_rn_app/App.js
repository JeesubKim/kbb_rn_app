/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text} from 'react-native';
import AddMilestone from './components/AddMilestone';
import Footer from './components/Footer';
import Greetings from './components/Greetings';
import Layout from './components/Layout';
import Milestones from './components/Milestones';

function App() {
  return (
    <Layout>
      <Layout.Header color="hotpink">
        <Greetings />
      </Layout.Header>
      <Layout.Content>
        <Milestones
          milestones={[
            {id: 0, text: '작업환경 설정', done: false},
            {id: 1, text: '작업환경 설정', done: false},
            {id: 2, text: '작업환경 설정', done: false},
          ]}
        />
        {/* <Text>Hi</Text>
         <Text>Hi</Text>
         <Text>Hi</Text>
         <Text>Hi</Text> */}
      </Layout.Content>
      <Layout.Footer>
        {/* <Footer /> */}
        <AddMilestone placeholder="신규 로드매푸 적어보소" />
      </Layout.Footer>
    </Layout>
  );
}

export default App;
