import merge from 'lodash.merge';

import app from './app';

export default merge({}, app, {
    rules: {
        'react/jsx-props-no-spreading': 'off'
    }
});
