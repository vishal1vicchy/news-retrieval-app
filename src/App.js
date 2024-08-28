import React, { Component, createRef } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
  }
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress:0
  }
  setProgress = (progress) => {
    this.ref.current.continuousStart();
    setTimeout(() => {
      this.ref.current.complete();
    }, progress);
  };

  render() {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <News pageSize={5} country="in" category="general" setProgress={this.setProgress}/>,
      },
      {
        path: '/business',
        element: <News pageSize={5} country="in" category="business" setProgress={this.setProgress}/>,
      },
      {
        path: '/entertainment',
        element: <News pageSize={5} country="in" category="entertainment" setProgress={this.setProgress}/>,
      },
      {
        path: '/general',
        element: <News pageSize={5} country="in" category="general" setProgress={this.setProgress}/>,
      },
      {
        path: '/health',
        element: <News pageSize={5} country="in" category="health" setProgress={this.setProgress}/>,
      },
      {
        path: '/science',
        element: <News pageSize={5} country="in" category="science" setProgress={this.setProgress}/>,
      },
      {
        path: '/sports',
        element: <News pageSize={5} country="in" category="sports" setProgress={this.setProgress}/>,
      },
      {
        path: '/technology',
        element: <News pageSize={5} country="in" category="technology" setProgress={this.setProgress}/>,
      },
    ]);

    return (
      <div>
        <Navbar />
        <LoadingBar color='#f11946' ref={this.ref} />
        <RouterProvider router={router} />
      </div>
    );
  }
}
