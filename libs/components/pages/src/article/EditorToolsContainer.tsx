/*
 * @Date: 2022-10-23 09:38:37
 * @LastEditTime: 2022-10-23 10:04:39
 */

import styled from '@emotion/styled';
import { COLOR } from '@beginalive/components/ui';
import { FullscreenOutlined, FullscreenExitOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import { useState, FC } from 'react';
import { toggleFullscreen } from '@beginalive/tools'

interface EditorToolsContainerProps {
  handleHiddenRenderContainer: (state: boolean) => void;
  fullTargetElement: React.RefObject<HTMLDivElement>
}

export const EditorToolsContainer: FC<EditorToolsContainerProps> = (props): JSX.Element => {
  const { handleHiddenRenderContainer, fullTargetElement } = props

  const handleFullElement = (state: boolean) => {
    toggleFullscreen(fullTargetElement.current, state)
  }

  return (
    <Container>
      <SwitchIconComp changeState={handleFullElement} DefaultIcon={<FullscreenOutlined />} ReplaceIcon={<FullscreenExitOutlined />} />
      <SwitchIconComp changeState={handleHiddenRenderContainer} DefaultIcon={<EyeInvisibleOutlined />} ReplaceIcon={<EyeOutlined />} />
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
