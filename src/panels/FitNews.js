import React from 'react';
import moment from 'moment';
import { Panel, PanelHeader, Group, Banner, Header, Avatar, Button, Link } from '@vkontakte/vkui';
// import axios from 'axios';
import {mock} from './mock.js';

export default class FitNews extends React.Component {
  state = {
    banners: []
  }
  async componentDidMount() {
    // const res = await axios.get('https://fit.mospolytech.ru/api/1.0/news/');
    // console.log(res);
    this.setState({
      banners: mock,
    })
  }

  render() {

    return (
      <Panel id="feed">
        <PanelHeader>Новости</PanelHeader>
        <Group
          header={<Header mode="secondary">Самое свежее от факультета информационных технологий!</Header>}
        >
        <Banner
          mode="image"
          header="Хакатон"
          subheader="Приглашаем к участию!"
          background={
            <div
              style={{
                backgroundColor: '#65c063',
                backgroundImage: 'url(https://sun1-90.userapi.com/Kdlb30B4agBUdxYasvTohGTBTiCmq1u23iIGCQ/3ilwpdcO7mY.jpg)',
                backgroundPosition: 'cover',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
              }}
            />
          }
          actions={<Button mode="overlay_primary">Подробнее</Button>}
        />
         <Banner
          before={<Avatar size={96} mode="image" src="https://sun1-16.userapi.com/4r3Kj2rCJ0TWdFV3_GdgFzjPqlVL7NEFlSXacg/F6H_sQDZkro.jpg" />}
          header="Онлайн стажировка "
          subheader="Внимание-внимание!"
          asideMode="expand"
          actions={<Button>Подробнее</Button>}
        />
        {
          this.state.banners.map(banner => (
            <Link  key={banner.id} href={`https://vk.com/moscowpolytech?w=wall${banner.owner_id}_${banner.vk_id}`}>
             <Banner
              before={banner.photos.length !== 0 && <Avatar size={96} style={{ objectFit: 'scale-down' }} mode="image" src={banner.photos[0].photo_604} />}
              header={banner.text.split('\n')[0]}
              subheader={moment(banner.date).format('LLL')}
              asideMode="expand"
            />
            </Link>
          ))
        }
      </Group>
      </Panel>
    )
  }
}