
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(item => (
       
          <FriendListItem key={item.id} friend={item} />
        
      ))}
    </ul>
  );
};