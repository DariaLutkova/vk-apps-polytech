import React from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, Epic, Tabbar, TabbarItem, Panel, PanelHeader } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28BrainOutline from '@vkontakte/icons/dist/28/brain_outline';
import Icon28PlaceOutline from '@vkontakte/icons/dist/28/place_outline';
import Icon28PinOutline from '@vkontakte/icons/dist/28/pin_outline';

import FitNews from './panels/FitNews'

class App extends React.Component {
  state = {
  	activePanel: 'feed',
  	activeTab: 'feed'
  }

  onStoryChange = (e) => {
  	this.setState({
  		activeTab:  e.currentTarget.dataset.story,
  	})
  }

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
          <Panel id="schedule">
            <PanelHeader>Расписание</PanelHeader>
          </Panel>
        </View>
      </Epic>
  );
  }
}

export default App;
