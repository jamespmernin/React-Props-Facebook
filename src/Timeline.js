import React from 'react';
import Status from "./Status";
import './Timeline.css';

function Timeline() {
  return (
    <div className="timeline">
      <Status text={"Contrary to popular belief, I know exactly what I'm doing."} pic={"https://mir-s3-cdn-cf.behance.net/project_modules/fs/53c6fd42419075.57cc3f77e7ba5.png"} user={"Tony Stark"} date={"April 3 at 10:28 AM"} />
      <Status text={"The difference between you and me is...I'm not wearing hockey pants."} pic={"https://mir-s3-cdn-cf.behance.net/project_modules/fs/f4a4d442419075.57cc3f77e4089.png"} user={"Bruce Wayne"} date={"April 3 at 10:27 AM"} />
      <Status text={"A fourth wall within a fourth wall. That's like...sixteen walls."} pic={"https://mir-s3-cdn-cf.behance.net/project_modules/fs/64edb642419075.57cc3f77e4ec4.png"} user={"Wade Wilson"} date={"April 3 at 10:25 AM"} />
    </div>
  );
}

export default Timeline;
