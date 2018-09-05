import React from 'react';
import Router, { withRouter } from 'next/router';
import { configure } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const requireComponents = require.context('../components/', true, /stories\.js$/);

function loadStories() {
  requireComponents.keys().forEach(requireComponents);
  // Add any new component folders with stories here, using the patterns defined above
}

/* ********************************************************** */
/* Necessary to mock Next's router */
// https://github.com/zeit/next.js/issues/1827#issuecomment-323721221
const actionWithPromise = () => {
  action('clicked link')();
  // we need to return promise because it is needed by Link.linkClicked
  return new Promise((resolve, reject) => reject());
};

const mockedRouter = {
  push: actionWithPromise,
  replace: actionWithPromise,
  prefetch: () => {},
  route: '/mock-route',
};

Router.router = mockedRouter;

withRouter = Component => props => <Component {...props} router={mockedRouter} />

/*
  Commenting out `withRouter` leads to red screen of death in Storybook with:

  Cannot read property 'route' of undefined
  TypeError: Cannot read property 'route' of undefined
    at OutboundLink (http://localhost:9001/static/preview.bundle.js:51877:81)
    at mountIndeterminateComponent (http://localhost:9001/static/preview.bundle.js:32410:13)
    at beginWork (http://localhost:9001/static/preview.bundle.js:32850:14)
    at performUnitOfWork (http://localhost:9001/static/preview.bundle.js:34893:12)
    at workLoop (http://localhost:9001/static/preview.bundle.js:34932:24)
    at renderRoot (http://localhost:9001/static/preview.bundle.js:34972:7)
    at performWorkOnRoot (http://localhost:9001/static/preview.bundle.js:35590:22)
    at performWork (http://localhost:9001/static/preview.bundle.js:35512:7)
    at performSyncWork (http://localhost:9001/static/preview.bundle.js:35484:3)
    at requestWork (http://localhost:9001/static/preview.bundle.js:35384:5)
*/
/* ********************************************************** */

configure(loadStories, module);
