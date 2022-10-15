import { Outlet } from "react-router-dom";
import styled from '@emotion/styled';
import { COLOR } from "@beginalive/components/ui";

export const BeginContainerComp = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  )
}

const Container = styled.div`
  border-radius: 50px;
  background-color: ${COLOR.cbc}

`;
