import React, { useState } from 'react';
import {
  Card,
  Image,
  Label,
  Icon,
  Modal,
  Header,
  Button,
  Form,
  Input,
  TextArea
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteUser, updateUser } from '../actions';

const UserCard = ({ user, deleteUser, updateUser }) => {
  const [updatedUser, setUpdatedUser] = useState(user);
  const [isEditing, setIsEditing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const deleteHandler = event => {
    event.preventDefault();
    deleteUser(user.id);
  };

  const handleChange = event => {
    setUpdatedUser({
      ...updatedUser,
      [event.target.name]: event.target.value
    });
  };

  const toggleIsEditing = event => {
    event.preventDefault();
    setIsEditing(!isEditing);
  };

  const handleSubmit = event => {
    event.preventDefault();
    updateUser(user.id, updatedUser);
    setIsEditing(false);
  };

  return (
    <>
      <Card raised>
        {isOpen ? (
          <Modal open={isOpen} size='small'>
            <Header icon='delete' content='Delete User' />
            <Modal.Content>
              <p>{`Do you want to delete the user ${user.name}?`}</p>
            </Modal.Content>
            <Modal.Actions>
              <Button
                id='no'
                color='red'
                onClick={() => setIsOpen(false)}
                inverted>
                <Icon name='delete' />
                No
              </Button>
              <Button id='yes' color='green' onClick={deleteHandler} inverted>
                <Icon name='checkmark' />
                Yes
              </Button>
            </Modal.Actions>
          </Modal>
        ) : null}
        <Label corner='right' color='red' onClick={() => setIsOpen(true)}>
          <Icon name='delete' />
        </Label>
        <Image
          src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
          wrapped
          ui={false}
        />
        {!isEditing ? (
          <Card.Content>
            <Label as='a' color='yellow' ribbon onClick={toggleIsEditing}>
              Edit&nbsp;&nbsp;&nbsp;&nbsp;
              <Icon name='edit' />
            </Label>
            <span>
              <Card.Header>{`${user.name}`}</Card.Header>
            </span>
            <hr />
            <Card.Description>{`${user.bio}`}</Card.Description>
          </Card.Content>
        ) : (
          <Card.Content>
            <Label as='a' color='red' ribbon onClick={toggleIsEditing}>
              Cancel&nbsp;&nbsp;&nbsp;&nbsp;
              <Icon name='cancel' />
            </Label>
            <span>
              <Form onSubmit={handleSubmit}>
                <Form.Field>
                  <label>User Name</label>
                  <Input
                    type='text'
                    name='name'
                    value={updatedUser.name}
                    onChange={handleChange}
                    placeholder='User Name'
                  />
                </Form.Field>
                <Form.Field>
                  <label>User Bio</label>
                  <TextArea
                    type='text'
                    name='bio'
                    value={updatedUser.bio}
                    onChange={handleChange}
                    placeholder='User Bio'
                  />
                </Form.Field>
                <Modal.Actions>
                  <Button positive>
                    <Icon name='check' />
                    Update User
                  </Button>
                </Modal.Actions>
              </Form>
            </span>
          </Card.Content>
        )}
      </Card>
    </>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users,
    isDeleting: state.isDeleting,
    isUpdating: state.isUpdating,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { deleteUser, updateUser }
)(UserCard);
