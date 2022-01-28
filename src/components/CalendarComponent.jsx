import React from "react"

const Calendar = ({ className }) => (
  <iframe
    title="cal.com"
    className={className}
    src="https://app.cal.com/-mickey"
    frameBorder="0"
    allowFullScreen={false}
  />
)

export default Calendar
