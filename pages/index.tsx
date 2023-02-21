import Button from '@/components/Button/Button';
import Htag from '@/components/Htag/Htag';
import P from '@/components/P/P';
import Rating from '@/components/Rating/Rating';
import Tag from '@/components/Tag/Tag';
import { withLayout } from '@/layout/Layout';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import axios from 'axios';
import { MenuItem } from '@/interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
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
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    {
      firstCategory,
    }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
