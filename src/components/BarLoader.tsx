import type { FunctionComponent, ReactNode, ElementType, HTMLAttributes } from 'react';
import styles from './BarLoader.module.css';

interface Props extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  As?: ElementType;
}

const BarLoader: FunctionComponent<Props> = ({ children, As = 'div', ...props }: Props) => (
  <As className={styles.loader} {...props}>{children}</As>
);

export default BarLoader;
