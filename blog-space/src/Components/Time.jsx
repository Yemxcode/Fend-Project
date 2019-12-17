import React from 'react';
import moment from 'moment';

export default function Time ({time}) {
 const formatTime = moment(time || moment.now()).fromNow();
 return (
  <>
   {formatTime}
  </>
 ) 
 
}