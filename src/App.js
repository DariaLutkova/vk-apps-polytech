import React from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, Epic, Tabbar, TabbarItem, Panel, PanelHeader } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28BrainOutline from '@vkontakte/icons/dist/28/brain_outline';
import Icon28PlaceOutline from '@vkontakte/icons/dist/28/place_outline';
import Icon28PinOutline from '@vkontakte/icons/dist/28/pin_outline';

import Home from './panels/FITHome/';

class App extends React.Component {
  // const [activePanel, setActivePanel] = useState('home');
  // const [fetchedUser, setUser] = useState(null);
  // const [activeModal, setActiveModal] = useState(null);

  state = {
  	activePanel: 'feed',
  	activeTab: 'feed'
  }

  onStoryChange = (e) => {
  	this.setState({
  		activeTab:  e.currentTarget.dataset.story,
  	})
  }

  /*useEffect(() => {
    bridge.subscribe(({ detail: { type, data }}) => {
      if (type === 'VKWebAppUpdateConfig') {
        const schemeAttribute = document.createAttribute('scheme');
        schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });*/
    /*async function fetchData() {
      const user = await bridge.send('VKWebAppGetUserInfo');
      setUser(user);
      setPopout(null);
    }
    fetchData();*/
    // setActiveModal('faq');
  // }, []);

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
          <Panel id="feed">
            <PanelHeader>Новости</PanelHeader>
          </Panel>
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
