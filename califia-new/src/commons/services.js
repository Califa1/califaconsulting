import React from 'react';
import Header from './header';

class Services extends React.Component {
  render() {
    return (
      <section id="three" class="wrapper style1 special">
        <div class="container">
          <header class="major">
            <h2>Services</h2>
            <p>Curriculum | Workshops | Trainings | Consultations</p>
          </header>
          <div class="icon-grid">
            <div class="row gtr-uniform gtr-150">
              <section class="col-3 col-6-large col-12-small">
                <i class="icon fa-briefcase"></i>
                <h3>Curriculum</h3>
                <p>Ante et vulputate et volutpat, eros pede semper est, vitae luctus metus libero eu augue morbi purus.</p>
              </section>
              <section class="col-3 col-6-large col-12-small">
                <i class="icon fa-car"></i>
                <h3>Trainings</h3>
                <p>Ante et vulputate et volutpat, eros pede semper est, vitae luctus metus libero eu augue morbi purus.</p>
              </section>
              <section class="col-3 col-6-large col-12-small">
                <i class="icon fa-bitbucket"></i>
                <h3>Wholistic Healing</h3>
                <p>Ante et vulputate et volutpat, eros pede semper est, vitae luctus metus libero eu augue morbi purus.</p>
              </section>
              <section class="col-3 col-6-large col-12-small">
                <i class="icon fa-university"></i>
                <h3>Workshops</h3>
                <p>Ante et vulputate et volutpat, eros pede semper est, vitae luctus metus libero eu augue morbi purus.</p>
              </section>
              <section class="col-3 col-6-large col-12-small">
                <i class="icon fa-android"></i>
                <h3>Speaking Engagements</h3>
                <p>Ante et vulputate et volutpat, eros pede semper est, vitae luctus metus libero eu augue morbi purus.</p>
              </section>
              <section class="col-3 col-6-large col-12-small">
                <i class="icon fa-anchor"></i>
                <h3>Consultations</h3>
                <p>Ante et vulputate et volutpat, eros pede semper est, vitae luctus metus libero eu augue morbi purus.</p>
              </section>
            </div>
          </div>
        </div>
      </section>

    )
  }
}

export default Services;
