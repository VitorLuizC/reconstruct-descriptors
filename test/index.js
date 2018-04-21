import test from 'ava';
import reconstruct from '../';

test('Module exports a function', (context) => {
  context.is(typeof reconstruct, 'function');
});

test('Reconstruct from property descriptors', (context) => {
  const original = {
    name: 'Ryan',
  };

  const user = reconstruct(original, (descriptor, property) => ({
    [property]: Object.assign({}, descriptor, {
      writable: false,     // A non-writable & non-configurable property
      configurable: false, // can't be deleted or changed.
    })
  }));

  context.not(original, user);
  context.throws(() => user.name = 'Bruno');
  context.throws(() => delete user.name);
});

test('Returning falsy on callback is safe', (context) => {
  const original = {
    name: 'Ryan',
    stars: 5,
  };

  const user = reconstruct(original, (descriptor, property) => {
    if (property === 'name')
      return null;
    return { [property]: descriptor };
  });

  context.is(typeof user, 'object');
  context.true('stars' in user);
  context.false('name' in user);
});
