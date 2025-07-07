interface Props {
  url: string;
  alt?: string;
}

export default function Card(props: Props) {
  const { url, alt } = props;
  return (
    <div>
      <img src={url} alt={alt} style={{ width: '300px', marginTop: '40px' }} />
    </div>
  );
}
