import React from 'react';
import { Row, Col, Button } from 'antd';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Favourite Languages</h2>
              <div>
                <a target="_blank " href="https://www.haskell.org/">
                  Haskell
                </a>
              </div>
              <div>
                  <a target="_blank " href="https://www.javascript.com/">
                  Javascript
                </a>
              </div>
              <div>
                <a target="_blank " href="https://www.python.org/">
                  Python
                </a>
              </div>
              <div>
                <a target="_blank " href="https://golang.org/">
                  Go
                </a>
              </div>
              <div>
                <a target="_blank" href="https://www.rust-lang.org/">
                  Rust
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Projects Involved</h2>
              <div>
                <a href="https://merchi.co/">Merchi.co</a>
                <span> - </span>
                <span>Flask, Sqlalchemy, JQuery</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="https://www.dimeo.com.au/">Dimeo</a>
                <span> - </span>
                <span>Raspberry Pi, Django</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="https://www.meerqat.com.au/">Meerqat</a>
                <span> - </span>
                <span>Meteorjs, React, Django, CSS</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="https://www.commoncode.io">Commoncode Website</a>
                <span> - </span>
                <span>Django, CSS</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="https://www.ch2.net.au/">CH2 Direct</a>
                <span> - </span>
                <span>PHP</span>
              </div>
              <div>
                  <a target="_blank" rel="noopener" href="http://agrinous.com/">Angrinous</a>
                <span> - </span>
                <span>Django, PHP, Android, React</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="https://lexer.io/">Lexer social demographics analysis</a>
                <span> - </span>
                <span>Python, scikit-learn</span>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Favourite readings</h2>
              <div>
                <a href="http://csapp.cs.cmu.edu/" target="_blank">
                  Computer Systems: A Programmer's Perspective
                </a>
              </div>
              <div>
                <a href="https://www.amazon.com/IA-64-Linux-Kernel-Design-Implementation/dp/0130610143" target="_blank">
                  Linux Kernel: Design and Implementations
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="http://haskellbook.com/">
                  Haskell First Pricinple
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="https://mitpress.mit.edu/sites/default/files/sicp/index.html">
                  Structure and Interpretation of Computer Programs
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="https://github.com/xianlubird/mydocker" >
                  How to write yourself a Docker (Chinese)
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>
                People I used to work with
              </h2>
              <div>
                  <a target="_blank" rel="noopener" href="https://dcollins.info/">Daniel Collins</a>
                <span> - </span>
                <span>My mentor and best friend</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="https://www.rmit.edu.au/contact/staff-contacts/academic-staff/z/zhang-associate-professor-jenny">Jenny Zhang</a>
                <span> - </span>
                <span>My previous supervisor</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="http://sebastiankey.com/">Sebastiain Key</a>
                <span> - </span>
                <span>Colleague in Common Code</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col sm={24}>
          <span
            style={{
              lineHeight: '16px',
              paddingRight: 12,
              marginRight: 20,
            }}
        >
            Copyright © MIT licence
          </span>
        </Col>
      </Row>
    </footer>
  );
}


export default Footer;
