/*
 * @Date: 2022-10-15 21:44:24
 * @LastEditTime: 2022-10-20 23:43:39
 */
import { FC, PropsWithChildren } from 'react';
import { Card } from 'antd';
import type { CardInterface, CardProps } from 'antd/lib/card';
import styled from '@emotion/styled';
import { COLOR } from '../color';

export const UCard: FC<PropsWithChildren<CardProps>> = (props) => {
  const { children, ...other } = props;

  return (
    <CardUI  bordered={false}  {...other}>
      {children}
    </CardUI>
  )
}


const CardUI = styled(Card)({
  boxShadow: `${COLOR.sdc} 5px 12px 12px`,
  background: `linear-gradient(120deg, ${COLOR.bbc} 0%, ${COLOR.fbc} 100%)`,
})
