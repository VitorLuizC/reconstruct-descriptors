import reconstruct from 'reconstruct';
import descriptors from 'object.getownpropertydescriptors';

export type ReconstructΛ = (descriptor: PropertyDescriptor, property: symbol | string) => PropertyDescriptorMap;

/**
 * Deeply reconstruct any object iterating over its property descriptors.
 * @param object Object that contains the properties and methods.
 * @param λ Lambda to reconstructs object property descriptors.
 */
export default (object: object, λ: ReconstructΛ) => {
  const reconstruction = Object.create(null, reconstruct(descriptors(object), λ));
  return reconstruction;
};
