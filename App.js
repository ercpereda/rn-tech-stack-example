import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './app/reducers';
import { Header } from './app/components/common';
import LibraryList from './app/components/LibraryList';

const App = () => {
    return (
      <Provider store={ createStore(reducers) }>
        <View style={{ flex: 1 }}>
          <Header text="Tech Stack" />
          <LibraryList />
        </View>
      </Provider>
    );
};

export default App;
