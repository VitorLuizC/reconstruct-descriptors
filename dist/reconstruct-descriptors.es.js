/*!
 * reconstruct-descriptors v0.0.0
 * (c) 2018-present Vitor Luiz Cavalcanti <vitorluizc@outlook.com> (https://vitorluizc.github.io)
 * Released under the MIT License.
 */
import reconstruct from 'reconstruct';
import descriptors from 'object.getownpropertydescriptors';

/**
 * Deeply reconstruct any object iterating over its property descriptors.
 * @param object Object that contains the properties and methods.
 * @param λ Lambda to reconstructs object property descriptors.
 */

var reconstructDescriptors = (function (object, λ) {
  var reconstruction = Object.create(null, reconstruct(descriptors(object), λ));
  return reconstruction;
});

export default reconstructDescriptors;
