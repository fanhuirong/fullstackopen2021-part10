import React from 'react';
import { View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './Sign';

const Main = () => {
  return (
    <View>
      {/* <AppBar/> */}
      <Routes>
        <Route path="/sign" element={<SignIn/>}/>
        <Route path="/" element={<RepositoryList />}/>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;