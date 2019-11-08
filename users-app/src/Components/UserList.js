import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions';
import { Card } from 'semantic-ui-react';
import UserCard from './UserCard';

const UserList = ({ users, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      <Card.Group>
        {users.map(user => {
          return <UserCard key={user.id} user={user} />;
        })}
      </Card.Group>
    </>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users,
    isGetting: state.isGetting,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getUsers }
)(UserList);
