import React from 'react'
import ReposTable from '../components/tables/ReposTable'
import { SortArrayButtonGroup } from '../components/SortArrayButtonGroup'

export const ReposPage = () => {
  return (
    <React.Fragment>
      <SortArrayButtonGroup />
      <ReposTable />
    </React.Fragment>
  )
}
