/*
 * @Date: 2022-10-23 19:28:04
 * @LastEditTime: 2022-10-23 19:35:13
 */
import { FC } from 'react';
import { UButton } from '@beginalive/components/ui';

interface PublishOptionsCompProps {
  handleSubmit: () => void;
}
export const PublishOptionsComp: FC<PublishOptionsCompProps> = (props) => {
  const { handleSubmit } = props

  return (
    <>
      <UButton type='primary' onClick={handleSubmit}> 发布 </UButton>
    </>
  )
}
