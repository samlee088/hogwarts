import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Screens/HomePage';
import SelectHouse from './Screens/SelectHouse';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
function App() {

  const httpLink = createHttpLink({
    uri: '/graphql',
  });
  
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });
  
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  // const client = new ApolloClient({
  //   uri: 'http://localhost:3000/graphql',
  //   cache: new InMemoryCache(),
  // });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <Routes>
            <Route
            path='/'
            element={<HomePage/>}
            />
            <Route 
            path='/SelectHouse'
            element={<SelectHouse/>}
            />
          </Routes>
        </Router>
      </div>
    </ApolloProvider> 
  );
}

export default App;
