import { useState } from 'react'
import CalendarGrid from '../components/CalendarGrid'
import PageShell from '../components/PageShell'
import SectionHeader from '../components/SectionHeader'
import { PAGE_COPY } from '../data/content'
import { getInitialCalendarDate } from '../utils/date'

export default function CalendarPage() {
  const [monthDate, setMonthDate] = useState(getInitialCalendarDate)

  return (
    <PageShell>
      <SectionHeader {...PAGE_COPY.calendar} />
      <CalendarGrid monthDate={monthDate} setMonthDate={setMonthDate} />
    </PageShell>
  )
}
