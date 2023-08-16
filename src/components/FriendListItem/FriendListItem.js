export const FriendListItem = ({ friend: { avatar, name, isOnline,id } }) => {
  return (
      <li class="item" >
  <span class="status">{isOnline}</span>
  <img class="avatar" src={avatar} alt="name avatar" width="48" />
  <p class="name">{name}</p>
</li>
  );
};

