import React from 'react';
import { Panel, PanelHeader, Group, Header, CellButton, SimpleCell, Link } from '@vkontakte/vkui';
import Icon28PlaceOutline from '@vkontakte/icons/dist/28/place_outline';
import Icon28PhoneOutline from '@vkontakte/icons/dist/28/phone_outline';
import Icon28MailOutline from '@vkontakte/icons/dist/28/mail_outline';

export default class FITAbout extends React.Component {
  state = {
    banners: []
  };

  render() {

    return (
      <Panel id="about">
        <PanelHeader>Информация</PanelHeader>
        <Group
        header={<Header mode="secondary">Ссылки</Header>}
          >
          <CellButton href="https://fit.mospolytech.ru/">Сайт факультета</CellButton>
          <CellButton href="https://vk.com/fitmospolytech.team">ФИТ Московский Политех в ВК</CellButton>
        </Group>

        <Group
          header={<Header mode="secondary">Контакты</Header>}
        >
          <Link href="https://goo.gl/maps/j6qcy5aUExQ737Dr5">
            <SimpleCell before={<Icon28PlaceOutline />}>107023, г. Москва, ул. Б. Семёновская, 38</SimpleCell>
          </Link>
          <Link href='tel:84952230523'>
            <SimpleCell before={<Icon28PhoneOutline />}>+7 495 223-05-23, доб. 1709</SimpleCell>
          </Link>
          <Link href='mailto:fit@mospolytech.ru'>
            <SimpleCell before={<Icon28MailOutline />}>fit@mospolytech.ru</SimpleCell>
          </Link>
        </Group>
      </Panel>
    )
  }
}