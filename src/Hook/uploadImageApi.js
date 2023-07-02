const CLOUD_NAME = 'dthbjizoe';
const UNSIGNED_UPLOAD_PRESET = 'cwxymgks';

export const uploadImage = async ({ img }) => {
  const formdata = new FormData();

  formdata.append('file', img);
  formdata.append('cloud_name', CLOUD_NAME);
  formdata.append('upload_preset', UNSIGNED_UPLOAD_PRESET);
  formdata.append('public_id', img.name);
  const POST_URL = 'https://api.cloudinary.com/v1_1/' + CLOUD_NAME + '/auto/upload';

  const response = await fetch(POST_URL, {
    method: 'POST',
    body: formdata
  });

  return response.json();
};
