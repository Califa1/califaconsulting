import React from 'react';
import Header from './header';

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
				<div class="container">
					<div class="row gtr-200 gtr-uniform">
						<section class="col-4 col-12-medium col-12-small">
							<header class="major">
								<h3>About</h3>
							</header>
							<p>Share more info in this section!</p>
							<ul class="actions">
								<li><a href="#" class="button alt">Learn more</a></li>
							</ul>
						</section>
						<section class="col-4 col-6-medium col-12-small">
							<header class="major">
								<h3>Upcoming Events</h3>
							</header>
							<ul class="updates">
								<li>
									<p>
										<a href="#">Share info here about upcoming workshop.</a>
									</p>
								</li>
								<li>
									<p>
										<a href="#">Share info here about upcoming retreats, healing circles, etc.</a>
									</p>
								</li>
							</ul>
						</section>
						<section class="col-4 col-6-medium col-12-small">
							<header class="major">
								<h3>Contact</h3>
							</header>
							<ul class="labeled-icons">
								<li>
									<h4 class="icon fa-envelope"><span class="label">Email</span></h4>
									<a href="#">califaconsulting@gmail.com</a>
								</li>
								<li>
									<h4 class="icon fa-phone"><span class="label">Phone</span></h4>
									(510) 929-1693
								</li>
								<li>
									<h4 class="icon fa-home"><span class="label">Address</span></h4>
									2015 E25th st, #4<br />Oakland, CA 94606
								</li>
								<li>
									<h4 class="icon fa-twitter"><span class="label">Twitter</span></h4>
									<a href="#">twitter.com/untitled</a>
								</li>
								<li>
									<h4 class="icon fa-facebook"><span class="label">Facebook</span></h4>
									<a href="#">facebook.com/untitled</a>
								</li>
							</ul>
						</section>
					</div>
				</div>
				<div class="copyright">
					&copy; Califa Consulting. All rights reserved.
				</div>
			</div>
    )
  }
}

export default Footer;
