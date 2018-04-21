/*!
 * reconstruct-descriptors v0.0.0
 * (c) 2018-present Vitor Luiz Cavalcanti <vitorluizc@outlook.com> (https://vitorluizc.github.io)
 * Released under the MIT License.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var reconstruct = _interopDefault(require('reconstruct'));
var descriptors = _interopDefault(require('object.getownpropertydescriptors'));

/**
 * Deeply reconstruct any object iterating over its property descriptors.
 * @param object Object that contains the properties and methods.
 * @param λ Lambda to reconstructs object property descriptors.
 */

var reconstructDescriptors = (function (object, λ) {
  var reconstruction = Object.create(null, reconstruct(descriptors(object), λ));
  return reconstruction;
});

module.exports = reconstructDescriptors;
