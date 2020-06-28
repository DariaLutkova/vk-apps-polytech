import React from 'react';
import moment from 'moment';
import { Panel, PanelHeader, Group, Banner, Header, Avatar, Link, Spinner } from '@vkontakte/vkui';
import axios from 'axios';
import {getRequestUrl} from "../utils/request-utils";

export default class FITNews extends React.Component {
  state = {
    banners: []
  };

  async componentDidMount() {
    const reqUrl = getRequestUrl({
      referer: 'https://fit.mospolytech.ru/feed',
      url: 'https://fit.mospolytech.ru/api/1.0/news/'
    });

    const res = await axios.get(reqUrl);

    this.setState({
      banners: res.data,
    })
  }

  render() {

    return (
      <Panel id="feed">
        <PanelHeader>Новости</PanelHeader>
        <Group
          header={<Header mode="secondary">Самое свежее от флагмана проектной деятельности!</Header>}
        >
        {
          !this.state.banners.length &&
           <Spinner size="large" style={{ marginTop: 80 }} />
        }
        {
          this.state.banners.map(banner => (
            banner.text &&
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