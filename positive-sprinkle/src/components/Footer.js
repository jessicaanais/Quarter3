import React from 'react';
import { Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <div>
      <footer>
              <Row style={{ backgroundColor: "#eff1f4"}}>
                <Col>
                  <h3 style={{fontSize: 23, paddingTop:'6px'}}> Created by <a href="https://www.linkedin.com/in/jessica-anais-duarte-cabrera-540099148">Jessica</a> 2017</h3>
                </Col>
            </Row>
        </footer>
      </div>
  )
}

export default Footer;
