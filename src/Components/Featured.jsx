import musk from '/public/featured/Mask.png'
import musk1 from '/public/featured/Mask (1).png'
import musk2 from '/public/featured/Mask (2).png'
import musk3 from '/public/featured/Mask (3).png'
import musk4 from '/public/featured/Mask (4).png'

const Featured = () => {
    return (
        <div className='featured_color py-5'>
            <div className="container">
                <div className="row"><h6 className='text-info'>Featured Project</h6></div>
                <div className="row py-3"> <h4>We provide the Perfect Solution to your business growth</h4></div>
                <div className="row">
                    <div className="col-md-6 pt-5">
                        <div className=''><img src={musk} alt="" /></div>
                        <span className='py-2'>App Design - June 20, 2022</span>
                        <h5>App Redesign</h5>
                    </div>
                    <div className="col-md-6 pt-5">
                        <div className="row">
                            <div className="col md-6">
                            <div className=''><img src={musk1} alt="" /></div>
                        <span className='py-2'>App Design - June 20, 2022</span>
                        <h5>Redesign channel website landng page</h5>
                            </div>
                            <div className="col md-6">
                            <div className=''><img src={musk2} alt="" /></div>
                        <h6 className='py-2'>App Design - June 20, 2022</h6>
                        <h5>Redesign channel website landng page</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col md-6">
                            <div className=''><img src={musk3} alt="" /></div>
                        <span className='py-2'>App Design - June 20, 2022</span>
                        <h5>Redesign channel website landng page</h5>
                            </div>
                            <div className="col md-6">
                            <div className=''><img src={musk4} alt="" /></div>
                        <h6 className='py-2'>App Design - June 20, 2022</h6>
                        <h5>Redesign channel website landng page</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;
