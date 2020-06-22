import React from 'react';
import PropTypes from 'prop-types';
import { ModalRoot, ModalCard } from '@vkontakte/vkui';
import Icon56FireOutline from '@vkontakte/icons/dist/56/fire_outline';

const FITModal = ({ text, isActive, onClose }) => {
  return (
    <ModalRoot activeModal={isActive}>
        <ModalCard 
        id="faq"
        onClose={onClose}
        icon={<Icon56FireOutline />}
        header="Добро пожаловать на ФИТ!"
        caption="Крутой IT-специалист или хочешь им стать? Хочешь прокачать свои soft и hard скиллы? Не можешь жить без проектов и грезешь о Кремниевой Доллине? Тогда давай знакомится!"
        actions={[{
          title: 'Узнать больше',
          mode: 'primary',
          action: () => onClose()
        }]}
        >
          </ModalCard>
      </ModalRoot>
    );
}

export default FITModal;