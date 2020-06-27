import React, {useEffect, useState} from 'react';
import {Tabs, TabsItem, HorizontalScroll, Panel, PanelHeader, Gallery, Card} from '@vkontakte/vkui';
import Record from "../components/Record";
import "../styles/Schedule.css";

const weekDays = ['Понедельник', 'Вторник', 'Среда', 'Чертверг', 'Пятница', 'Суббота'];

const Schedule = ({ schedule, getSchedule }) => {
    useEffect(() => {
        if(!schedule) getSchedule();
    }, []);

    const [weekDay, setWeekDay] = useState(new Date().getDay() - 1);
    const currentRecord = schedule ? schedule[weekDay] : null;

    return (
        <Panel id="schedule">
            <PanelHeader>Расписание</PanelHeader>
            <Tabs>
              <HorizontalScroll>
                {weekDays.map((day, id)=><TabsItem key={day} onClick={ () => setWeekDay(id)} selected={id===weekDay}>{day}</TabsItem>)}
              </HorizontalScroll>
            </Tabs>
            <div className="recordWrapper">
              {currentRecord && <Record recordObj={currentRecord[1]}/>}
            </div>
        </Panel>
    );
};

export default Schedule;