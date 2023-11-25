import React from 'react'
import ReposTable from '../components/tables/ReposTable'
import { SortArrayButtonGroup } from '../components/SortArrButtonGroup'

export const ReposPage = () => {
  return (
    <React.Fragment>
      <SortArrayButtonGroup />
      <ReposTable />
    </React.Fragment>
  )
}
