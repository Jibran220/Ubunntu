import React, {useEffect,useState} from 'react'
import { Row,Col,Dropdown,Button,OverlayTrigger,Tooltip} from 'react-bootstrap'
import { Link ,useHistory} from 'react-router-dom'
import {MdPersonAddAlt1}from 'react-icons/md' 
import {BsEye}from 'react-icons/bs' 
import {BsPlusCircle}from 'react-icons/bs'
import { Api } from './constant/constant.js'
import {bindActionCreators} from "redux"
import styled from "styled-components";
 
//circular
import Circularprogressbar from '../../components/circularprogressbar.js'

// AOS
import AOS from 'aos'
import '../../../node_modules/aos/dist/aos'
import '../../../node_modules/aos/dist/aos.css'
//apexcharts
import Chart from "react-apexcharts";

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/components/navigation/navigation.scss';

//progressbar
import Progress from '../../components/progress.js'
//img
import shapes1 from '../../assets/images/shapes/01.png'
import shapes2 from '../../assets/images/shapes/02.png'
import shapes3 from '../../assets/images/shapes/03.png'
import { Scrollbars } from 'react-custom-scrollbars';
import shapes4 from '../../assets/images/shapes/04.png'
import shapes5 from '../../assets/images/shapes/05.png'

//Count-up
import CountUp from 'react-countup';
// store
import {NavbarstyleAction, getDirMode, getcustomizerMode, getcustomizerprimaryMode,  getcustomizerinfoMode,  SchemeDirAction, ColorCustomizerAction,  getNavbarStyleMode, getSidebarActiveMode, SidebarActiveStyleAction, getDarkMode, ModeAction,  SidebarColorAction, getSidebarColorMode, getSidebarTypeMode} from '../../store/setting/setting'
import {connect} from "react-redux"

  
// install Swiper modules
SwiperCore.use([Navigation]);




const mapStateToProps = (state) => {
    return {
        darkMode: getDarkMode(state),
        customizerMode: getcustomizerMode(state),
        cololrinfomode: getcustomizerinfoMode(state),
        colorprimarymode: getcustomizerprimaryMode(state),
        schemeDirMode: getDirMode(state),
        sidebarcolorMode: getSidebarColorMode(state),
        sidebarTypeMode: getSidebarTypeMode(state),
        sidebaractivestyleMode: getSidebarActiveMode(state),
        navbarstylemode: getNavbarStyleMode(state),
    };
}
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(
        {
            ModeAction,
            SchemeDirAction,
            SidebarColorAction,
            SidebarActiveStyleAction,
            NavbarstyleAction,
            ColorCustomizerAction,
        },
        dispatch
    )
})

      
const Index = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      getproducts();
      getUserRFQCount()
      getproductsCount()
      getproductsMonth()
      getproductsMonthCount()
    }, []);
    let history =useHistory()
  
    const getproducts = async () => {
      let result = await fetch(`${Api}/rfqmanagers`);
      result = await result.json();
      setData(result);
    };
    const [count, setCount] = useState([])
    const getproductsCount = async () => {
        let result = await fetch(`${Api}/rfqmanagers/count`);
        result = await result.json();
        setCount(result);
        console.log("the count is : ",result)
        console.log("the count is : ",count)
        
      };
      const [byMonth, setByMonth] = useState([])
      const getproductsMonth = async () => {
        let result = await fetch(`${Api}/rfqmanagers/getThisMonthRecord`);
        result = await result.json();
        setByMonth(result);
        console.log('thia is mmmmmmmmmmmmmmmmmmmmmmmmmmmm',result)
         
        
      };
      const [byMonthCount, setByMonthCount] = useState([])

      const getproductsMonthCount = async () => {
        let result = await fetch(`${Api}/rfqmanagers/getThisMonthRecordCount`);
        result = await result.json();
        setByMonthCount(result);
        console.log('thia is mmmmmmmmmmmmmmmmmmmmmmmmmmmm',result)
         
        
      };
      const [userrfqCount, setUserrfqCount] = useState([])
      const getUserRFQCount = async () => {
        let result = await fetch("${Api}/userrfq/count");
        result = await result.json();
        setUserrfqCount(result);
       
        
      };
      console.log("the count is : ",count)

    useEffect(() => {
        console.log('asasdasdasdasdasdasdasdasasdasdasasasassaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',byMonth)
    AOS.init({
        startEvent: 'DOMContentLoaded',
        disable:  function() {
          var maxWidth = 996;
          return window.innerWidth < maxWidth;
        },
        throttleDelay: 10,
        once: true,
        duration: 700,
        offset: 10
      });
    //   customizer
    const colorcustomizerMode = sessionStorage.getItem('color-customizer-mode');
    const colorcustomizerinfoMode = sessionStorage.getItem('colorcustominfo-mode');
    const colorcustomizerprimaryMode = sessionStorage.getItem('colorcustomprimary-mode');
    if(colorcustomizerMode===null){
        props.ColorCustomizerAction(props.customizerMode, props.cololrinfomode, props.colorprimarymode);
        document.documentElement.style.setProperty('--bs-info', props.cololrinfomode );
       
    }
    else{
        props.ColorCustomizerAction(colorcustomizerMode, colorcustomizerinfoMode, colorcustomizerprimaryMode);
        document.documentElement.style.setProperty('--bs-info', colorcustomizerinfoMode);
            
    }
    
      
    })

    const chart1={
        options : {
            chart: {
                fontFamily: '"Inter", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                toolbar: {
                    show: false
                },
                sparkline: {
                    enabled: false,
                }
            },
            colors: [props.colorprimarymode, props.cololrinfomode],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 3,
            },
            yaxis: {
                show: true,
                labels: {
                show: true,
                minWidth: 19,
                maxWidth: 19,
                style: {
                    colors: "#8A92A6",
                },
                offsetX: -5,
                },
            },
            legend: {
                show: false,
            },
            xaxis: {
            labels: {
                minHeight:22,
                maxHeight:22,
                show: true,
                style: {
                    colors: "#8A92A6",
                },
            },
            lines: {
                show: false  //or just here to disable only x axis grids
            },
            categories: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug"]
         },
            grid: {
                show: false,
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: "vertical",
                    shadeIntensity: 0,
                    gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                    inverseColors: true,
                    opacityFrom: .4,
                    opacityTo: .1,
                    stops: [0, 50, 80],
                    colors: [props.colorprimarymode, props.cololrinfomode]
                }
            },
            tooltip: {
                enabled: true,
            },
    },
        series: [{
            name: 'total',
            data: [94, 80, 94, 80, 94, 80, 94]
        }, {
            name: 'pipline',
            data: [72, 60, 84, 60, 74, 60, 78]
        }]
        
        
    }
    
  //chart2
    const chart2 ={
        options : {
        colors: [props.colorprimarymode, props.cololrinfomode],
        plotOptions: {
            radialBar: {
            hollow: {
                margin: 10,
                size: "50%",
            },
            track: {
                margin: 10,
                strokeWidth: '50%',
            },
            dataLabels: {
                show: false,
            }
            }
        },
        labels: ['Apples', 'Oranges'],
        },
        series: [55, 75],
    }
    const chart3={
        options : {
            chart: {
            stacked: true,
            toolbar: {
                show:false
                }
            },
            colors: [props.colorprimarymode, props.cololrinfomode],
            plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '28%',
                endingShape: 'rounded',
                borderRadius: 5,
            },
            },
            legend: {
            show: false
            },
            dataLabels: {
            enabled: false
            },
            stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
            },
            xaxis: {
            categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S', 'M', 'T', 'W'],
            labels: {
                minHeight:20,
                maxHeight:20,
                style: {
                colors: "#8A92A6",
                },
            }
            },
            yaxis: {
            title: {
                text: ''
            },
            labels: {
                minWidth: 19,
                maxWidth: 19,
                style: {
                    colors: "#8A92A6",
                },
            }
            },
            fill: {
            opacity: 1
            },
            tooltip: {
            y: {
                formatter: function (val) {
                return "$ " + val + " thousands"
                }
            }
            }
        },
        series: [{
            name: 'Successful deals',
            data: [30, 50, 35, 60, 40, 60, 60, 30, 50, 35,]
        }, {
            name: 'Failed deals',
            data: [40, 50, 55, 50, 30, 80, 30, 40, 50, 55]
        }]
    }
    const navigate=useHistory()
  useEffect(async () => {if(! localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) navigate.push('/auth/sign-in') }, []);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));
      useEffect(() => {
        if(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)){
            if (user.username==="Admin1") {navigate.push('/approver')}
            else if(user.username!=="Admin"){navigate.push('/ath')}
        }
        else{
          navigate.push('/auth/sign-in')}},[])
      console.log(user)
      const Add=()=>{navigate.push('/dashboard/form/Rfqform')}
        return (
            <>
                <Row>
                    <Col md="12" lg="12">
                        <Row className="row-cols-1">
                            <div className="overflow-hidden d-slider1 ">
                                <Swiper className="p-0 m-0 mb-2 list-inline "
                                    slidesPerView={5}
                                    spaceBetween={32}
                                    navigation={{
                                        nextEl: '.swiper-button-next',
                                        prevEl: '.swiper-button-prev'
                                    }}
                                    breakpoints={{
                                        320: { slidesPerView: 1 },
                                        550: { slidesPerView: 2 },
                                        991: { slidesPerView: 3 },
                                        1400: { slidesPerView: 4 },
                                        1500: { slidesPerView: 5 },
                                        1920: { slidesPerView: 6 },
                                        2040: { slidesPerView: 7 },
                                        2440: { slidesPerView: 8 }
                                    }} data-aos="fade-down" data-aos-delay="700"
                                >
                                    <SwiperSlide className="card card-slide" >
                                        <div className="card-body">
                                            <div className="progress-widget" >
                                                <Circularprogressbar stroke={props.colorprimarymode} width="60px" height="60px" Linecap='rounded' trailstroke='#ddd' strokewidth="4px" style={{width:60, height:60,}} value={90} id="circle-progress-01" >
                                                    <svg className="" width="24" height="24px" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
                                                    </svg>
                                                </Circularprogressbar>
                                                <div className="progress-detail">
                                                    <p  className="mb-2">Total No of RFQs</p>
                                                    

                                                    <h4 className="counter"><CountUp  start={0} end={count} duration={3}/></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className=" card card-slide" >
                                        <div className="card-body">
                                            <div className="progress-widget">
                                                <Circularprogressbar stroke={props.cololrinfomode} width="60px" height="60px" trailstroke='#ddd' strokewidth="4px"  Linecap='rounded' style={{width:60, height:60,}} value={60} id="circle-progress-02" >
                                                    <svg className="" width="24" height="24" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M19,6.41L17.59,5L7,15.59V9H5V19H15V17H8.41L19,6.41Z" />
                                                    </svg>
                                                </Circularprogressbar>
                                                <div className="progress-detail">
                                                <p  className="mb-2">Total No of RFQs Values</p>
                                                <h4 className="counter">$<CountUp  start={20} end={158} duration={3}/>K</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className=" card card-slide" >
                                        <div className="card-body">
                                            <div className="progress-widget">
                                                <Circularprogressbar stroke={props.colorprimarymode} width="60px" height="60px" trailstroke='#ddd' strokewidth="4px" Linecap='rounded' style={{width:60, height:60,}} value={70} id="circle-progress-03" >
                                                    <svg className="" width="24" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M19,6.41L17.59,5L7,15.59V9H5V19H15V17H8.41L19,6.41Z" />
                                                    </svg>
                                                </Circularprogressbar>
                                                <div className="progress-detail">
                                                    <p  className="mb-2">Total No of RFQs Vendor</p>
                                                    <h4 className="counter"><CountUp  start={0} end={userrfqCount} duration={3}/></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className=" card card-slide" >
                                        <div className="card-body">
                                            <div className="progress-widget">
                                                <Circularprogressbar stroke={props.cololrinfomode} width="60px" height="60px" trailstroke='#ddd' strokewidth="4px" Linecap='rounded' style={{width:60, height:60,}} value={60} id="circle-progress-04" >
                                                    <svg className="" width="24px" height="24px" viewBox="0 0 24 24">
                                                            <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
                                                    </svg>
                                                </Circularprogressbar>
                                                <div className="progress-detail">
                                                    <p  className="mb-2">Revenue</p>
                                                    <h4 className="counter">$<CountUp  start={212} end={742} duration={3}/>K</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className=" card card-slide" >
                                        <div className="card-body">
                                            <div className="progress-widget">
                                                <Circularprogressbar stroke={props.colorprimarymode} width="60px" height="60px" trailstroke='#ddd' strokewidth="4px" Linecap='rounded' style={{width:60, height:60,}} value={50} id="circle-progress-05" >
                                                <svg className="" width="24px" height="24px" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
                                                    </svg>
                                                </Circularprogressbar>
                                                <div className="progress-detail">
                                                    <p  className="mb-2">Net Income</p>
                                                    <h4 className="counter">$<CountUp  start={35} end={150} duration={3}/>K</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className=" card card-slide" >
                                        <div className="card-body">
                                            <div className="progress-widget">
                                                    <Circularprogressbar stroke={props.cololrinfomode} width="60px" height="60px" trailstroke='#ddd' Linecap='rounded' strokewidth="4px" value={40}  style={{width:60, height:60,}} id="circle-progress-06">
                                                    <svg className="" width="24px" height="24px" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
                                                    </svg>
                                                </Circularprogressbar>
                                                <div className="progress-detail">
                                                    <p  className="mb-2">Today</p>
                                                    <h4 className="counter">$<CountUp  start={652} end={4600} duration={3}/></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className=" card card-slide">
                                        <div className="card-body">
                                            <div className="progress-widget">
                                                <Circularprogressbar stroke={props.colorprimarymode}  Linecap='rounded' trailstroke='#ddd' strokewidth="4px" width="60px" height="60px" value={30} style={{width:60, height:60,}} id="circle-progress-07" >
                                                    <svg className="" width="24px" height="24px" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
                                                    </svg>
                                                </Circularprogressbar>
                                                <div className="progress-detail">
                                                    <p  className="mb-2">Members</p>
                                                    <h4 className="counter"><CountUp  start={2} end={11.2} duration={3} decimals={1}/>M</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <div className="swiper-button swiper-button-next"></div>
                                    <div className="swiper-button swiper-button-prev"></div>
                                </Swiper>
                            </div>
                        </Row>
                    </Col>
                    <Col md="12" lg="8">
                        <Row>
                            <Col md="12">
                               
                            </Col>
                            <Col md="12" xl="6">
                              
                            </Col>
                            <Col md="12" xl="6">
                              
                          
                            </Col>         
                            <Col md="12" lg="12">
                                <div className="overflow-hidden card" data-aos="fade-up" data-aos-delay="600">
                                    <div className="flex-wrap card-header d-flex justify-content-between">
                                        <div className="header-title">
                                            <h4 className="mb-2 card-title">Enterprise Clients</h4>
                                                 
                                            <p className="mb-0">
                                                <svg className ="me-2" width="24" height="24" viewBox="0 0 24 24">
                                                    <path fill="#3a57e8" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                                                </svg>

                                                {byMonthCount} new acquired this month
                                            </p>            
                                                 
                                        </div>
                                        {/* <button type="button" name="next" className="outline-light next action-button float-end" value="Next" id='bttn' > <BsPlusCircle  size="30px"/> </button> */}
                                    

    <OverlayTrigger  placement="left" overlay={
        <Tooltip >
            Add new RFQ
        </Tooltip>
        }>
          <Button variant="icon primary float-end" onClick={Add}>
        <span className="  ">
        <BsPlusCircle  size="35px"/> 
        </span>
    </Button>
    </OverlayTrigger>
 </div>
                                    <div className="p-0 card-body">
                                    
                                        
                                        <div className="col-xl"></div>
                                        <div className="col-xl"></div>
                                     
                                                                                    <div className="mt-4 box table-responsive scrollbar">
                                        <Scrollbars style={{ width: 900, height: 400 }}> 
                                            <table id="style-2" className="table box mb-0 table-striped  force-overflow" role="grid">
                                                <thead  >
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                     { 
                               data.map     ((item) => (
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <img className="rounded bg-soft-primary img-fluid avatar-40 me-3" src={shapes1} alt="profile"/>
                                                                <h6> <Link to={"/dashboard/app/Userrfq/" + item._id}>
                              {item.name}
                            </Link></h6>
                                                            </div>
                                                        </td>
                                                        <td>
                                                        <Link className="btn btn-sm btn-icon text-secondary flex-end"  data-bs-toggle="tooltip" title="Add Vendor" to={"/dashboard/form/Userrfq/"+item._id}      >

< MdPersonAddAlt1 size="30px"/> 
   
</Link>{' '}
                                                        <Link className="btn btn-sm btn-icon text-danger"  data-bs-toggle="tooltip" title="Delete" to="#"      >
                                                    <span className="btn-inner">
                                                        <svg width="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                                            <path d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M20.708 6.23975H3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </svg>
                                                    </span>
                                                </Link>
                                                <Link className="btn btn-sm btn-icon text-secondary flex-end"  data-bs-toggle="tooltip" title="View" to="#"      >

< BsEye size="20px"/> 
   
</Link>{' '}
<Link className="btn btn-sm btn-icon text-primary flex-end" data-bs-toggle="tooltip" title="Edit User" to="#"     >
                                                    <span className="btn-inner">
                                                        <svg width="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                                            <path d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M15.1655 4.60254L19.7315 9.16854" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </svg>
                                                    </span>
                                                </Link>
                                    

                                                        </td>
                                                         
                                                        {/* <td>$14,000</td>// no of vendors in this rfq */}
                                                        
                                                    </tr>
                               )) }
                                               
                                                   
                                                </tbody>
                                            </table>
                                            </Scrollbars>
                                        </div>
                                       
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="12" lg="4">
                        <Row>
                            <Col md="12" lg="12">
                                
                             
                            </Col>
                            <Col md="12">
                                <div className="card" data-aos="fade-left" data-aos-delay="600">
                                    <div className="flex-wrap card-header d-flex justify-content-between">
                                        <div className="header-title">
                                            <h4 className="mb-2 card-title">Activity overview</h4>
                                            <p className="mb-0">
                                                <svg className ="me-2" width="24" height="24" viewBox="0 0 24 24">
                                                    <path fill="#17904b" d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z" />
                                                </svg>
                                                this month
                                            </p>
                                        </div>
                                    </div>

    
    
    <div className="card-body">
{
                                        byMonth.map ((item)=>(
                                        <div className="mb-2 d-flex profile-media align-items-top">
                                            <div className="mt-1 profile-dots-pills border-primary"></div>
                                            <div className="ms-4">
                                                <h6 className="mb-1 ">{item.name}</h6>
                                                {/* <span className="mb-0">11 JUL 8:10 PM</span> */}
                                            </div>
                                        </div>
))
 
}
                                    </div>
                                    
                                    
                                </div>
                            </Col>
                        </Row>
                    </Col> 
                </Row>
            </>
        )
    }

export default connect(mapStateToProps, mapDispatchToProps)(Index)
 
 const ButtonRight = styled.div`
 
 .right {
    position: absolute;
    right: 0px;
    width: 300px;
    border: 3px solid #73AD21;
    padding: 10px;
  }
  `
 const ScrollBar = styled.div`

#style-2::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}
.box{

    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    .force-overflow
}
{
	min-height: 430px;
}
.scrollbar
{
	margin-left: 30px;
	float: left;
	height: 380px;
	width: 910px;
 
	overflow-y: scroll;
	overflow-x: auto;
    overflow-x:auto;
	margin-bottom: 35px;
}


`












// user rfq me status ki kia zaroorat
//which font