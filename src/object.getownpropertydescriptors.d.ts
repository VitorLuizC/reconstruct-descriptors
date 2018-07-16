declare module 'object.getownpropertydescriptors' {
  /**
   * Returns an object containing all own property descriptors of an object
   * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  function implementation <T extends object> (o: T): { [P in keyof T]: TypedPropertyDescriptor<T[P]> } & { [x: string]: PropertyDescriptor };

  namespace implementation {
    function shim (): typeof implementation;
    function getPolyfill (): typeof implementation;
    function implementation (): typeof implementation;
  }

  export = implementation;
}
