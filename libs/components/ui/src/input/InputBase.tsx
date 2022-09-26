/*
 * @Date: 2022-09-26 23:20:30
 * @LastEditTime: 2022-09-26 23:29:42
 */
import type {
  FC,
  PropsWithChildren,
  MouseEventHandler,
  CSSProperties,
} from 'react';
import { cx } from '../clsx';
import { styled } from '../styled';

interface InputProps {
  onClick?: MouseEventHandler;
  disabled?: boolean;
  style?: CSSProperties;
  className?: string;
  hoverColor?: string;
}




export const InputBase: FC<PropsWithChildren<InputProps>> = ({
  children,
  disabled,
  onClick,
  className,
  ...props
}) => {

  return (
    <Container
      {...props}
      className={cx(className)}
    >
      {children}
    </Container>
  )

}


const Container = styled('input')(() => {
  return {
    display: 'flex'
  }
})

