const StaffListItem = ({ staff }) => {
  return (
    <li>
        <div ClassName="staff">
            <p>
            Name : {staff.firstName}{staff.lastName}
            </p>
            <p>
            Title: {staff.title}
            </p>
            <p>
            Started: {staff.yearStarted}
            </p>
            </div>
    </li>
  )

  export default StaffListItem;