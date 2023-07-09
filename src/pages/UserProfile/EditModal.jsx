import * as React from 'react';
import { BiImageAdd } from 'react-icons/bi';
import { ColorPalette } from '../../Color';
import { Button } from '../../Components/Button';
import { Input, InputContainer } from '../../Components/Input';
import { Modal } from '../../Components/Modal';
import { ImagePlaceholder } from '../../Components/PageWrapper/PageWrappers.style';
import { useUserApis } from '../../Hook/useUserApis';

export function EditModal({ isOpen, closeEditModal, initialUserData, setSingleUserData }) {
  const [formData, setFormData] = React.useState(initialUserData);
  const { editUserDetails } = useUserApis();
  const [uploadedImage, setUploadedImage] = React.useState(null);

  const handleOnChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSave = async () => {
    await editUserDetails({ singleUserData: formData, setSingleUserData, img: uploadedImage });
    closeEditModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      height="auto"
      width="420px"
      title="Edit Profile"
      closeModal={() => closeEditModal()}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          alignItems: 'flex-end',
          padding: '24px 0px'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            position: 'relative'
          }}
        >
          {uploadedImage || initialUserData.imgUrl ? (
            <img
              alt="img"
              src={uploadedImage ? URL.createObjectURL(uploadedImage) : initialUserData.imgUrl}
              height="100px"
              width="100px"
              style={{ borderRadius: '50%' }}
            />
          ) : (
            <ImagePlaceholder style={{ height: '100px', width: '100px' }} />
          )}

          <div style={{ position: 'absolute', right: 'calc(50% - 55px)', bottom: '-5px' }}>
            <label htmlFor="file">
              <input
                id="file"
                type="file"
                onChange={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setUploadedImage(e.target.files[0]);
                }}
                style={{
                  display: 'none'
                }}
              />
              <BiImageAdd
                size={24}
                style={{
                  color: ColorPalette.primary.main,
                  cursor: 'pointer'
                }}
              />
            </label>
          </div>
        </div>

        <InputContainer>
          First Name
          <Input
            type="text"
            placeholder="Enter First name"
            name="firstName"
            value={formData.firstName}
            onChange={(event) => handleOnChange(event)}
          />
        </InputContainer>
        <InputContainer>
          Last Name
          <Input
            type="text"
            placeholder="Enter Last name"
            name="lastName"
            value={formData.lastName}
            onChange={(event) => handleOnChange(event)}
          />
        </InputContainer>
        <InputContainer>
          Bio
          <Input
            type="text"
            placeholder="Write Something about yourself....."
            name="bio"
            value={formData.bio}
            onChange={(event) => handleOnChange(event)}
          />
        </InputContainer>
        <InputContainer>
          Website
          <Input
            type="website"
            placeholder="Enter Website link...."
            name="website"
            value={formData.website}
            onChange={(event) => handleOnChange(event)}
          />
        </InputContainer>
        <Button onClick={() => onSave()}>Save</Button>
      </div>
    </Modal>
  );
}
