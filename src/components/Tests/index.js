import './index.css'
import {Component} from 'react'

class Tests extends Component
{
    render()
    {
        const {testObject} = this.props;
        return (
            <ul className='services-ul'>
                {
                    (testObject.props!==undefined)&&testObject.props.map((item)=>
                    {
                        return (
                            <li>
                                <img src={item.iconUrl} alt={item.iconText}/>
                                <p>{item.iconText}</p>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
export default Tests;