import { Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView } from '../views'
import { EmptyView } from '../views/EmptyView'

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid optio illum reiciendis laboriosam libero praesentium, obcaecati quas dignissimos quae placeat perspiciatis nisi nostrum repellat sit. Aperiam aspernatur facilis inventore sit.

      </Typography> */}
      {/* <EmptyView /> */}
      <NoteView />

    </JournalLayout>
  )
}
