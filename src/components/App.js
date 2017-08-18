// @flow
import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import MenuContainer from './menu/MenuContainer';
import Header from './Header/Header';

require('../style/bootstrap.min.scss');
require('../style/bootstrap-theme.min.scss');
require('../style/main.scss');

export const App = ({ menu, children }: {menu: {}, children: {} }) => {
  let contentCol :number = menu.MenuVisible ? 9 : 11;
  let menuCol: number = menu.MenuVisible ? 3 : 1;
  const menuSlide: string = 'menu-slide';
  const opened: string = menu.MenuVisible ? 'menu-slide-open' : '';
  const clases: string = `${menuSlide} ${opened}`;
  return (
    <Grid fluid>
      <Row id="wrapper">
        <Header />
        <Col
          sm={menuCol}
          xs={10}
          className={clases}
        >
          <MenuContainer />
        </Col>
        <Col
          smOffset={menuCol}
          sm={contentCol}
          className="content-transition"
        >
          <div>
            {children}
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

App.propTypes = {
  children: PropTypes.node.isRequired,
  menu: PropTypes.object.isRequired,
};

const mapStateToProps = state => (
  {
    menu: state.menu,
  }
);

export default connect(
  mapStateToProps
)(App);
