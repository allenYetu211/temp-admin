import type { FC, PropsWithChildren, CSSProperties } from 'react';

import type { RenderElementProps } from 'slate-react';
// import type { Element } from 'slate'

type ElementProps = RenderElementProps & {
  element: {
    type:
      | 'block-quote'
      | 'bulleted-list'
      | 'heading-one'
      | 'heading-two'
      | 'list-item'
      | 'numbered-list';
    align: CSSProperties | any;
  };
};

export const Element: FC<PropsWithChildren<ElementProps>> = ({
  attributes,
  children,
  element,
}) => {
  const style = { textAlign: element.align };
  switch (element.type) {
    case 'block-quote':
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      );
    case 'bulleted-list':
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      );
    case 'heading-one':
      return (
        <h1 style={style} {...attributes}>
          {children}
        </h1>
      );
    case 'heading-two':
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      );
    case 'list-item':
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      );
    case 'numbered-list':
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      );
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      );
  }
};
