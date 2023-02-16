import { ReactNode, HTMLAttributes, DetailedHTMLProps } from 'react';

export interface PProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}
