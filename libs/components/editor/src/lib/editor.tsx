/*
 * @Date: 2022-09-20 16:08:14
 * @LastEditTime: 2022-09-20 22:51:00
 */
/* eslint-disable-next-line */

import { styled } from '@beginalive/components/ui';
import { BaseEditor } from './base-editor';

export interface Editor {}

export function Editor(props: Editor) {
  return (
    <EditorUI>
      <BaseEditor />
    </EditorUI>
  );
}

const EditorUI = styled('div')({
  border: '3px solid #000',
  borderRadius: '5px',
});

export default Editor;
