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
      <TimelineBox 
        color={'error'} 
        content={'Once the topic was finalized, the project charter document was submitted for evaluation. This document also included a brief overview on key aspects of the proposed research along with the research problem, research objectives, overall solution as well as member task breakdown of the proposed research.'} 
        title={'Project Charter Submission'} 
        date={'January, 2023'} 
        marks={'No marks allocated'} 
      />
      <TimelineBox 
        color={'grey'} 
        content={'Presented to a panel of judges in order to provide an overview of the proposed research.'} 
        title={'Project Proposal Presentation'} 
        date={'February, 2023'} 
        marks={'5'} 
      />
      <TimelineBox 
        color={'primary'} 
        content={'The submission of a report which provides an in-depth analysis pertaining to key aspects of the proposed research along with the research problem, objectives, as well as the overall proposed solution.'} 
        title={'Project Proposal Report'} 
        date={'February, 2023'} 
        marks={'5'} 
      />
      <TimelineBox 
        color={'success'} 
        content={'The submission of a document that provides an overview of key tasks conducted by members during the implementation phase of the research.'} 
        title={'Status Document 1'} 
        date={'July, 2023'} 
        marks={'1'} 
      />
      <TimelineBox 
        color={'warning'} 
        content={'Evaluation of 50% completion of the proposed solution by a panel of judges.'} 
        title={'Progress Presentation 1'} 
        date={'July, 2023'} 
        marks={'10'} 
      />
      <TimelineBox 
        color={'error'} 
        content={'Draft submission of the research paper submitted to the supervisor for evaluation.'} 
        title={'Research Paper draft submission'} 
        date={'July, 2023'} 
        marks={'10'} 
      />
      <TimelineBox 
        color={'primary'} 
        content={'Submission of the group and individual thesis documents for evaluation.'} 
        title={'Final Thesis Submission'} 
        date={'September, 2023'} 
        marks={'15'} 
      />
      <TimelineBox 
        color={'info'} 
        content={'Evaluation of 90% completion of the proposed solution by a panel of judges.'} 
        title={'Progress Presentation 2'} 
        date={'September, 2023'} 
        marks={'18'} 
      />
      <TimelineBox 
        color={'grey'} 
        content={'Submission of the research logbook and status document 2 which provides an overview of all key tasks conducted by members during the implementation phase of the research.'} 
        title={'Log Book and Status Document 2'} 
        date={'November, 2023'} 
        marks={'3'} 
      />
      <TimelineBox 
        color={'secondary'} 
        content={'Submission of research website for evaluation.'} 
        title={'Website Assessment'} 
        date={'November, 2023'} 
        marks={'2'} 
      />
      <TimelineBox 
        color={'success'} 
        content={'Final evaluation of the completed product.'} 
        title={'Final Presentation and Viva'} 
        date={'October, 2023'} 
        marks={'25'} 
      />
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

