import React from 'react';
import { View, Epic, Tabbar, TabbarItem } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28BrainOutline from '@vkontakte/icons/dist/28/brain_outline';
import Icon28InfoOutline from '@vkontakte/icons/dist/28/info_outline';
import Icon28PinOutline from '@vkontakte/icons/dist/28/pin_outline';

import FITNews from './panels/FITNews';
import FITDiscover from "./panels/FITDiscover";
import FITModal from "./components/FITModal";
import Schedule from "./panels/Schedule";
import FITAbout from "./panels/FITAbout";
import {getCurrentWeek} from "./utils/schedule-utils";
import {getRequestUrl} from "./utils/request-utils";

class App extends React.Component {
  state = {
  	activePanel: 'feed',
  	activeTab: 'feed',
    activeModal: null,
    currentGroup: '181-321',
    schedule: null
  };

  getSchedule = async () => {
    const reqUrl = getRequestUrl({
      referer: 'https://rasp.dmami.ru',
      url: `https://rasp.dmami.ru/site/group?group=${this.state.currentGroup}&session=1`
    });

    const resp = await fetch(reqUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const json = await resp.json();

    this.setState({
      schedule: json.grid ? getCurrentWeek(json.grid) : null
    });
  };

  onStoryChange = (e) => {
  	this.setState({
  		activeTab:  e.currentTarget.dataset.story,
  	})
  };

  handleModalOpen = (type) => {
    this.setState({
      activeModal: type,
    })
  };

  render() {
  	  return (
    <Epic tabbar={
        <Tabbar>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeTab === 'discover'}
            data-story="discover"
            text="Направлен."
          ><Icon28BrainOutline /></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeTab === 'feed'}
            data-story="feed"
            text="Новости"
          ><Icon28NewsfeedOutline /></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeTab === 'schedule'}
            data-story="schedule"
            text="Расписание"
          ><Icon28PinOutline /></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeTab === 'about'}
            data-story="about"
            text="Информация"
          ><Icon28InfoOutline /></TabbarItem>
        </Tabbar>
      }>
        <View activePanel={this.state.activeTab} modal={<FITModal activeModal={this.state.activeModal} onClose={() => this.handleModalOpen(null)} />}>
          <FITNews id="feed" />
          <FITDiscover id="discover" onModalOpen={this.handleModalOpen} />
          <Schedule id="schedule" getSchedule={this.getSchedule} {...this.state}/>
          <FITAbout id="about"/>
        </View>
      </Epic>
  );
  }
}

export default App;
