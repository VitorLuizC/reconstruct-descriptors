import reconstruct from 'reconstruct';
import descriptors from 'object-descriptors';

export type ReconstructΛ = (
  descriptor: PropertyDescriptor,
  property: PropertyKey
) => PropertyDescriptorMap | false;

/**
 * Deeply reconstruct any object iterating over its property descriptors.
 * @param object Object that contains the properties and methods.
 * @param λ Lambda to reconstructs object property descriptors.
 */
export default (
  object: object,
  λ: ReconstructΛ
): object => Object.create(null, reconstruct(descriptors(object), λ));
