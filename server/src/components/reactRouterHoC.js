import React, { Component } from 'react';
import { StaticRouter, Router } from "react-router-dom";
import { createBrowserHistory } from 'history';

let historySingleton;

function initializeHistory() {
  historySingleton = createBrowserHistory();
}

function getHistory() {
  if (!historySingleton) {
    initializeHistory();
  }
  return historySingleton;
}
/**
 * TODO: Add full support to <Link> and <NavLink>
 * Trying to make React-router work with next.js.
 * Changing <StaticRouter> -> <Router> only on Link change, otherwise we'd have instant DOM reload.
 * @param {Object} options
 * @param {String} [options.url] - to render
 * @param {Boolean} [options.dynamicRoute] - whether it's dynamic route or not. If it is - it will render <StaticRouter /> with "prop.url" - when defined
 */
export function connectReactRouter(options = {}) {
  if (typeof options.url !== "string" && !options.dynamicRoute) {
    throw new Error('"url" should be defined or "dynamicRoute" should be "true", supplied:, ' + JSON.stringify(options));
  }
  return function(WrappedComponent) {
    return class ReactRouterWrapper extends Component {
      constructor(props) {
        super();
        this.state = {
          client: false,
        }
        this.staticRouterContex = {
          url: props.routerUrl || "/",
        };
      }
      
      // Only on client side
      componentDidMount() {
        initializeHistory();
        this.listenStaticRouterUpdates();
      }

      listenStaticRouterUpdates() {
        const that = this;
        let urlValue = this.staticRouterContex.url;
        Object.defineProperty(this.staticRouterContex, "url", {
          set: function(newUrl) {
            urlValue = newUrl;
            historySingleton.push(newUrl);
            that.setState({
              client: true,
            })
          },
          get: function() {
            return urlValue;
          }
        });
      }

      renderWithStaticRouter() {
        return (
          <StaticRouter location={this.staticRouterContex.url} context={this.staticRouterContex}>
              <WrappedComponent {...this.props} />
          </StaticRouter>
        );
      }

      renderWithBrowserRouter() {
        return (
          <Router history={getHistory()}>
            <WrappedComponent {...this.props } />
          </Router>
        );
      }

      render() {
        if (!this.state.client) {
          return this.renderWithStaticRouter();
        }
        return this.renderWithBrowserRouter();
      }
    }
  }
}
