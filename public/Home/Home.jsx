import React from 'react';
// import axios from 'axios';
// import querystring from 'querystring';
// import style from './style.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  location
} from 'react-router-dom'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {

    // }
    // this.addCity = this.addCity.bind(this);
  }

  // createNewTrip () {
  //   this.setState({
  //     currentCities: [],
  //     tags: '',
  //     currentEditCity: {
  //       events: []
  //     },
  //     cityMarkers: []
  //   })
  // }
  //
  //
  // componentDidMount() {
  //   axios.get('/api/tagList')
  //     .then(res => {
  //       console.log(res)
  //       this.setState({
  //         savedTags: res.data
  //     })
  //   })
  // }
  //


  render() {

    return (



      <html lang="en">
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <title>Creating a Simple Parallax Scrolling Website</title>
          <link rel="stylesheet" href="css/style.css"/>
          <script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
          <link href='http://fonts.googleapis.com/css?family=Wellfleet' rel='stylesheet' type='text/css'/>

          <link href='http://fonts.googleapis.com/css?family=Wellfleet' rel='stylesheet' type='text/css'/>
          <link href='http://fonts.googleapis.com/css?family=Arvo:400,700,400italic,700italic' rel='stylesheet' type='text/css'/>
          <link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'/>
          <link href='http://fonts.googleapis.com/css?family=Goudy+Bookletter+1911' rel='stylesheet' type='text/css'/>


          <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css"/>
          <link rel="stylesheet" href="assets/fonts/ionicons.min.css"/>
          <link rel="stylesheet" href="assets/css/Footer-Clean.css"/>
          <link rel="stylesheet" href="assets/css/styles.css"/>


        </head>
        <body>

          <header id="header">
            <div class="content">
              <div id="logo"><a href=""> ClearSmileDocsLogo </a></div>
              <nav id="nav">
                <ul>
                  <li><a href="#slide1" class="active" title="Next Section" >Home</a></li>
                  <li><a href="#slide2" title="Next Section">How it Works</a></li>
                  <li><a href="#slide3" title="Next Section">Find A Doctor</a></li>
                  <li><a href="#slide4" title="Next Section">Cost</a></li>
                  <li><a href="#slide5" title="Next Section">FAQ</a></li>
                  <li><a href="#slide5" title="Next Section">Contact Us</a></li>
                </ul>
              </nav>
            </div>
          </header>

          <div id="slide1">
            <div class="content">

              <h2>CLEAR</h2>
              <h1>SMILES</h1>
              <div id="divider"> </div>
              <h3>CLEAR SMILES DOCS </h3>
              <div id="ribbon"></div>
              <div id="new_year"> </div>
            </div>
          </div>
          <div id="slide2">
            <div class="content" >
              <div class="quotes_container">
                <h3 class="quotes">“TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTExtTextTextTextTextTextTExtTexTTextTextTextTextTextTextTxetTextTextTexTTextTextTextTextTextTxetTextTextTextTextText”</h3>
                <img src="img/tooth.png" align="left"/> <h4 class="author_name_gray">Text </h4>
              </div>
            </div>
          </div>
          <div id="slide3">
            <div class="content">
              <div class="quotes_container">
                <h3 class="quotes">“TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTExtTextTextTextTextTextTExtTexTTextTextTextTextTextTextTxetTextTextTexTTextTextTextTextTextTxetTextTextTextTextText” </h3>
                <img src="img/tooth.png" align="left"/> <h4 class="author_name_white">Text </h4>
              </div>
            </div>
          </div>
          <div id="slide4">
            <div class="content">
              <div class="quotes_container">
                <h3 class="quotes">“TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTExtTextTextTextTextTextTExtTexTTextTextTextTextTextTextTxetTextTextTexTTextTextTextTextTextTxetTextTextTextTextText” </h3>
                <img src="img/tooth.png" align="left"/> <h4 class="author_name_gray">Text </h4>
              </div>
            </div>
          </div>
          <div id="slide5">
            <div class="content">
              <div class="quotes_container">
                <div class="white-box" >





                  <div class="footer-clean">
                    <footer>
                      <div class="container">
                        <div class="row">
                          <div class="col-md-3 col-sm-4 item">
                            <h3>Services</h3>
                            <ul>
                              <li><a href="#">Web design</a></li>
                              <li><a href="#">Development</a></li>
                              <li><a href="#">Hosting</a></li>
                            </ul>
                          </div>
                          <div class="col-md-3 col-sm-4 item">
                            <h3>About</h3>
                            <ul>
                              <li><a href="#">Company</a></li>
                              <li><a href="#">Team</a></li>
                              <li><a href="#">Legacy</a></li>
                            </ul>
                          </div>
                          <div class="col-md-3 col-sm-4 item">
                            <h3>Careers</h3>
                            <ul>
                              <li><a href="#">Job openings</a></li>
                              <li><a href="#">Employee success</a></li>
                              <li><a href="#">Benefits</a></li>
                            </ul>
                          </div>
                          <div class="col-md-3 item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a>
                          <p class="copyright">Company Name © 2016</p>
                        </div>
                      </div>
                    </div>
                  </footer>
                </div>
                <script src="assets/js/jquery.min.js"></script>
                <script src="assets/bootstrap/js/bootstrap.min.js"></script>

              </div>
            </div>
          </div>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      </body>
    </html>

    )
  }
}




// <WebsiteName/>
//
// <InputBar changeCityMarkers={this.changeCityMarkers} addCityToParent={this.addCity} addTagsToParent={this.addTags}
//   saveNewTrips={this.saveNewTrips} currentCities={this.state.currentCities} changeCurrentEditCity={this.changeCurrentEditCity}
//   />
// <Route exact path={`/home/edit`} render={() => (
//     <EditPlanDisplay deleteCity={this.deleteCity} zoom={this.state.cityZoom} mapCenter={this.state.currentCityCenter} cityMarkers={this.state.cityMarkers} saveEvent={this.saveEvent}
//       createNewEvent={this.createNewEvent} savedTags={this.state.savedTags}
//       createNewTrip={this.createNewTrip} tagClicked={this.tagClicked} currentEditCity={this.state.currentEditCity}/>
//   )}/>
//   <Route exact path={`/home`} render={() => (
//       <ShowCityTrip zoom={this.state.worldZoom} mapCenter={this.state.worldCenter} currentCities={this.state.currentCities} tags={this.state.tags} cityMarkers={this.state.cityMarkers} savedTags={this.state.savedTags}
//         tagClicked={this.tagClicked} createNewTrip={this.createNewTrip}
//         />
//
//     )}/>
