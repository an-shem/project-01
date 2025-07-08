import type { FC } from 'react';
import styles from './ProfileCard.module.css';

interface ProfileCardProps {
  avatar: string;
  name: string;
  description: string;
}

const ProfileCard: FC<ProfileCardProps> = ({ avatar, name, description }) => {
  return (
    <div className={styles.profileCard}>
      <img src={avatar} alt="User avatar" />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ProfileCard;
