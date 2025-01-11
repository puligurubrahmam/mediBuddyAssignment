import './index.css'
import {Component} from 'react'

class Rating extends Component
{
    render()
    {
        const {ratingsObject} = this.props;
        return (
            <div className='rating-container'>
                <h1 className='rating-heading'>{ratingsObject.title}</h1>
            <ul className='rating-ul'>
                {
                    (ratingsObject.props!==undefined)&&ratingsObject.props.map((item)=>
                    {
                        const start = new Date(item.days);
                        const end = new Date();
                        const timeDiff = Math.abs(end - start);
                        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))
                        return (
                            <li className='rating-li'>
                                <div>
                                    <div className='row'>
                                    <svg width="51" height="9" viewBox="0 0 51 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.53564 0.748779L5.17065 2.70078C5.20175 2.79698 5.26251 2.88083 5.34427 2.94031C5.42602 2.99978 5.52454 3.0318 5.62564 3.03177H7.67865C7.77962 3.03203 7.87794 3.06421 7.95953 3.12369C8.04113 3.18316 8.10183 3.26687 8.133 3.36292C8.16416 3.45896 8.16419 3.56239 8.13306 3.65845C8.10192 3.7545 8.04123 3.83827 7.95966 3.89777L6.29865 5.10477C6.21704 5.16429 6.1563 5.24806 6.12506 5.34412C6.09382 5.44017 6.09366 5.54363 6.12463 5.63977L6.75964 7.59177C6.7907 7.68792 6.79054 7.79145 6.75922 7.88751C6.72789 7.98358 6.66698 8.06726 6.58521 8.12662C6.50343 8.18598 6.405 8.21796 6.30396 8.21799C6.20291 8.21801 6.10445 8.18609 6.02264 8.12677L4.36163 6.91977C4.27981 6.86033 4.18127 6.82831 4.08014 6.82831C3.97901 6.82831 3.88047 6.86033 3.79865 6.91977L2.13763 8.12677C2.05583 8.18609 1.95737 8.21801 1.85632 8.21799C1.75528 8.21796 1.65684 8.18598 1.57507 8.12662C1.4933 8.06726 1.43239 7.98358 1.40106 7.88751C1.36973 7.79145 1.36958 7.68792 1.40063 7.59177L2.03564 5.63977C2.06662 5.54363 2.06649 5.44017 2.03525 5.34412C2.00401 5.24806 1.94324 5.16429 1.86163 5.10477L0.200653 3.89777C0.119074 3.83827 0.0583854 3.7545 0.0272524 3.65845C-0.00388068 3.56239 -0.00388106 3.45896 0.0272829 3.36292C0.0584468 3.26687 0.119177 3.18316 0.200775 3.12369C0.282374 3.06421 0.380687 3.03203 0.481659 3.03177H2.53464C2.63574 3.0318 2.73425 2.99978 2.81601 2.94031C2.89776 2.88083 2.95856 2.79698 2.98965 2.70078L3.62463 0.748779C3.65592 0.652617 3.71685 0.568823 3.79868 0.509399C3.8805 0.449976 3.97902 0.417969 4.08014 0.417969C4.18126 0.417969 4.27981 0.449976 4.36163 0.509399C4.44346 0.568823 4.50436 0.652617 4.53564 0.748779Z" fill="#F7BD1B"/>
                                    <path d="M15.1685 0.748779L15.8035 2.70078C15.8346 2.79698 15.8953 2.88083 15.9771 2.94031C16.0588 2.99978 16.1574 3.0318 16.2585 3.03177H18.3115C18.4124 3.03203 18.5107 3.06421 18.5923 3.12369C18.6739 3.18316 18.7346 3.26687 18.7658 3.36292C18.797 3.45896 18.797 3.56239 18.7659 3.65845C18.7347 3.7545 18.674 3.83827 18.5925 3.89777L16.9315 5.10477C16.8499 5.16429 16.7891 5.24806 16.7579 5.34412C16.7266 5.44017 16.7265 5.54363 16.7574 5.63977L17.3925 7.59177C17.4235 7.68792 17.4234 7.79145 17.392 7.88751C17.3607 7.98358 17.2998 8.06726 17.218 8.12662C17.1362 8.18598 17.0378 8.21796 16.9368 8.21799C16.8357 8.21801 16.7373 8.18609 16.6555 8.12677L14.9944 6.91977C14.9126 6.86033 14.8141 6.82831 14.713 6.82831C14.6118 6.82831 14.5133 6.86033 14.4315 6.91977L12.7704 8.12677C12.6886 8.18609 12.5902 8.21801 12.4891 8.21799C12.3881 8.21796 12.2897 8.18598 12.2079 8.12662C12.1261 8.06726 12.0652 7.98358 12.0339 7.88751C12.0025 7.79145 12.0024 7.68792 12.0334 7.59177L12.6685 5.63977C12.6994 5.54363 12.6993 5.44017 12.6681 5.34412C12.6368 5.24806 12.5761 5.16429 12.4944 5.10477L10.8335 3.89777C10.7519 3.83827 10.6912 3.7545 10.6601 3.65845C10.6289 3.56239 10.6289 3.45896 10.6601 3.36292C10.6913 3.26687 10.752 3.18316 10.8336 3.12369C10.9152 3.06421 11.0135 3.03203 11.1145 3.03177H13.1675C13.2685 3.0318 13.3671 2.99978 13.4488 2.94031C13.5306 2.88083 13.5914 2.79698 13.6225 2.70078L14.2574 0.748779C14.2887 0.652617 14.3497 0.568823 14.4315 0.509399C14.5133 0.449976 14.6118 0.417969 14.713 0.417969C14.8141 0.417969 14.9126 0.449976 14.9944 0.509399C15.0763 0.568823 15.1372 0.652617 15.1685 0.748779Z" fill="#F7BD1B"/>
                                    <path d="M25.8052 0.748779L26.4402 2.70078C26.4713 2.79698 26.532 2.88083 26.6138 2.94031C26.6956 2.99978 26.7941 3.0318 26.8952 3.03177H28.9482C29.0492 3.03203 29.1475 3.06421 29.2291 3.12369C29.3107 3.18316 29.3714 3.26687 29.4025 3.36292C29.4337 3.45896 29.4337 3.56239 29.4026 3.65845C29.3715 3.7545 29.3108 3.83827 29.2292 3.89777L27.5682 5.10477C27.4866 5.16429 27.4258 5.24806 27.3946 5.34412C27.3634 5.44017 27.3632 5.54363 27.3942 5.63977L28.0292 7.59177C28.0602 7.68792 28.0601 7.79145 28.0287 7.88751C27.9974 7.98358 27.9365 8.06726 27.8547 8.12662C27.773 8.18598 27.6745 8.21796 27.5735 8.21799C27.4724 8.21801 27.374 8.18609 27.2922 8.12677L25.6312 6.91977C25.5493 6.86033 25.4508 6.82831 25.3497 6.82831C25.2485 6.82831 25.15 6.86033 25.0682 6.91977L23.4072 8.12677C23.3254 8.18609 23.2269 8.21801 23.1259 8.21799C23.0248 8.21796 22.9264 8.18598 22.8446 8.12662C22.7628 8.06726 22.7019 7.98358 22.6706 7.88751C22.6393 7.79145 22.6391 7.68792 22.6702 7.59177L23.3052 5.63977C23.3362 5.54363 23.336 5.44017 23.3048 5.34412C23.2735 5.24806 23.2128 5.16429 23.1312 5.10477L21.4702 3.89777C21.3886 3.83827 21.3279 3.7545 21.2968 3.65845C21.2657 3.56239 21.2657 3.45896 21.2968 3.36292C21.328 3.26687 21.3887 3.18316 21.4703 3.12369C21.5519 3.06421 21.6502 3.03203 21.7512 3.03177H23.8042C23.9053 3.0318 24.0038 2.99978 24.0855 2.94031C24.1673 2.88083 24.2281 2.79698 24.2592 2.70078L24.8942 0.748779C24.9255 0.652617 24.9864 0.568823 25.0682 0.509399C25.15 0.449976 25.2485 0.417969 25.3497 0.417969C25.4508 0.417969 25.5493 0.449976 25.6312 0.509399C25.713 0.568823 25.7739 0.652617 25.8052 0.748779Z" fill="#F7BD1B"/>
                                    <path d="M36.438 0.748779L37.073 2.70078C37.1041 2.79698 37.1649 2.88083 37.2466 2.94031C37.3284 2.99978 37.4269 3.0318 37.528 3.03177H39.581C39.682 3.03203 39.7803 3.06421 39.8619 3.12369C39.9435 3.18316 40.0042 3.26687 40.0353 3.36292C40.0665 3.45896 40.0665 3.56239 40.0354 3.65845C40.0043 3.7545 39.9436 3.83827 39.862 3.89777L38.201 5.10477C38.1194 5.16429 38.0586 5.24806 38.0274 5.34412C37.9962 5.44017 37.996 5.54363 38.027 5.63977L38.662 7.59177C38.693 7.68792 38.6929 7.79145 38.6616 7.88751C38.6302 7.98358 38.5693 8.06726 38.4875 8.12662C38.4058 8.18598 38.3073 8.21796 38.2063 8.21799C38.1053 8.21801 38.0068 8.18609 37.925 8.12677L36.264 6.91977C36.1822 6.86033 36.0836 6.82831 35.9825 6.82831C35.8813 6.82831 35.7828 6.86033 35.701 6.91977L34.04 8.12677C33.9582 8.18609 33.8597 8.21801 33.7587 8.21799C33.6576 8.21796 33.5592 8.18598 33.4774 8.12662C33.3956 8.06726 33.3347 7.98358 33.3034 7.88751C33.2721 7.79145 33.2719 7.68792 33.303 7.59177L33.938 5.63977C33.969 5.54363 33.9688 5.44017 33.9376 5.34412C33.9064 5.24806 33.8456 5.16429 33.764 5.10477L32.103 3.89777C32.0214 3.83827 31.9607 3.7545 31.9296 3.65845C31.8985 3.56239 31.8985 3.45896 31.9296 3.36292C31.9608 3.26687 32.0215 3.18316 32.1031 3.12369C32.1847 3.06421 32.283 3.03203 32.384 3.03177H34.437C34.5381 3.0318 34.6366 2.99978 34.7184 2.94031C34.8001 2.88083 34.8609 2.79698 34.892 2.70078L35.527 0.748779C35.5583 0.652617 35.6192 0.568823 35.701 0.509399C35.7828 0.449976 35.8814 0.417969 35.9825 0.417969C36.0836 0.417969 36.1822 0.449976 36.264 0.509399C36.3458 0.568823 36.4067 0.652617 36.438 0.748779Z" fill="#F7BD1B"/>
                                    <path d="M47.0708 0.748779L47.7058 2.70078C47.7369 2.79698 47.7977 2.88083 47.8794 2.94031C47.9612 2.99978 48.0597 3.0318 48.1608 3.03177H50.2138C50.3148 3.03203 50.4131 3.06421 50.4947 3.12369C50.5763 3.18316 50.637 3.26687 50.6682 3.36292C50.6993 3.45896 50.6993 3.56239 50.6682 3.65845C50.6371 3.7545 50.5764 3.83827 50.4948 3.89777L48.8338 5.10477C48.7522 5.16429 48.6915 5.24806 48.6602 5.34412C48.629 5.44017 48.6288 5.54363 48.6598 5.63977L49.2948 7.59177C49.3259 7.68792 49.3257 7.79145 49.2944 7.88751C49.263 7.98358 49.2021 8.06726 49.1204 8.12662C49.0386 8.18598 48.9402 8.21796 48.8391 8.21799C48.7381 8.21801 48.6396 8.18609 48.5578 8.12677L46.8968 6.91977C46.815 6.86033 46.7164 6.82831 46.6153 6.82831C46.5142 6.82831 46.4156 6.86033 46.3338 6.91977L44.6728 8.12677C44.591 8.18609 44.4925 8.21801 44.3915 8.21799C44.2904 8.21796 44.192 8.18598 44.1102 8.12662C44.0285 8.06726 43.9675 7.98358 43.9362 7.88751C43.9049 7.79145 43.9047 7.68792 43.9358 7.59177L44.5708 5.63977C44.6018 5.54363 44.6016 5.44017 44.5704 5.34412C44.5392 5.24806 44.4784 5.16429 44.3968 5.10477L42.7358 3.89777C42.6542 3.83827 42.5935 3.7545 42.5624 3.65845C42.5313 3.56239 42.5313 3.45896 42.5624 3.36292C42.5936 3.26687 42.6543 3.18316 42.7359 3.12369C42.8175 3.06421 42.9158 3.03203 43.0168 3.03177H45.0698C45.1709 3.0318 45.2694 2.99978 45.3512 2.94031C45.4329 2.88083 45.4937 2.79698 45.5248 2.70078L46.1598 0.748779C46.1911 0.652617 46.252 0.568823 46.3338 0.509399C46.4157 0.449976 46.5142 0.417969 46.6153 0.417969C46.7164 0.417969 46.815 0.449976 46.8968 0.509399C46.9786 0.568823 47.0395 0.652617 47.0708 0.748779Z" fill="#F7BD1B"/>
                                    </svg>
                                        <p className='days'>{daysDiff} Days Ago</p>
                                    </div>
                                    <div>
                                        <p>{item.location}</p>
                                    </div>
                                </div>
                                <p className='rating-content'>{item.content}</p>
                                <hr/>
                                <p className='rating-name'>{item.name}</p>
                            </li>
                        )
                    })
                }
            </ul>
            </div>
        )
    }
}
export default Rating;