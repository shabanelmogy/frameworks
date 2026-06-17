import React from 'react';
import './UserCard.css';

interface UserCardProps {
  name: string;
  role: string;
  initials?: string;
  onMessageUser: (name: string) => void;
}

export const UserCard: React.FC<UserCardProps> = ({
  name,
  role,
  initials = 'U',
  onMessageUser
}) => {
  return (
    <div className="user-card">
      <div className="avatar">{initials}</div>
      <div className="info">
        <h4>{name}</h4>
        <p>{role}</p>
      </div>
      <button className="btn-sm" onClick={() => onMessageUser(name)}>Message</button>
    </div>
  );
};
export default UserCard;
