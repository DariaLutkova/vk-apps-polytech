import React from 'react';
import { Panel, PanelHeader, Avatar, Group, Header, SimpleCell } from '@vkontakte/vkui';
import { bachelor, master, speciality } from "./faculties";

export default function FITDiscover ({ onModalOpen }) {
  return (
    <Panel id="discover">
      <PanelHeader>Направления учебы</PanelHeader>
      <Group
        header={<Header mode="secondary">Бакалавриат</Header>}
      >
        {
          bachelor.map(bach =>
            <SimpleCell onClick={() => onModalOpen(bach.img)} key={bach.img} before={ <Avatar mode="app" size={48} src={require(`../img/faculties/${bach.img}.svg`)} />}>
            {bach.title}
            </SimpleCell>
          )
        }
      </Group>
      <Group
        header={<Header mode="secondary">Магистратура</Header>}
      >
        {
          master.map(mas =>
            <SimpleCell onClick={() => onModalOpen(mas.img)} key={mas.img} before={ <Avatar mode="app" size={48} src={require(`../img/faculties/${mas.img}.svg`)} />}>
            {mas.title}
            </SimpleCell>
          )
        }
      </Group>
      <Group
        header={<Header mode="secondary">Специалитет</Header>}
      >
        {
          speciality.map(specialist =>
            <SimpleCell onClick={() => onModalOpen(specialist.img)} key={specialist.img} before={ <Avatar mode="app" size={48} src={require(`../img/faculties/${specialist.img}.svg`)} />}>
              {specialist.title}
            </SimpleCell>
          )
        }
      </Group>
    </Panel>
  )
}