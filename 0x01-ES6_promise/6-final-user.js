import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpPromise, uploadPromise]).then((results) => {
    return results.map((res) => {
      if (res.status === 'fulfilled') {
        return { status: res.status, value: res.value };
      }
      return { status: res.status, value: res.reason };
    });
  });
}
