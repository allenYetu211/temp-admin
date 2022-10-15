import { FC, PropsWithChildren } from "react"
import styled from '@emotion/styled';

export const BeginSliderComp: FC<PropsWithChildren> = (props) => {
  const { children } = props
  return (
    <>
      <SliderContainer>
        {children}
      </SliderContainer>
    </>
  )
}

const SliderContainer = styled.div`
  width: 220px;
  padding: 15px 10px;
`;
