import handleProfileSignup from '../6-final-user';

console.log(handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg'));

const test = async () => {
  const res = await handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg');
  console.log(res);
};

test();
