import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Body(props) {
    return (
        <div className='h-[100vh] flex justify-center'>
            <div className='h-full w-[95vw] md:w-auto flex flex-col md:flex-row justify-evenly md:justify-evenly items-center'>
                <div className={`flex-col w-[90%] md:w-[60%] order-2 md:${props.pos1} `}>
                    <h1 className='text-[20px] md:text-[30px] font-semibold text-black'>
                        {props.headQ}
                    </h1>
                    <p className='text-[#6a6a6a] text-[15px]  text-justify md:text-[1rem] my-5'>
                        {props.datas}
                    </p>
                    <div onClick={props.pgLink} className={`flex flex-col md:flex-row ${props.btnPos} `}>
                        <Link to={props.links} className=''>
                            <button className={`py-2 px-4 w-[100%] ${props.visibilty1} ${props.btnC} text-white rounded-md transition ease-in-out delay-150  hover:bg-[#6a6a6a] duration-300 my-2 md:my-auto`}> {props.Btns1}</button>
                        </Link>
                        <a>
                            <button className={`border-2 w-[100%] bg-black ${props.visibilty2} hover:bg-white hover:border-2 transition ease-in-out delay-150 duration-300 hover:border-black  hover:text-black text-white px-5 py-2 rounded-md`}>{props.Btns2}</button>
                        </a>
                    </div>
                </div>
                <img className={`w-[80%] md:w-1/4 h-fit order-1 md:${props.pos2} `} src={props.Imgs} alt="" />
            </div>
        </div>
    )
}

Body.propTypes = {
    headQ: PropTypes.string,
    datas: PropTypes.string,
    Imgs: PropTypes.string,
    pos1: PropTypes.string,
    pos2: PropTypes.string,
    visibilty1: PropTypes.string,
    visibilty2: PropTypes.string,
    btnPos: PropTypes.string,
    Btns1: PropTypes.string,
    Btns2: PropTypes.string,
    btnC: PropTypes.string,
    pgLink: PropTypes.func,
    links: PropTypes.string,
    link2: PropTypes.string,
}