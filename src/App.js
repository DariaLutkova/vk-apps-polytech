import React from 'react';
// import bridge from '@vkontakte/vk-bridge';
import { View, Epic, Tabbar, TabbarItem, Panel, PanelHeader } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28BrainOutline from '@vkontakte/icons/dist/28/brain_outline';
import Icon28PlaceOutline from '@vkontakte/icons/dist/28/place_outline';
import Icon28PinOutline from '@vkontakte/icons/dist/28/pin_outline';

import FitNews from './panels/FitNews'
import Schedule from "./panels/Schedule";
import {getCurrentWeek} from "./utils/schedule-utils";

class App extends React.Component {
  state = {
  	activePanel: 'feed',
  	activeTab: 'feed',
    currentGroup: '163-422',
    selectedDay: new Date().getDay() - 1,
    schedule: null
  };

  getSchedule = async () => {
    const resp = await fetch(`https://onepix.dev/recoby?referer=https://rasp.dmami.ru&url=https://rasp.dmami.ru/site/group?group=${this.state.currentGroup}&session=0`, {
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
            selected={this.state.activeTab === 'places'}
            data-story="places"
            text="Подать док."
          ><Icon28PlaceOutline /></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeTab === 'schedule'}
            data-story="schedule"
            text="Расписание"
          ><Icon28PinOutline /></TabbarItem>
        </Tabbar>
      }>
        <View activePanel={this.state.activeTab}>
          <FitNews id="feed" />
          <Panel id="discover">
            <PanelHeader>Направления учебы</PanelHeader>
          </Panel>
          <Panel id="places">
            <PanelHeader>Где подать документы</PanelHeader>
          </Panel>
          <Schedule id="schedule" getSchedule={this.getSchedule} {...this.state}/>
        </View>
      </Epic>
  );
  }
}

export default App;
