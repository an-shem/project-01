import { memo, useEffect } from 'react';

interface Props {
  toy: { title: string };
  paint: () => void;
}

export default memo(function AptonKid(props: Props) {
  const { paint } = props;
  useEffect(() => {
    paint();
  }, []);

  return <div className="bg-blue-400 border m-4 h-6">AptonKid Toy{props.toy.title}</div>;
});
