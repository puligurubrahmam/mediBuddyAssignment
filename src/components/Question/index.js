import './index.css'
import {Component} from 'react'

class Question extends Component
{
    state={questionId:null,display:false}
    render()
    {
        const {questionObject} = this.props;
        return (
            <div className='questionContainer'>
                <h1 className='question-heading'>{questionObject.props?.[0]?.question}</h1>
                <ul className='question-ul'>
                    {
                        (questionObject.props?.[0]?.points!==undefined)&&questionObject.props?.[0]?.points.map((point)=>
                        {
                            return (
                                <li className='question-ul-li'>
                                    <img src={`https://www.medibuddy.in${point.img}`} alt={point.img}/>
                                    <p className='point-para'>{point.pnt}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            <h1 className='question-heading'>{questionObject.title}</h1>
            <div className='question-container'>
            <ul className='frequent-question-ul'>
                {
                    (questionObject.props!==undefined)&&questionObject.props.map((item,index)=>
                    {
                        if(index>0)
                        {
                            return (
                                <li>
                                    <div className='question-top'>
                                        <h1 className='question-head'>{item.question}</h1>
                                        <button onClick={()=>{this.setState((prevState)=>{return {questionId:item.id,display:!prevState.display}})}} className='circle'>
                                            {(this.state.display)?'-':'+'}
                                        </button>
                                    </div>
                                    {
                                    (item.id===this.state.questionId&&this.state.display)&&(<div>
                                    <p className='pnt-txt'>{item.answer}</p>
                                    <ul className='point-ul'>
                                        {
                                            item.points.map((point)=>
                                            {
                                                return (
                                                    <li>
                                                        <p className='pnt-txt'>{point.pnt}</p>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    </div>)
                                    }
                                </li>
                            )
                        }
                    })
                }
            </ul>
            </div>
            </div>
        )
    }
}
export default Question;
