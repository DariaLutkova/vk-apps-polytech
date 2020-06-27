import React from 'react';
import { ModalRoot, ModalPage, ModalPageHeader, Group, RichCell, Header, HorizontalScroll, Avatar } from '@vkontakte/vkui';
import Icon36Done from '@vkontakte/icons/dist/36/done';
import { faculties } from './facultyInfo.js';

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
              <HorizontalScroll>
                <div className={styles.infoBlockWrapper}>
                  {
                    fac.info.map(inf =>
                      <div className={styles.infoBlock} key={inf.title}>
                        <div className={styles.bigNumber}>{inf.number}</div>
                        <div>{inf.title}</div>
                      </div>
                    )
                  }
                </div>
              </HorizontalScroll>
            </Group>
          </ModalPage>
        ))
      }
    </ModalRoot>
    );
};

export default FITModal;