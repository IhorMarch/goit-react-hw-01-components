
import PropTypes from 'prop-types';
import { Item,Status,Avatar,Name } from './FriendListItem.styled';



export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
      <Item>
  <Status status={isOnline}></Status>
  <Avatar src={avatar} alt="name avatar" width="48" />
  <Name>{name}</Name>
</Item>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};