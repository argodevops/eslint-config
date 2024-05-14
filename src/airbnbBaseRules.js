import merge from 'lodash.merge';

import bestPractices from 'eslint-config-airbnb-base/rules/best-practices';
import errors from 'eslint-config-airbnb-base/rules/errors';
import node from 'eslint-config-airbnb-base/rules/node';
import style from 'eslint-config-airbnb-base/rules/style';
import variables from 'eslint-config-airbnb-base/rules/variables';
import es6 from 'eslint-config-airbnb-base/rules/es6';
import imports from 'eslint-config-airbnb-base/rules/imports';
import strict from 'eslint-config-airbnb-base/rules/strict';

const rules = merge(
    {},
    ...[
        bestPractices,
        errors,
        node,
        style,
        variables,
        es6,
        imports,
        strict
    ].map(({ rules }) => rules)
);

export default {
    rules
};
