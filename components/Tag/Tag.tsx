import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

const Tag = ({
  size = 'sm',
  children,
  color = 'ghost',
  href,
  className,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.sm]: size == 'sm',
        [styles.md]: size == 'md',
        [styles.ghost]: color == 'ghost',
        [styles.red]: color == 'red',
        [styles.green]: color == 'green',
        [styles.gray]: color == 'gray',
        [styles.primary]: color == 'primary',
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>children</>}
    </div>
  );
};

export default Tag;
