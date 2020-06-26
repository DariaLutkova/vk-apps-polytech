import React from 'react';
import { Panel, PanelHeader } from '@vkontakte/vkui';

const Schedule = () => {
    fetch('https://onepix.dev/recoby?referer=https://rasp.dmami.ru&url=https://rasp.dmami.ru/site/group?group=181-321&session=0', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    return (
        <Panel id="feed">
            <PanelHeader>Расписание</PanelHeader>
            <div>Ha</div>
        </Panel>
    );
};

export default Schedule;