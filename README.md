[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/zeit/next.js/tree/master/examples/with-next-css)

# Demonstration Instructions

```sh
yarn

yarn storybook

# notice nothing renders within Storybook at `localhost:9001`
# comment out `withRouter` line (#31) in `.storybook/config.js`
# notice red screen of death
```

### Download manually

Download the example:

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/canary | tar -xz --strip=2 next.js-canary/examples/with-next-css
cd with-next-css
```

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```

## The idea behind the example

This example demonstrates how to use the [next-css plugin](https://github.com/zeit/next-plugins/tree/master/packages/next-css) It includes patterns for with and without CSS Modules, with PostCSS and with additional webpack configurations on top of the next-css plugin.
