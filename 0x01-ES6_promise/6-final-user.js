// 6-final-user.js
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUp = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([signUp, photo])
    .then((results) =>
      results.map((res) => ({
        status: res.status,
        value: res.status === 'fulfilled' ? res.value : res.reason,
      }))
    );
}
