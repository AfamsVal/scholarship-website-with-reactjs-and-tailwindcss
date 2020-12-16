import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from './NotFound'
import Landing from '../pages/Landing'
import Navbar from '../components/Navbar'
import ContactUs from '../pages/ContactUs'
import Footer from '../components/Footer'
import News from '../pages/News'
import AboutUs from '../pages/AboutUs'

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/contact-us' component={ContactUs} />
          <Route exact path='/about-us' component={AboutUs} />
          <Route exact path='/news' component={News} />
          <Route exact path='*' component={NotFound} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  )
}

export default Routes
