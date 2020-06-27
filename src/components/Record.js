import React from 'react';
import {Card, Headline, Text} from "@vkontakte/vkui";
import "../styles/Record.css";
import FoodIcon from "../icons/FoodIcon";

const tagsClasses = (tag) => {
  let returnValue;
  switch (tag) {
    case 'Лекция':
      returnValue = 'lecture';
      break;
    case 'Практика':
      returnValue = 'practice';
      break;
    case 'Лаб. работа':
      returnValue = 'lab';
      break;
    case 'Зачет':
      returnValue = 'credit';
      break;
    case 'Экзамен':
      returnValue = 'exam';
      break;
    default:
      returnValue = '';
      break;
  }
  return returnValue;
};

const classTimings = ['9:00-10:30', '10:40-12:10', '12:20-13:50', '14:30-16:00', '16:10-17:40', '17:50-19:20', '19:30-21:00'];

const Record = ({recordObj}) => {
  const classesArr = Object.values(recordObj).map((lesson, id) => lesson.length > 0 ? [...lesson, id] : lesson).filter(lesson => lesson.length > 0);

  return (
        classesArr.map((lesson, id) => {
          const [lessonObj, timeId] = lesson;
          return <>
            <Card className="record" mode='shadow'>
              <div>
                <Headline>{lessonObj.sbj}</Headline>
                <Text>{classTimings[timeId]}</Text>
                <Text>{lessonObj.teacher}</Text>
                <Text className={`record-tag ${tagsClasses(lessonObj.type)}`}>{lessonObj.type}</Text>
              </div>
            </Card>
            {timeId === 2 && id !== classesArr.length-1 ?
              <div className='record--lunch-wrapper'>
                <FoodIcon size='m' className='record--lunch-icon'/>
                <Text className='record--lunch-text' weight='semibold'>Обед</Text>
              </div>
              : null}
          </>
        })
  )
};

export default Record;