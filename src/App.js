import './App.css';
import logo from './logo.svg';
import React from 'react';
import AWSAppSyncClient from 'aws-appsync';
import {Rehydrated} from 'aws-appsync-react';
import Amplify from 'aws-amplify';
import {withAuthenticator} from 'aws-amplify-react';
import awsconfig from './aws-exports';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import UserList from './Users';
import { ThemeProvider } from '@livechat/ui-kit'

Amplify.configure(awsconfig);

function ReactPage() {
  return (
    <div className="App">
       <ThemeProvider>
          <UserList/>
      </ThemeProvider>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


const AppRoute = () =>(
  <Router>
    <div>
      <Route exact={true} path="/" component={ReactPage}/>
    </div>
  </Router>
)



class App extends React.Component{

  render() {
    const signInUserSession = this.props.authData.signInUserSession;
    let accessToken = null;
    if (signInUserSession) {
      accessToken = signInUserSession.accessToken.jwtToken;
      console.log(`accessToken = ${accessToken}`);
    }
  
    const client = new AWSAppSyncClient({
      url: awsconfig.aws_appsync_graphqlEndpoint,
      region: awsconfig.aws_appsync_region,
      auth: {
        type: awsconfig.aws_appsync_authenticationType,
        jwtToken: accessToken
      }
    });

    return(
      <ApolloProvider client={client}>
        <Rehydrated>
          <AppRoute/>
        </Rehydrated>
      </ApolloProvider>
    );
  }
}


export default withAuthenticator(App, true);
