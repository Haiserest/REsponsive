import './CallToAction.css'
import { FiCode } from "react-icons/fi";

export default function CallToAction(){
    return (
        <div className='cta-bg'>
            <div className='overlay'></div>
            <div className='container'>
                <div className='cta-text'>
                    <FiCode className='FiCode' />
                    <h2>React Develop</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id diam sit amet metus finibus ornare sed in lacus. Sed mollis tristique diam, nec sodales magna tempus rutrum. Nam euismod, magna ac hendrerit venenatis, ante ipsum suscipit leo, vitae commodo nulla turpis vel justo.</p>
                    <a href='#' className='cta-btn'>Get To Know</a>
                </div>
            </div>
        </div>
    );
}