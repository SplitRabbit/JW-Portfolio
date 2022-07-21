import {timelineData} from '../../portfolio';
import TimelineItem from '../TimelineItem/TimelineItem'
import './TimelineContainer.css'

const Timeline = () =>
    timelineData.length > 0 && (
        <section className='section' id='timeline'>
        <h2 className='section__title'>Timeline</h2>
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>

      </section>

    );

export default Timeline