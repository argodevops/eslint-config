import globals from 'globals';

import merge from 'lodash.merge';

import base from './base';
import airbnbBaseRules from './airbnbBaseRules';

export default merge({}, airbnbBaseRules, base, {
    languageOptions: {
        globals: globals.node
    }
});
