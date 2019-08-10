import React from 'react';

class Header extends React.Component {
    render() {
      return (
        <div>
        <div id="header" class="alt">
          <h1 id="logo"><a href="index.html">Califa Consulting</a></h1>
          <p>Wholistic & Education Services</p>
          <nav id="nav">
            <ul>
              <li><a href="index.html">About</a></li>
              <li>
                <a href="#">Services</a>
                <ul>
                  <li><a href="left-sidebar.html"></a></li>
                  <li><a href="right-sidebar.html"></a></li>
                  <li><a href="no-sidebar.html">Contact Us</a></li>
                  <li>
                    <a href="#">Submenu</a>
                    <ul>
                      <li><a href="#">Option 1</a></li>
                      <li><a href="#">Option 2</a></li>
                      <li><a href="#">Option 3</a></li>
                      <li><a href="#">Option 4</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="elements.html">Our Team</a></li>
              <li><a href="#" class="button alt">Book Us Today</a></li>
            </ul>
          </nav>
        </div>
        </div>
      )
    }
}


export default Header;
