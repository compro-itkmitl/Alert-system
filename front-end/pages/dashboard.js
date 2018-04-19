import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import swal from 'sweetalert'
import 
{ 
    Button, Collapse, CardImg, Card, 
    CardBody, CardText,CardTitle, CardSubtitle, Table,
    Nav, Navbar, NavItem, NavLink, NavbarBrand, ListGroup,
    ListGroupItem
} 
from 'reactstrap'
import * as firebase from 'firebase'
export default class DashBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  users: '' };
    }
    componentDidMount() {
        const config = {
            apiKey: "AIzaSyBIH4uOJOrlYI5KwEDzQlITD0JoRxHlqxs",
            authDomain: "compro-1cb91.firebaseapp.com",
            databaseURL: "https://compro-1cb91.firebaseio.com",
            projectId: "compro-1cb91",
            storageBucket: "compro-1cb91.appspot.com",
            messagingSenderId: "401428640836"
        };
        firebase.initializeApp(config);
        firebase.database().ref("users/").on("value", (snapshot) => {
            const users = snapshot.val()
            if(users != null) {
                this.setState({
                    users: users
                })
            }
        })
    }
    render() {
        let logOut = () => {
            firebase.auth().signOut().then(function() {
                // Sign-out successful.
                location.reload();
                location.href = '/';
            });
        }
      return (
        <div>
            <Head>
                <title>ALERT SYSTEM || DashBoard</title>
                <script type="text/javascript" src="https://www.gstatic.com/firebasejs/4.12.1/firebase.js"></script>
                <link rel="stylesheet" href="static/css/bootstrap/dist/css/bootstrap.min.css" />
                <script type="text/javascript" src="static/js/jquery/dist/jquery.min.js"></script>
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.4.1/antd.min.js"></script>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.4.1/antd.min.css"/>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js"></script>
            </Head>
            <div className="container-fluid" style={{backgroundColor:'#fff'}}>
                    <nav className="navbar navbar-default">
                        <div className="container">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="/">
                                    <img height="60" alt="logo" src="/static/image/logo/navbar_logo.png" />
                                </a>
                            </div>
                            <ul style={{position:'relative', top:28,float:'left', fontWeight:'bold',right:66}}>
                                <li><a onClick={logOut}>log Out</a></li>
                            </ul>
                        </div>
                    </nav>
            </div>
           <div className="container">
                <div className="row">
                    <div className="col-md-2 card-ui">
                        <img src="static/image/logo/alertsystem.jpg" class="profileImage"/>
                        <li style={{fontSize:15, fontWeight:'bold'}}><a>admin</a></li>
                    </div>
                        <div className="mainDashBoard col-md-8" style={{marginTop:50,marginBottom:50}}>
                            <div className="row">
                            <img src="static/image/arduino-uno.png" height="90" style={{marginLeft:30,marginRight:50, marginBottom:30,float:'left'}}/>
                            <h4 className="page-header" style={{marginTop:34,textTransform:'uppercase',fontWeight:'bold', fontFamily: 'sukhumvit set, sans-serif'}}>
                                my arudino info
                            </h4>
                            <Table>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                </tbody>
                            </Table>
                            </div>
                        </div>
                </div>
           </div>

            <style>{`
                body {
                    background-color:#f2f5f7;
                }
                .profileImage {
                    width: 100px;
                    height: 100px;
                    margin: 50px auto;
                    display: block;
                    border-radius: 100%;
                    background-color: transparent;
                    overflow: hidden;
                    object-fit: cover;
                    object-position: center top;
                }
                .mainDashBoard {
                    height: auto;
                    background-color: #fff;
                    padding: 60px;
                    padding-top: 30px;
                    padding-bottom: 30px;
                    box-shadow: 0px 0px 6px #ced4da;
                    border-radius: 10px;
                    float: left;
                }
                .header-dashboard{
                    margin-top: 50px;
                    float: left;
                    height: 160px;
                    background-color: #fff;
                    box-shadow: 0px 0px 6px #ced4da;
                    border-radius: 10px;
                    padding:15px;
                }
                .card-ui{
                    float: left;
                    height: 260px;
                    background-color: #fff;
                    margin-top: 50px;
                    margin-left: 30px;
                    margin-right: 80px;
                    box-shadow: 0px 0px 6px #ced4da;
                    border-radius: 10px;
                }
                li {
                    list-style: none;
                    text-align: center;
                    text-transform: capitalize;
                    line-height: 32px;
                    position: relative;
                    top: -20px;
                }
                a, a:hover {
                    text-decoration: none !important;
                    color: #000;
                }
            `}</style>
        </div>
      );
    }
  }
