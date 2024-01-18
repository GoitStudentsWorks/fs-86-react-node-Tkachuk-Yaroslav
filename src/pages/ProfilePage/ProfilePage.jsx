import React from 'react';
import { Container } from 'components/styles/Container/Container';
import TitlePage from 'components/TitlePage/TitlePage';
import UserCard from 'components/UserCard/UserCard';
import UserForm from 'components/UserForm/UserForm';
import { WrapperProfilePage } from './ProfilePage.styled';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const result = useSelector(state => state.auth.user.result);
  console.log(result);
  return (
    <Container>
      <TitlePage>Profile Settings</TitlePage>
      <WrapperProfilePage>
        <UserCard user={result} />
        <UserForm />
      </WrapperProfilePage>

      {/* {result ? (
        <WrapperProfilePage>
          <UserCard user={result} />
          <UserForm user={result} />
        </WrapperProfilePage>
      ) : (
        ''
      )} */}
    </Container>
  );
};

export default ProfilePage;
