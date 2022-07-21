import timelineData from '../../portfolio';
import TimelineItem from '../TimelineItem/TimelineItem'
import './TimelineContainer.css'

const Timeline = () =>
    timelineData.length > 0 && (
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );

export default Timeline