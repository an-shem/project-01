interface Props {
  avatar: string;
  name: string;
  description: string;
}

export default function ProfileCard({ avatar, name, description }: Props) {
  return (
    <div className="profile-card" style={{ width: '300px', marginTop: '40px' }}>
      <img src={avatar} alt="User avatar" style={{ width: '100%' }} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}
