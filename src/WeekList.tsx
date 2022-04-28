const WeekList = () => {
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return (<div>
        {daysOfWeek.map(day => <div key={day}>{day}</div>)}
    </div>);
};

export default WeekList;
