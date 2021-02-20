import React, { useEffect } from 'react'
// import {
//   Button, Modal, Input,
//   Dropdown, Menu, Space, Table, Tag, Typography, PageHeader, Tooltip,
// } from 'antd'
// import {
//   CopyOutlined, DownOutlined, EditOutlined, QuestionCircleFilled,
// } from '@ant-design/icons'
// import Column from 'antd/lib/table/Column'
import { observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { func, shape } from 'prop-types'

import { StationsModel } from '../../../models'

// const { Text, Link } = Typography
// const { Search } = Input

const Templates = () => {
  useEffect(() => {
    StationsModel.getStations()
  }, [])

  return (
    <>
      Test
    </>
  )
}

Templates.propTypes = {
  history: shape({
    push: func.isRequired,
  }).isRequired,
}

export default withRouter(observer(Templates))
