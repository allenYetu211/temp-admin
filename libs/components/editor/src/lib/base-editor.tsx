/*
 * @Date: 2022-09-20 16:46:44
 * @LastEditTime: 2022-09-21 00:33:04
 */
import { useRef, useState, useCallback, PropsWithChildren } from 'react';
import { createEditor, Descendant, Element as SlateElement } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

import { EditorTooBar } from './editor-toolbar';
import { styled } from '@beginalive/components/ui';

import { Leaf } from './base-leaf';
import { Element } from './base-element';

export function BaseEditor() {
  const [editor] = useState(() => withReact(createEditor()));

  const renderElement = useCallback((props: any) => <Element {...props} />, []);
  const renderLeaf = useCallback((props: any) => <Leaf {...props} />, []);

  const initialValue = useRef([
    {
      type: 'paragraph',
      children: [{ text: '' }],
    },
  ]);

  const onChange = (newValue: Descendant[]) => {
    console.log('newValue', newValue);
  };

  return (
    <Slate editor={editor} value={initialValue.current} onChange={onChange}>
      <EditorTooBar />
      <EditorContainerUI>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Enter some rich text…"
          spellCheck
          autoFocus
        />
      </EditorContainerUI>
    </Slate>
  );
}

const EditorContainerUI = styled('div')({
  padding: '10px',
});
