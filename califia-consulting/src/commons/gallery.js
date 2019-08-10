import React from 'react';
import Header from './header';

class Gallery extends React.Component {
  render() {
      return (
        <section id="two" class="wrapper style1 special">
  				<div class="container">
  					<header class="major">
  						<h2>Photos</h2>
  						<p>Holding Space | Creating Memories | Supporting Community</p>
  					</header>
  				</div>
  				<section class="carousel">
  					<article>
  						<a href="images/fulls/01.jpg" class="image"><img src="images/thumbs/01.jpg" alt="" title="Lorem ipsum dolor sit amet" /></a>
  					</article>
  					<article>
  						<a href="images/fulls/02.jpg" class="image"><img src="images/thumbs/02.jpg" alt="" title="Lorem ipsum dolor sit amet" /></a>
  					</article>
  					<article>
  						<a href="images/fulls/03.jpg" class="image"><img src="images/thumbs/03.jpg" alt="" title="Lorem ipsum dolor sit amet" /></a>
  					</article>
  					<article>
  						<a href="images/fulls/04.jpg" class="image"><img src="images/thumbs/04.jpg" alt="" title="Lorem ipsum dolor sit amet" /></a>
  					</article>
  					<article>
  						<a href="images/fulls/05.jpg" class="image"><img src="images/thumbs/05.jpg" alt="" title="Lorem ipsum dolor sit amet" /></a>
  					</article>
  					<article>
  						<a href="images/fulls/01.jpg" class="image"><img src="images/thumbs/01.jpg" alt="" title="Lorem ipsum dolor sit amet" /></a>
  					</article>
  					<article>
  						<a href="images/fulls/02.jpg" class="image"><img src="images/thumbs/02.jpg" alt="" title="Lorem ipsum dolor sit amet" /></a>
  					</article>
  					<article>
  						<a href="images/fulls/03.jpg" class="image"><img src="images/thumbs/03.jpg" alt="" title="Lorem ipsum dolor sit amet" /></a>
  					</article>
  					<article>
  						<a href="images/fulls/04.jpg" class="image"><img src="images/thumbs/04.jpg" alt="" title="Lorem ipsum dolor sit amet" /></a>
  					</article>
  					<article>
  						<a href="images/fulls/05.jpg" class="image"><img src="images/thumbs/05.jpg" alt="" title="Lorem ipsum dolor sit amet" /></a>
  					</article>
  				</section>
  				<div class="container">
  					<ul class="actions special">
  						<li><a href="#" class="button alt">Full Gallery</a></li>
  					</ul>
  				</div>
  			</section>
      )
    }
}

export default Gallery;
