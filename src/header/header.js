import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import AboutUs from '../features/about-us/about-us';
import ContactUs from '../features/contact-us/contact-us';
import PostList from '../features/post-list/post-list';

class Header extends Component{
showComponent(component){
    const container = document.getElementById('container');
    if(component === 'home'){
        ReactDOM.render(
            <PostList />,
            container
          );
    } else if(component === 'about-us'){
        ReactDOM.render(
            <AboutUs />,
            container
          );
    } else if (component === 'contact-us'){
        ReactDOM.render(
            <ContactUs />,
            container
          );
    }
}
componentDidMount() {
    this.showComponent('home');
}
render (){
    return (
<header className="py-5 text-gray-700 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span className="ml-3 text-xl">gyani</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900" onClick={() => this.showComponent('home')}>Home</a>
      <a className="mr-5 hover:text-gray-900">Most Popular</a>
      <a className="mr-5 hover:text-gray-900" onClick={() => this.showComponent('about-us')}>About Us</a>
      <a className="mr-5 hover:text-gray-900" onClick={() => this.showComponent('contact-us')}>Contact Us</a>
    </nav>
  </div>
</header>
    );
}
}



export default Header;