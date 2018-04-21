import test from 'ava';
import reconstruct from '../';

test('Module exports a function', (context) => {
  context.is(typeof reconstruct, 'function');
});

test('Reconstruct from property descriptors', (context) => {
  const original = {
    name: 'Ryan',
  };

  const user = reconstruct(original, (property, descriptor) => ({
    [property]: {
      ...descriptor,      // A non-writable & non-configurable property
      writable: false,    // can't be deleted or changed.
      configurable: false,
    }
  }));

  context.not(object, user);
  user.name = 'Bruno';
  context.is(user.name, original.name);
  delete user.name;
  context.is(user.name, original.name);
});

test('Returning falsy on callback is safe', (context) => {
  const original = {
    name: 'Ryan',
    stars: 5,
  };

  const user = reconstruct(original, (property, descriptor) => {
    if (property === 'name')
      return null;
    return { [property]: descriptor };
  });

  context.is(typeof user, 'object');
  context.true('star' in user);
  context.false('name' in user);
});