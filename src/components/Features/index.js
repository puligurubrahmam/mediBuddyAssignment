import './index.css'
import {Component} from 'react'

class Features extends Component
{
    render()
    {
        const {featuresObject} = this.props;
        return (
            <div className='features-container'>
                <h1 className='head'>{featuresObject.heading}</h1>
                <ul className='features-ul'>
                    {
                        (featuresObject.categories?.["10386"]!==undefined)&&featuresObject.categories?.["10386"].map((item)=>
                        {
                            return (
                                <li>
                                    <button>{item}</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className='features-ul-types'>
                    {
                        (featuresObject.props?.[0]?.packages!==undefined)&&featuresObject.props?.[0]?.packages.map((item)=>
                        {
                            return(
                            <li className='features-ul-types-li'>
                                <h1 className='features-heading'>{item.packageDisplayName}</h1>
                                <p className='report'>{item.reportsTatText}</p>
                                <div className='flex-row'>
                                    <div>
                                        <p className='features-para1'>{item.testCount} tests</p>
                                        <ul className='tests'>
                                            {
                                                (item?.testsSummary!==undefined)&&item?.testsSummary.map((item)=>
                                                {
                                                    return (
                                                        <li className='total-tests'>{item}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div>
                                        <p className='features-para1'>Includes</p>
                                        <p>{item.isRadiologyIncluded?'Radiology':''}</p>
                                    </div>
                                </div>
                                <div className='flex-row fasting-container'>
                                    <div>
                                        <p className='features-para1'>Fasting</p>
                                        <p className='total-tests'>{item.fastingHoursText}</p>
                                    </div>
                                    <div>
                                        <p className='features-para1'>Available at</p>
                                        <p className='total-tests'>{item.isHomeSampleAvailable?'Home':''}</p>
                                    </div>
                                </div>
                                <div className='cart-price-container'>
                                    <p className='features-heading'>{item.price}</p>
                                    <div className='cart-btn'>
                                        <button>-</button>
                                        <button>0</button>
                                        <button>+</button>
                                    </div>
                                </div>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Features;