
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { List } from './FriendList.styled.js';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(item => (
       
          <FriendListItem key={item.id} friend={item} />
        
      ))}
    </List>
  );
};


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};