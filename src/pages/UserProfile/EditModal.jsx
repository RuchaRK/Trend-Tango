import * as React from 'react';
import { InputContainer, Input } from '../../Components/Input';
import { Modal } from '../../Components/Modal';
import { Button } from '../../Components/Button';
import { useUserApis } from '../../Hook/useUserApis';

export function EditModal({ isOpen, closeEditModal, initialUserData, setSingleUserData }) {
  const [formData, setFormData] = React.useState(initialUserData);
  const { editUserDetails } = useUserApis();

  const handleOnChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSave = async () => {
    await editUserDetails({ singleUserData: formData, setSingleUserData });
    closeEditModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      height="auto"
      width="420px"
      title="Edit Profile"
      closeModal={() => closeEditModal()}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          alignItems: 'flex-end',
          padding: '24px 0px'
        }}>
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
