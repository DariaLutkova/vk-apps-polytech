import React from 'react';
import { Panel, PanelHeader, Avatar, Group, Header, SimpleCell } from '@vkontakte/vkui';
import { faculties } from "./faculties";

export default function FITDiscover ({ onModalOpen }) {
  return (
    <Panel id="discover">
      <PanelHeader>Направления учебы</PanelHeader>
      <Group
        header={<Header mode="secondary">Бакалавриат</Header>}
      >
        {
          faculties.map(fac =>
            <SimpleCell onClick={() => onModalOpen(fac.img)} key={fac.img} before={ <Avatar mode="app" size={48} src={require(`../img/faculties/${fac.img}.svg`)} />}>
            {fac.title}
            </SimpleCell>
          )
        }
      </Group>
    </Panel>
  )
}