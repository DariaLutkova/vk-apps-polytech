import React from 'react';
import { ModalRoot, ModalPage, ModalPageHeader, Group, RichCell, Header, Avatar, Gallery } from '@vkontakte/vkui';
import Icon36Done from '@vkontakte/icons/dist/36/done';
import { faculties } from './facultyInfo.js';
import cn from 'classnames';

import styles from './styles.module.css';

const FITModal = ({ activeModal, onClose }) => {
  return (
    <ModalRoot activeModal={activeModal} onClose={onClose}>
      {
        faculties.map(fac => (
          <ModalPage id={fac.id} key={fac.id} onClose={onClose} header={<ModalPageHeader>{fac.title}</ModalPageHeader>}>
            <Group header={<Header mode="secondary">Вы научитесь</Header>}>
              {
                fac.learn.map(skill =>
                  <RichCell
                    key={skill}
                    disabled
                    multiline
                    before={<Icon36Done style={{ marginRight: '10px' }} />}
                    text={skill}
                  />
                  )
              }
            </Group>
            <Group header={<Header mode="secondary">Для кого</Header>}>
              {
                fac.who.map(person =>
                  <RichCell
                    key={person.text}
                    disabled
                    multiline
                    before={<Avatar size={36} mode="app" style={{ backgroundColor: 'transparent', borderColor: 'transparent' }} src={require(`../img/info/${person.img}.svg`)} />}
                    text={person.text}
                  />
                )
              }
            </Group>
            <Group style={{ paddingBottom: 8 }} header={<Header mode="secondary">Основные сведения</Header>}>
              <Gallery
                slideWidth="90%"
                style={{ height: 150 }}
                bullets="dark"
                align="center"
              >
                {
                  Object.keys(fac.info).map(inf =>
                    <div className={cn(styles.infoBlock, styles[inf])} key={fac.info[inf].title}>
                      <div className={styles.bigNumber}>{fac.info[inf].number}</div>
                      <div>{fac.info[inf].title}</div>
                    </div>
                  )
                }
              </Gallery>
            </Group>
          </ModalPage>
        ))
      }
    </ModalRoot>
    );
};

export default FITModal;