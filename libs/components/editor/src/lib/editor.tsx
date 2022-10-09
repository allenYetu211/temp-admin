/*
 * @Date: 2022-09-20 16:08:14
 * @LastEditTime: 2022-10-10 00:18:47
 */
/* eslint-disable-next-line */

// import { styled } from '@beginalive/components/ui';

import { BaseEditor } from './base-editor';
export interface Editor {}


export function Editor(props: Editor) {
  return (
      <BaseEditor />
    // <EditorUI>
    //   <BaseEditor />
    // </EditorUI>
  );
}

// const EditorUI = styled('div')({
//   border: '3px solid #000',
//   borderRadius: '5px',
// });

export default Editor;
