import App, { Container } from 'next/app';
import React from 'react'
import { historyStore } from 'client/stores'
import { Provider } from 'mobx-react'

class NextApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Provider historyStore={new historyStore("/")}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default NextApp;