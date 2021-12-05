/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {createContext, useState} from 'react';
import {Text} from 'react-native';
import AddMilestone from './components/AddMilestone';
import Footer from './components/Footer';
import Greetings from './components/Greetings';
import Layout from './components/Layout';
import Milestones from './components/Milestones';

export const Context = createContext();

function App() {
  const [milestones, setMilestones] = useState([
    {id: 0, text: '작업환경 설정', done: false},
    {id: 1, text: 'Firebase 연동하기', done: false},
    {id: 2, text: '계정관리하기', done: true},
    {id: 3, text: '가입 요청 받기', done: true},
  ]);
  return (
    <Context.Provider value={{setMilestones}}>
      <Layout>
        <Layout.Header color="hotpink">
          <Greetings />
        </Layout.Header>
        <Layout.Content>
          <Milestones milestones={milestones} />
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
    </Context.Provider>
  );
}

export default App;
