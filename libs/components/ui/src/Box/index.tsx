/*
 * @Date: 2022-10-15 21:44:24
 * @LastEditTime: 2022-10-15 22:00:51
 */
import { FC, PropsWithChildren } from 'react';
import { Card } from 'antd';
import type { CardInterface, CardProps } from 'antd/lib/card';

export const UCard: FC<PropsWithChildren<CardProps>> = (props) => {
  const { children, ...other } = props;

  return (
    <Card {...other}>
      {children}
    </Card>
  )
}
