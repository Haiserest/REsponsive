import './Banner.css'

let bannerData = {
    title : "landing Page",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id diam sit amet metus finibus ornare sed in lacus. Sed mollis tristique diam, nec sodales magna tempus rutrum. Nam euismod, magna ac hendrerit venenatis, ante ipsum suscipit leo, vitae commodo nulla turpis vel justo."
}

export default function Banner(){
    return (
        <div className='banner-bg'>
            <div className='container'>
                 <div className='banner-con'>
                     <div className='banner-text'>
                         <h1>{bannerData.title}</h1>
                         <p>{bannerData.desc}</p>
                         <a href='#' className='banner-btn'>learn more</a>
                     </div>
                 </div>
            </div>
        </div>
    );
}