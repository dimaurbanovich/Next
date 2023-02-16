import Button from '@/components/Button/Button';
import Htag from '@/components/Htag/Htag';
import P from '@/components/P/P';
import Rating from '@/components/Rating/Rating';
import Tag from '@/components/Tag/Tag';
import { useState } from 'react';

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <div>
      <Htag tag="h1">Привет</Htag>
      <Button appearance="primary" arrow="right">
        Привет
      </Button>
      <Button appearance="ghost" arrow="down">
        ghost
      </Button>
      <P size="lg">Большой</P>
      <P>Средний</P>
      <P size="sm">Маленький</P>
      <Tag color="green" size="sm">
        Маленький
      </Tag>
      <Tag color="gray" href="www.google.com" size="md">
        Link
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </div>
  );
}
