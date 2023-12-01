import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
  try {
    const photoResponse = await uploadPhoto();
    const userResponse = await createUser();

    return {
      photoResponse,
      userResponse,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}

