import React from 'react'
import Header from './header'

class Banner extends React.Component {
  render() {
    return (
      <section id="banner">
        <h2>How Can We Serve You?</h2>
        <p>We serve individuals as well as families - learn how we can serve you</p>
        <ul class="actions special">
          <li><a href="#" class="button primary">Learn more</a></li>
        </ul>
      </section>
    )
  }
}

export default Banner;
