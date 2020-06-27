import React from 'react';
import {Card, Headline, Separator, Text} from "@vkontakte/vkui";
import "../styles/Record.css";

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

const Record = ({recordObj}) => {
  const classesArr = Object.values(recordObj).filter(lesson => lesson.length > 0);

  return (
    <Card className="record" mode='shadow'>
      {
        classesArr.map((lesson, id) => {
          const [lessonObj] = lesson;
          return <>
                  <div className="record-lesson">
                    <Headline>{lessonObj.sbj}</Headline>
                    <Text>{lessonObj.teacher}</Text>
                    <Text className={`record-tag ${tagsClasses(lessonObj.type)}`}>{lessonObj.type}</Text>
                  </div>
                  {id !== classesArr.length - 1 ? <Separator/> : null}
                 </>
        })
      }
    </Card>
  )
};

export default Record;