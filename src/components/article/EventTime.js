import React from 'react';
import {Subtitle} from 'components/elements';
import {getTimeLapseString} from 'util';

const EventTime = ({style, time}) =>
  !time ||
  !getTimeLapseString(time) || (
    <Subtitle style={style}>{getTimeLapseString(time)}更新</Subtitle>
  );

export default EventTime;
