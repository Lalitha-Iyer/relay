/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<b914b12caad02d109ad117aa8d2f6767>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
type withProvidedVariablesTest5Fragment$fragmentType = any;
export type withProvidedVariablesTest5Query$variables = {||};
export type withProvidedVariablesTest5QueryVariables = withProvidedVariablesTest5Query$variables;
export type withProvidedVariablesTest5Query$data = {|
  +node: ?{|
    +$fragmentSpreads: withProvidedVariablesTest5Fragment$fragmentType,
  |},
|};
export type withProvidedVariablesTest5QueryResponse = withProvidedVariablesTest5Query$data;
export type withProvidedVariablesTest5Query = {|
  variables: withProvidedVariablesTest5QueryVariables,
  response: withProvidedVariablesTest5Query$data,
|};
type ProvidedVariableProviderType = {|
  +__pv__provideRandomNumber_invalid1: {|
    +get: () => number,
  |},
  +__pv__provideRandomNumber_invalid2: {|
    +get: () => number,
  |},
|};
*/

var providedVariableProviders/*: ProvidedVariableProviderType*/ = {
  "__pv__provideRandomNumber_invalid1": require('./../provideRandomNumber_invalid1'),
  "__pv__provideRandomNumber_invalid2": require('./../provideRandomNumber_invalid2')
};

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": 4
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "uri",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "withProvidedVariablesTest5Query",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "withProvidedVariablesTest5Fragment"
          }
        ],
        "storageKey": "node(id:4)"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "__pv__provideRandomNumber_invalid1"
      },
      {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "__pv__provideRandomNumber_invalid2"
      }
    ],
    "kind": "Operation",
    "name": "withProvidedVariablesTest5Query",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "scale",
                    "variableName": "__pv__provideRandomNumber_invalid1"
                  }
                ],
                "concreteType": "Image",
                "kind": "LinkedField",
                "name": "profile_picture",
                "plural": false,
                "selections": (v1/*: any*/),
                "storageKey": null
              },
              {
                "alias": "other_picture",
                "args": [
                  {
                    "kind": "Variable",
                    "name": "scale",
                    "variableName": "__pv__provideRandomNumber_invalid2"
                  }
                ],
                "concreteType": "Image",
                "kind": "LinkedField",
                "name": "profile_picture",
                "plural": false,
                "selections": (v1/*: any*/),
                "storageKey": null
              }
            ],
            "type": "User",
            "abstractKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "node(id:4)"
      }
    ]
  },
  "params": {
    "cacheID": "1aa469c4603ba046b869adafac26238f",
    "id": null,
    "metadata": {},
    "name": "withProvidedVariablesTest5Query",
    "operationKind": "query",
    "text": "query withProvidedVariablesTest5Query(\n  $__pv__provideRandomNumber_invalid1: Float!\n  $__pv__provideRandomNumber_invalid2: Float!\n) {\n  node(id: 4) {\n    __typename\n    ...withProvidedVariablesTest5Fragment\n    id\n  }\n}\n\nfragment withProvidedVariablesTest5Fragment on User {\n  profile_picture(scale: $__pv__provideRandomNumber_invalid1) {\n    uri\n  }\n  other_picture: profile_picture(scale: $__pv__provideRandomNumber_invalid2) {\n    uri\n  }\n}\n",
    "providedVariables": {
      "__pv__provideRandomNumber_invalid1": require('./../provideRandomNumber_invalid1'),
      "__pv__provideRandomNumber_invalid2": require('./../provideRandomNumber_invalid2')
    }
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "b9da4aca44074152f72d5208416421af";
}

module.exports = ((node/*: any*/)/*: Query<
  withProvidedVariablesTest5Query$variables,
  withProvidedVariablesTest5Query$data,
>*/);
