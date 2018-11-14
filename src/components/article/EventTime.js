import React from 'react';
import { Subtitle } from '../elements';
import { getTimeLapseString } from '../../util';

const EventTime = ({ style, time }) => !time || !getTimeLapseString(time) || (
  <Subtitle style={style}>{getTimeLapseString(time)}</Subtitle>
);

export default EventTime;
