/*
 * @Date: 2022-09-20 22:26:51
 * @LastEditTime: 2022-09-21 00:37:06
 */
import type { PropsWithChildren, FC } from 'react';
import { styled } from '@beginalive/components/ui';
import { IconButton } from '@beginalive/components/ui';
// import { HdrStrongIcon } from '@mui/icons-material';
import HdrStrongIcon from '@mui/icons-material/HdrStrong';

import { useSlate } from 'slate-react';

import { Editor } from 'slate';

export function EditorTooBar() {
  return (
    <ToolBarUI>
      <MarkButton format="bold">变宽</MarkButton>
    </ToolBarUI>
  );
}

const isMarkActive = (editor: Editor, format: string) => {
  const marks = Editor.marks(editor);
  // @ts-ignore
  return marks ? marks[format] === true : false;
};

const toggleMark = (editor: Editor, format: string) => {
  const isActive = isMarkActive(editor, format);

  console.log('isActive', isActive);
  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const MarkButton: FC<PropsWithChildren<{ format: string }>> = (props) => {
  const { format, children } = props;
  const editor: Editor = useSlate();
  return (
    <IconButton
      size="large"
      onClick={(event: any) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      {children}
    </IconButton>
  );
};

const ToolBarUI = styled('div')({
  borderBottom: '3px solid #000',
  height: '45px',
  padding: '0 5px',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  '& > button': {
    padding: '3px',
    margin: '0 5px',
    '&: hover': {
      cursor: 'pointer',
    },
  },
});
