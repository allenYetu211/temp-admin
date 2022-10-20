/*
 * @Date: 2022-10-15 19:52:59
 * @LastEditTime: 2022-10-20 23:42:29
 */
import { FC, PropsWithChildren } from "react"
import styled from '@emotion/styled';
import { UMenu, COLOR, UAvatar } from '@beginalive/components/ui'
import type { UMenuProps } from '@beginalive/components/ui'
import { DashboardOutlined, TagOutlined, FileTextOutlined } from '@ant-design/icons'
import { useRouter } from '@beginalive/tools'
import { MenuItem } from '../enum'



const items: UMenuProps['items'] = [
  { label: MenuItem['Dashboard'], key: 'Dashboard', icon: <DashboardOutlined /> },
  { label: MenuItem['Tags'], key: 'Tags', icon: <TagOutlined /> },
  {
    label: MenuItem['Article'], key: 'Article', icon: <FileTextOutlined />, children: [
      { label: MenuItem['ArticleList'], key: 'ArticleList' },
      { label: MenuItem['ArticleWrite'], key: 'ArticleWrite' }
    ]
  },
];

interface BeginSliderCompProps {
  picture?: string,
  nickName: string
}

export const BeginSliderComp: FC<PropsWithChildren<BeginSliderCompProps>> = (props) => {

  const { navigate } = useRouter()
  const { picture, nickName } = props;

  const onClick: UMenuProps['onClick'] = e => {
    navigate(`/${e.key}`)
  };

  return (
    <>
      <SliderContainer>

        <AuthorContainer>
          <UAvatar src={picture}> U </UAvatar>
          <AuthorNickName>{nickName}</AuthorNickName>
        </AuthorContainer>


        <UMenu
          onClick={onClick}
          style={{ width: '100%' }}
          defaultSelectedKeys={['dashboard']}
          defaultOpenKeys={['dashboard']}
          mode="inline"
          items={items}
        />
      </SliderContainer>
    </>
  )
}


const AuthorContainer = styled('div')({
  marginBottom: '15px',
  borderRadius: '10px',
  padding: '15px',
  backgroundColor: `${COLOR.cbc}`,
  display: 'flex',
  alignItems: 'center',
  border: `1px solid ${COLOR.mc}`

})

const AuthorNickName = styled('span')({
  marginLeft: '20px'
})

const SliderContainer = styled('div')({
  width: '100%',
  padding: '25px 15px',
  '.ant-menu': {
    backgroundColor: 'transparent'
  },
  '.ant-menu-inline': {
    borderRight: 'none'
  },
  '.ant-menu-inline .ant-menu-item::after': {
    borderRight: '6px solid #58A76D',
    borderRadius: 5
  },
  '.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected': {
    borderTopLeftRadius: '15px',
    borderBottomLeftRadius: '15px'
  }
})
