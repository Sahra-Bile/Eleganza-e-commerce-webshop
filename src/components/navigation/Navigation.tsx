import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import{ReactComponent as CrownLogo} from '/Users/sahra/PROJEKT/e-commerce-shopp/src/assert/crown.svg'
import './navigation.styles.scss';


export const Navigation = ()=>{
  return(
  <Fragment>
  <header className='header-container'>
    <Link className='header-container__logo-container' to= '/'>
    <CrownLogo className='header-container__logo-container__logo'/>
    </Link>
    <ul className='header-container__nav-links'>
    <Link className='header-container__nav-links__item' to= '/shop'>
      Shop
    </Link>
    <Link className='header-container__nav-links__item' to= '/contact'>
      Contact
    </Link>
    <Link className='header-container__nav-links__item' to= '/sign-in'>
      Sign In
    </Link>
    </ul>

  </header>
  <Outlet/>
  </Fragment>)
}
