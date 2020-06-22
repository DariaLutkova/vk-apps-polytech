import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, Group, CardGrid, Card, Header, Cell, Link} from '@vkontakte/vkui';

const FITHome = ({id, }) => {
  return (
      <Panel id={id}>
        <PanelHeader>Московский Политех - Факультет информационных технологий</PanelHeader>
        <Group separator="hide">
          <CardGrid>
            <Card size="l"  mode="outline">
            <Group style={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'flex-start', justifyContent: 'space-around' }} header={<Header mode="secondary">День открытых дверей в Московском Политехе</Header>}>
              <Header style={{ alignSelf: 'flex-end' }}>20 июня</Header>
              <Cell>Приёмная комиссия: priem@mospolytech.ru </Cell>
              <Link href="https://old.mospolytech.ru/index.php?id=2406" target="_blank">Зарегистироваться</Link>
            </Group>
            </Card>
            <Card size="m">
              <div style={{ height: 96 }} />
            </Card>
            <Card size="m">
              <div style={{ height: 96 }} />
            </Card>
            <Card size="s">
              <div style={{ height: 96 }} />
            </Card>
            <Card size="s">
              <div style={{ height: 96 }} />
            </Card>
            <Card size="s">
              <div style={{ height: 96 }} />
            </Card>
            <Card size="l">
              <div style={{ height: 96 }} />
            </Card>
          </CardGrid>
        </Group>
      </Panel>
    )
}

export default FITHome;