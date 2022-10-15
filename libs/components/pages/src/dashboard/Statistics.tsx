import { UCard, COLOR } from '@beginalive/components/ui';
import styled from '@emotion/styled';


export const Statistics = () => {
  return (
    <>
      <CardUI bordered={false}>
        <>21321</>
      </CardUI>
    </>
  )
}

const CardUI = styled(UCard)({
  boxShadow: `${COLOR.sdc} 5px 12px 12px`,
  background: `linear-gradient(120deg, ${COLOR.bbc} 0%, ${COLOR.fbc} 100%)`,
})
