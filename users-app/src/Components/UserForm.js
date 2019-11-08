import React, { useState } from 'react';
import { Form, Input, Button, Icon, TextArea } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addUser } from '../actions';

const UserForm = ({ addUser }) => {
  const [newUser, setNewUser] = useState({ name: '', bio: '' });

  const handleChange = event => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    addUser(newUser);
    setNewUser({
      name: '',
      bio: ''
    });
  };

  return (
    <div className='form-add'>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>User Name</label>
          <Input
            type='text'
            name='name'
            value={newUser.name}
            onChange={handleChange}
            placeholder='User Name'
          />
        </Form.Field>
        <Form.Field>
          <label>User Bio</label>
          <TextArea
            type='text'
            name='bio'
            value={newUser.bio}
            onChange={handleChange}
            placeholder='User Bio'
          />
        </Form.Field>
        <Button positive>
          <Icon name='plus' />
          Add User
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users,
    isPosting: state.isPosting,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { addUser }
)(UserForm);
