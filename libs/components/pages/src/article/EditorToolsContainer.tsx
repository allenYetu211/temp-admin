/*
 * @Date: 2022-10-23 09:38:37
 * @LastEditTime: 2022-10-23 18:38:19
 */
import { cloneElement } from 'react';
import styled from '@emotion/styled';
import { COLOR } from '@beginalive/components/ui';
import { useState, FC } from 'react';
import { toggleFullscreen } from '@beginalive/tools'
import {
  FullscreenOutlined,
  FullscreenExitOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  FileImageOutlined
} from '@ant-design/icons'

import { createArticleImage, saveImages } from '@beginalive/tools'
// import { Modal } from 'antd'


interface EditorToolsContainerProps {
  handleHiddenRenderContainer: (state: boolean) => void;
  fullTargetElement: React.RefObject<HTMLDivElement>
  renderElement: React.RefObject<HTMLElement>
}

export const EditorToolsContainer: FC<EditorToolsContainerProps> = (props): JSX.Element => {
  const { handleHiddenRenderContainer, fullTargetElement, renderElement } = props

  const handleFullElement = (state: boolean) => {
    toggleFullscreen(fullTargetElement.current, state)
  }

  const handleCreateImagesSave = async () => {
    const { display } = getComputedStyle(renderElement.current!)
    if (display == 'none') {
      renderElement.current!.style.display = 'flex'
    }
    const ImagesCanvas = await createArticleImage(renderElement.current);
    saveImages(ImagesCanvas)
  }

  return (
    <Container>
      <SwitchIconComp changeState={handleFullElement} DefaultIcon={<FullscreenOutlined />} ReplaceIcon={<FullscreenExitOutlined />} />
      <SwitchIconComp changeState={handleHiddenRenderContainer} DefaultIcon={<EyeInvisibleOutlined />} ReplaceIcon={<EyeOutlined />} />

      <IconContainer onClick={handleCreateImagesSave}>
        <FileImageOutlined />
      </IconContainer>
    </Container>
  )
}


const SwitchIconComp = (props: { DefaultIcon: JSX.Element, ReplaceIcon: JSX.Element, changeState?: (state: boolean) => void; }) => {
  const { DefaultIcon, ReplaceIcon, changeState } = props;
  const [isDefaultIcon, setIsDefaultIcon] = useState<boolean>(true)

  const handleClick = () => {
    setIsDefaultIcon(!isDefaultIcon)
    changeState && changeState(!isDefaultIcon)
  }

  return (
    <IconContainer onClick={handleClick}>
      {isDefaultIcon ? DefaultIcon : ReplaceIcon}
    </IconContainer>
  )
}

const IconContainer = styled('div')({
  padding: '0px 10px',
  cursor: 'pointer'
})


const Container = styled('div')({
  padding: '5px 15px',
  height: '30px',
  borderBottom: `1px solid ${COLOR.border_co}`,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center'
})
