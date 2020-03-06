import React              from 'react';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import {Link}             from '@reach/router';
import * as Config        from '../config.json'
import '../lib/sass/main.scss';
import NavBar from './NavBar';
import Header from './Header';
import Slider from './Slider';

class Sizes extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.sizes && this.state.sizesLoaded === true) {
      return (
        <p>Error loading sizes. Try again later.</p>
      );
    } else if (!this.state.sizes) {
      return (
        <p>Loading sizes...</p>
      );
    } else if (this.state.sizes.length === 0) {
      return (
        <p>Sorry, no sizes are available</p>
      );
    } else {
      return (
        
        <div>
         <Header></Header>
          <NavBar></NavBar>
          <Slider></Slider> 
                  
         
          <div class="newspaper">
          <center><h2>T-Shirts</h2></center>
          A T-shirt is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.

Typically made of cotton textile in a stockinette or jersey knit, it has a distinctively pliable texture compared to shirts made of woven cloth. Some modern versions have a body made from a continuously knitted tube, produced on a circular knitting machine, such that the torso has no side seams. The manufacture of T-shirts has become highly automated and may include cutting fabric with a laser or a water jet.

The T-shirt evolved from undergarments used in the 19th century and, in the mid-20th century, transitioned from undergarment to general-use casual clothing.

A V-neck T-shirt has a V-shaped neckline, as opposed to the round neckline of the more common crew neck shirt (also called a U-neck). V-necks were introduced so that the neckline of the shirt does not show when worn beneath an outer shirt, as would that of a crew neck shirt.[1][2][3]
          </div>

          
          <h1>Brands</h1>
          <center>
          {this.state.sizes.map(size => (
              <li key={`size_${size._id}`}><Link to={`/size/${size._id}`}>{size.title}</Link></li>
            ))}
          </center>
         
          <center><p><Link to='/add-size'>Add a new Size</Link></p></center>



          <div class="pictures">
          <center><h2>Brands Fetured on this Website</h2></center>
          <center>
          <img src="https://webcomicms.net/sites/default/files/clipart/174415/adidas-logo-png-transparent-images-174415-2427632.png"></img>
          <img src="https://lh3.googleusercontent.com/proxy/DigFZ9Z45Ucc2PNROJXWI0_wzwXK3CbRuRFk6fvI07_1bEyNXw0YBaKPMCo0XvFbJd4fSXX8Z3xRbX3OyyrxG5cqp_vuMCT8LurRTFXQX3iH3pNiKCw_YfPQ76HX2EquPqYyQS5_oAlneyOmYlJ0Xie40_iA8NEmpr5oIUAEd3crTudLrf54gT6FDp3LQOI-pR1TI1rzyu6jAvqKvwES"></img>
          <img src="https://kw.arabiccoupon.com/sites/default/files/styles/icon_image/public/store_icon/boohoo-2019-logo-ar-and-en-arabiccoupon-400x400.jpg?itok=4SPcbqWy"></img>
          <img src="https://lh3.googleusercontent.com/proxy/rkCpc--NpuM7PHqG2Dei8iDysp-hX2kjKLzSQqM617TGB41tYDZgadCJC47nD2JCt9ii88IYpmNWxnHtxmLCFQE14D0j6IIYatbKrNbGcdeOduAv8w7zphfO"></img>
          <img src="https://s3.amazonaws.com/rapgenius/1354304111_Gucci-Logo1.gif"></img>
          <img src="https://image.goxip.com/KwCECTl84aQeRR0_mbEI0vlUhOQ=/fit-in/400x400/filters:format(jpeg):quality(80)/http:%2F%2Fcache.mrporter.com%2Fimages%2Fproducts%2F1143555%2F1143555_mrp_e2_l.jpg"></img>
          </center>
         
          
          </div>

        </div>

      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(Config.sizesAPI))
      .then (res  => res.json())
      .then (json => {
        this.setState({sizes       : json});
        this.setState({sizesLoaded : true});
      })
      .catch(err => {
        this.setState({sizesLoaded: true});
      });
  }

}

export default Sizes;

