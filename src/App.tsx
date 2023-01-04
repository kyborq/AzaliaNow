import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './components/Navigation';
import {Provider} from 'react-redux';
import {store} from './redux';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
