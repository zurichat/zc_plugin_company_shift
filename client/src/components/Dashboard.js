import React from 'react';
import { Inject , ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';



export function Dashboard ({

}) {

return (
    <>
    <ScheduleComponent>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda ]} />
    </ScheduleComponent>
    </>
)
}