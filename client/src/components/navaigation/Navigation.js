import React from 'react';
//css
import './navigation.css';

function Navigation(props) {
  return (
    <>
      {props.contents.map((eachItems) => {
        const {
          text,
          icon,
          subNav,
          hasIcon,
          hasImage,
          img,
          hasSubNav,
          parentText,
        } = eachItems;

        if (!parentText) {
          let info = text;

          return (
            <div className='navbars-container'>
              {eachItems.multipleIcons ? (
                <section className='nav-items'>
                  <span className='nav-icons-container'>
                    <img src={eachItems.icon_1} alt='' />
                  </span>
                  <span className='nav-icons-text'>{text}</span>
                  <span className='nav-icons-container'>
                    <img src={eachItems.icon_2} alt='' />
                  </span>
                </section>
              ) : (
                <section className='nav-items'>
                  <span className='nav-icons-container'>
                    <img src={icon} alt='' />
                  </span>
                  <span className='nav-icons-text'>{text}</span>
                </section>
              )}
              <br></br>
              {hasSubNav ? (
                <div className='text-container'>
                  {props.contents.map((eachs) => {
                    const {
                      parentText,
                      icon,
                      subNav,
                      hasIcon,
                      hasImage,
                      img,
                      text,
                    } = eachs;
                    let a = parentText;
                    console.log(info, 'inf');
                    console.log(eachs.parentText, 'parentTex');
                    let pt = eachs.parentText;
                    let b = info;

                    if (eachItems.text === eachs.parentText) {
                      return (
                        <section className='nav-items'>
                          <span className='nav-icons-container'>
                            {eachs.hasImage ? (
                              <div className='direct-image-container'>
                                <img
                                  className='direct-img'
                                  src={eachs.img}
                                  alt=''
                                />
                              </div>
                            ) : (
                              <img src={icon} alt='' />
                            )}
                          </span>
                          <span className='nav-icons-text'>{text}</span>
                        </section>
                      );
                    } else {
                      return null;
                    }
                  })}
                </div>
              ) : null}
            </div>
          );
        }
      })}
    </>
  );
}

export default Navigation;
