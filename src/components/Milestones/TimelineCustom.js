import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function ColorsTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineBox 
        color={'success'} 
        content={'Initial topic assessment document of the proposed research was submitted for evaluation. The submitted document included a brief overview on key aspects of the proposed research along with the research problem, research objectives, overall solution as well as member task breakdown.,'} 
        title={'Project Topic Assessment'} 
        date={'January, 2023'} 
        marks={'No marks allocated'} 
      />
      <TimelineBox color={'error'} content={'srjh,'} title={'aerg'} date={'Nov, 2023'} marks={'20'}/>
      <TimelineBox color={'grey'} content={'srjh,'} title={'aerg'} date={'Nov, 2023'} marks={'20'}/>
      <TimelineBox color={'primary'} content={'srjh,'} title={'aerg'} date={'Nov, 2023'} marks={'20'} />
      <TimelineBox color={'success'} content={'srjh,'} title={'aerg'} date={'Nov, 2023'} marks={'20'} />
    </Timeline>
  );
}

function TimelineBox({color, title, date, marks, content}) {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color={color} sx={{width: '10px', height: '10px'}}/>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <TimelineContentCustom 
          title={title}
          content={content}
          marks={marks}
          date={date}
        />
      </TimelineContent>
    </TimelineItem>
  )
}

function TimelineContentCustom({marks, content, date, title}) {
  return (
    <div className='timeline-card'>
      <div className='timeline-card-title'>
        {title}
      </div>
      <div className='timeline-card-date'>
        {date}
      </div>
      <div className='timeline-card-content'>
        {content}
      </div>
      <div className='timeline-card-mark-allocation'>
        {marks === 'No marks allocated' ? marks : `Marks Allocation - ${marks}%`}
      </div>
    </div>
  )
}

