import React, { useEffect, useState } from 'react'
import {
  LoadingOutlined, ReloadOutlined, StarFilled, StopTwoTone,
} from '@ant-design/icons'
import { observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { func, shape } from 'prop-types'
import {
  Badge, Input, List, Space, Spin, Typography,
} from 'antd'

import { StationsModel } from '../../../models'

import { MainStyle, StationsListStyle, PageHeaderStyle } from './MainStyle'

const { Text, Title } = Typography

const Templates = () => {
  useEffect(() => {
    StationsModel.getStations()
  }, [])

  const [searchQuery, setSearchQuery] = useState('')

  const { stations } = StationsModel

  const reloadStations = () => { StationsModel.getStations() }

  const filteredStations = stations
    ?.filter(({ address, code }) => (address.includes(searchQuery) || code.toString().includes(searchQuery)))

  return (
    <MainStyle>
      <PageHeaderStyle>
        {/* <Space
          style={{ width: '100%', justifyContent: 'center' }}
        >
          <Title
            style={{ marginLeft: '-3px' }}
            code
            level={3}
            type="secondary"
          >
            AB Helper

          </Title>
          <Title level={2}>🚲</Title>
        </Space> */}
        <Input
          allowClear
          onChange={({ target }) => setSearchQuery(target.value)}
          value={searchQuery}
          size="large"
          placeholder="Поиск..."
          addonAfter={(
            <ReloadOutlined
              onClick={reloadStations}
              style={{ fontSize: '18px', marginTop: '5px' }}
            />
          )}
          defaultValue="mysite"
        />
      </PageHeaderStyle>
      <StationsListStyle>
        <Spin
          spinning={!stations}
          indicator={<LoadingOutlined style={{ margin: '150px 0px 0px -30px', fontSize: 60 }} spin />}
        >
          <List
            locale={{ emptyText: ' ' }}
            itemLayout="horizontal"
            dataSource={filteredStations}
            renderItem={({
              address, isInactive, availableBikes, freeSlots, code, isFavorite,
            }) => (
              <List.Item
                key={code}
                style={{ padding: '15px' }}
              >
                <Space>
                  <Badge
                    offset={[-13, 40]}
                    count={`/${availableBikes + freeSlots}`}
                    style={{
                      color: '#999',
                      backgroundColor: 'transparent',
                      boxShadow: 'none',
                    }}
                  >
                    <Title
                      style={{
                        color: !isInactive ? '#74b627' : '#ddd',
                        margin: '0 20px 5px 0',
                      }}
                    >
                      {availableBikes}
                    </Title>
                  </Badge>
                  <Space size={3} direction="vertical">
                    <Text type="secondary" style={{ fontSize: '16px' }}>
                      {address}
                      {isFavorite && (
                        <StarFilled style={{ color: '#f4df00', margin: '5px' }} />
                      )}
                      {isInactive && (
                        <StopTwoTone twoToneColor="red" style={{ margin: '5px' }} />
                      )}
                    </Text>
                    <Text type="secondary">
                      {code}
                    </Text>
                  </Space>
                </Space>
              </List.Item>
            )}
          />
        </Spin>
      </StationsListStyle>
    </MainStyle>

  )
}

Templates.propTypes = {
  history: shape({
    push: func.isRequired,
  }).isRequired,
}

export default withRouter(observer(Templates))
