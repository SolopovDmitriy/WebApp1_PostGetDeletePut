import React from 'react';
import {NavLink} from 'react-router-dom';
import './Home.css';
import axios from 'axios';
import LogoImg from "../../../images/appointment.svg"

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            navigationMaps: [] //инициализировать данными ответа сервера
        }
        this.uploadNavigationMaps = this.uploadNavigationMaps.bind(this);
    }
    uploadNavigationMaps() {
        axios({
            method:'get',
            url:'/navigationmaps',
            responseType:'json'
        }).then(response => {
            console.dir(response);
            this.setState({
                isLoaded:true,
                navigationMaps:response.data
            });
        }).catch(error => {
            this.setState({
                error:error
            });
            console.log(error);
        })
    }
    componentDidMount() {
        this.uploadNavigationMaps();
    }


    render() {
        const { error, isLoaded, navigationMaps } = this.state;
        if (error) {
            return (
                <div class="alert alert-danger" role="alert">
                    {error.message}
                </div>
            )
        } else if (!isLoaded) {
            return (
                <div class="alert alert-info" role="alert">
                    Данные загружаются...
                </div>
            )
        } else {
            return (
                <main>
                    <div className="home">
                        <h1 className="text-center">Main</h1>
                        <div className="Home-body">
                            <div className="NavigationMaps">{
                                navigationMaps.map((item, index)=>(
                                    <NavLink className="navbar-brand" to={item.href} key={index}>
                                        <div class="card" style={{width: '18rem'}}>
                                            <div class="card-body">

                                                <img src={item.image} alt="logo" className='navbar-brand_logo'/>

                                                <h5 class="card-title">{item.title}</h5>
                                            </div>
                                        </div>
                                    </NavLink>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                </main>
            )
        }
    }
}