// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Document, { Head, NextScript, Main } from 'next/document';

export default class MyDocument extends Document {
  static contextTypes = {
    _documentProps: PropTypes.any
  }

  render() {
    return (
      <html>
        <Head>
          <meta charset="utf-8" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="theme-color" content="#000000" />
          <title>React App</title>
        </Head>
        <body className="custom_class">
          <noscript>
            You need to enable JavaScript to run this app.
          </noscript>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}