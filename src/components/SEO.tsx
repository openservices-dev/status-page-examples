import type { FunctionComponent, ReactNode } from 'react';

interface Props {
  title: string;
  description: string;
  children: ReactNode;
}

const SEO: FunctionComponent<Props> = (props) => (
  <>
    {
      props.title.length === 0 ? (
        <title>Status</title>
      ) : (
        <title>{ `${props.title} | Status`}</title>
      )
    }
    <meta name="description" content={props.description} />
    {props.children}
  </>
);

export default SEO;
