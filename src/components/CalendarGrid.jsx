import { AnimatePresence, motion } from 'framer-motion'
import { BookOpen, ChevronLeft, ChevronRight, Clock } from 'lucide-react'
import { DAY_NAMES, MONTH_NAMES } from '../data/content'
import {
  dateKey,
  getCalendarDays,
  getInitialCalendarDate,
  getThursdayLabel,
  isSemesterStudyRange,
} from '../utils/date'

export default function CalendarGrid({ monthDate, setMonthDate }) {
  const todayKey = dateKey(new Date())
  const days = getCalendarDays(monthDate)

  const moveMonth = (amount) => {
    setMonthDate((current) => new Date(current.getFullYear(), current.getMonth() + amount, 1))
  }

  return (
    <div className="calendarShell premiumCalendar">
      <div className="calendarHeader">
        <div className="calendarTitleBlock">
          <div className="smallLabel">2026-2027 Academic Year</div>
          <h2>{MONTH_NAMES[monthDate.getMonth()]} {monthDate.getFullYear()}</h2>
          <div className="calendarLegend">
            <span><i className="legendStudy" /> Bible Study Thursdays</span>
            <span><i className="legendToday" /> Today</span>
          </div>
        </div>
        <div className="calendarControls">
          <button type="button" onClick={() => moveMonth(-1)} aria-label="Previous month">
            <ChevronLeft size={18} />
          </button>
          <button type="button" onClick={() => setMonthDate(getInitialCalendarDate())}>Today</button>
          <button type="button" onClick={() => moveMonth(1)} aria-label="Next month">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="calendarCanvas">
        <div className="dayLabels">
          {DAY_NAMES.map((day) => <div key={day}>{day}</div>)}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            className="calendarGrid"
            key={`${monthDate.getFullYear()}-${monthDate.getMonth()}`}
            initial={{ opacity: 0, y: 14, scale: 0.992 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.992 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {days.map((day) => {
              const inMonth = day.getMonth() === monthDate.getMonth()
              const isToday = dateKey(day) === todayKey
              const isThursday = day.getDay() === 4
              const isStudyDay = isThursday && isSemesterStudyRange(day)
              return (
                <div
                  key={dateKey(day)}
                  className={`calendarDay ${inMonth ? '' : 'mutedDay'} ${isToday ? 'todayDay' : ''} ${isStudyDay ? 'studyDay' : ''}`}
                >
                  <div className="calendarDayTop">
                    <div className="dayNumber">{day.getDate()}</div>
                    {isStudyDay ? <BookOpen size={14} /> : null}
                  </div>
                  {isStudyDay ? (
                    <div className="eventPill">
                      <span>
                        <BookOpen size={12} />
                        {getThursdayLabel(day)}
                      </span>
                      <small><Clock size={11} /> Location TBD - Time TBD</small>
                    </div>
                  ) : (
                    <div className="emptyDayLine" />
                  )}
                </div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
