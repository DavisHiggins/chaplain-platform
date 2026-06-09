import {
  SCRIPTURE_PLAN,
  SEMESTER_END_YEAR,
  SEMESTER_START_YEAR,
} from '../data/content'

export function dateKey(date) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function parseLocalDate(value) {
  const [y, m, d] = value.split('-').map(Number)
  return new Date(y, m - 1, d)
}

export function formatDate(value) {
  return parseLocalDate(value).toLocaleDateString(undefined, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function getThursdayLabel(date) {
  const matchingPlan = SCRIPTURE_PLAN.find((item) => item.date === dateKey(date))
  if (matchingPlan) {
    return `Bible Study - ${matchingPlan.passage}`
  }
  return 'Bible Study'
}

export function getUpcomingStudy(today = new Date()) {
  const current = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  const cutoff = new Date(current)

  // Switch to the next scheduled passage every Friday at 12:00 AM.
  const active = SCRIPTURE_PLAN.find((item) => parseLocalDate(item.date) >= cutoff)
  return active || SCRIPTURE_PLAN[SCRIPTURE_PLAN.length - 1]
}

export function classifyStudy(item, currentStudy) {
  const itemDate = parseLocalDate(item.date)
  const currentDate = parseLocalDate(currentStudy.date)
  if (item.date === currentStudy.date) return 'Present'
  if (itemDate < currentDate) return 'Past'
  return 'Future'
}

export function getInitialCalendarDate() {
  const today = new Date()
  if (today.getFullYear() < SEMESTER_START_YEAR || today.getFullYear() > SEMESTER_END_YEAR) {
    return new Date(2026, 7, 1)
  }
  return new Date(today.getFullYear(), today.getMonth(), 1)
}

export function getCalendarDays(monthDate) {
  const year = monthDate.getFullYear()
  const month = monthDate.getMonth()
  const first = new Date(year, month, 1)
  const start = new Date(first)
  start.setDate(first.getDate() - first.getDay())

  return Array.from({ length: 42 }, (_, index) => {
    const day = new Date(start)
    day.setDate(start.getDate() + index)
    return day
  })
}

export function isSemesterStudyRange(date) {
  return date >= new Date(2026, 7, 1) && date <= new Date(2027, 4, 31)
}
