import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Dicks from "./images/Dicks1.jpeg"
//import crockett from "./images/crockett1.png"
import hacks from "./images/hacks.jpeg"
//import innerLoot from "./images/innerLoot.png"

import AnimatedLine from './AnimatedLine';



const Images =({src})=>{
    return(

        <img src={src} className="rounded-full" alt="Profile"/>
    )
}


const Experience =()=>{

    return(

        <div  className="bg-gray-900 text-white p-6">
             <div className="bg-gray-900 text-white flex flex-col items-center justify-center  ">
                <h1  className="text-4xl font-bold mb-4 text-white " >Experience</h1>
                </div>
            
       
    
            <VerticalTimeline>
                               
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work "
                        contentStyle={{ background: 'rgb(218, 12, 129)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="Summer 2022"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<Images src={Dicks}/>}
                    
                    >
                        <h3 className="vertical-timeline-element-title">Footwear Associate</h3>
                        <h4 className="vertical-timeline-element-subtitle ">Boca Raton, FL</h4>
                        <p>
                            <ul>
                                <li>  I provided exceptional customer service by leveraging my passion for sports and footwear.   </li>
                                <li> I assisted customers in selecting the perfect shoes for their athletic needs, staying well-informed about the latest trends and products.</li>        
                            </ul>
                        </p>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(233, 87, 147)', color: '#fff' }}
                        date="Fall 2022"
                        iconStyle={{ background: 'rgb(80,80,80)', color: '#fff' }}
                        icon={<Images src={hacks}/>}
                    
                    >
                        <h3 className="vertical-timeline-element-title">ShellHacks 2022</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, Fl</h4>
                        <p>
                            At ShellHacks, I actively participated in an immersive and collaborative hackathon experience.
                             My primary role involved working with a team of fellow participants to ideate, design, and develop innovative software solutions.
                              Throughout the event, 
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(218, 12, 129)', color: '#fff' }}
                        date="Spring 2023"
                        iconStyle={{ background: 'rgb(80,80,80)', color: '#fff' }}
                        icon={<Images src={Dicks}/>}
                    
                    >
                        <h3 className="vertical-timeline-element-title">Research Intern at InnerLoot Innovations</h3>
                        <h4 className="vertical-timeline-element-subtitle">Tamarac, Fl</h4>
                        <p>
                        User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(233, 87, 147)', color: '#fff' }}
                        date="Fall 2023"
                        iconStyle={{ background: 'rgb(80,80,80)', color: '#fff' }}
                        icon={<Images src={Dicks} />}
                    
                    >
                        <h3 className="vertical-timeline-element-title">Coding Instructor at Crokett Foundation</h3>
                        <h4 className="vertical-timeline-element-subtitle">Fort Lauderdale, Fl</h4>
                        <p>
                        User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>

                <AnimatedLine/>

       
                  
        </div>


    )








}

export default Experience