import type { FC, PropsWithChildren } from 'react';

import type { Text } from 'slate';
import type { RenderLeafProps } from 'slate-react';

type ExpandLeafType = Text & {
  bold?: boolean;
  code?: boolean;
  italic?: boolean;
  underline?: boolean;
};

type LeafProps = RenderLeafProps & {
  leaf: ExpandLeafType;
};

export const Leaf: FC<PropsWithChildren<LeafProps>> = ({
  attributes,
  children,
  leaf,
}) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};
