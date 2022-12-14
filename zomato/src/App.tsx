import './App.css';

const App = () => {
  return (
    <>
      <header>
        <div className="image-container">
          <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" className="high-res-image" alt="" role="presentation" />
        </div>
        <div className='top-navbar'>
          <div className='mobile-menu-btn'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className='get-app'>
            <i className="sc-rbbb40-1 iFnyeo sc-cmjSyW btJfbw" color="#FFFFFF"><svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="10" height="10" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 gvsUip"><title>download-app</title><path d="M18.5793 9.18939H16.5865H16.3199C15.7307 9.18939 15.2529 9.6672 15.2529 10.2583V10.3742C15.2529 10.9659 15.7307 11.444 16.3207 11.444H18.3156H18.5793C19.1696 11.444 19.6488 10.9639 19.6488 10.3742L19.6477 10.2569C19.6488 9.6672 19.1696 9.18939 18.5793 9.18939Z"></path><path d="M18.5804 6.52262H18.1097V1.35122C18.1097 0.607964 17.5017 0 16.7582 0H7.84167C7.09841 0 6.49045 0.608249 6.49045 1.35122V5.06151C4.69196 6.07821 2.83696 7.14029 2.83296 7.14286C1.82597 7.5573 0.350586 8.89453 0.350586 12.0522C0.350586 12.3342 0.369139 12.5945 0.395113 12.846C0.40339 12.9197 0.412524 12.9904 0.422514 13.0615C0.448488 13.2462 0.481027 13.4229 0.519845 13.5907C0.533831 13.6506 0.544678 13.7131 0.559805 13.7705C0.612039 13.9646 0.67255 14.1467 0.740482 14.32C0.774733 14.4059 0.811839 14.4841 0.84923 14.5646C0.88919 14.6494 0.929436 14.7327 0.972535 14.8106C1.02249 14.9045 1.07244 14.995 1.12724 15.0809C1.14037 15.1009 1.15464 15.1192 1.16805 15.1394C2.46847 17.1052 4.8675 17.114 4.8675 17.114H6.49045V18.6494C6.49045 19.3918 7.09841 19.9997 7.84167 19.9997H16.7579C17.5014 19.9997 18.1094 19.3915 18.1094 18.6494V16.7767H18.3155V16.7755H18.5784C19.1695 16.7755 19.6487 16.2974 19.6476 15.7063L19.6487 15.5898C19.6476 14.9996 19.1695 14.5229 18.5792 14.5229H18.3155H16.5861H16.3195C15.7292 14.5229 15.2525 15.0007 15.2525 15.5907V15.7091C15.2525 16.2977 15.7304 16.7775 16.3203 16.7775H17.1692V17.5008H7.43036V7.79877C7.91959 7.48851 8.37256 7.18995 8.63088 6.98987C9.93957 5.97774 11.1818 5.17169 11.3499 4.4407C11.5688 3.49222 10.8407 2.69302 9.57765 3.34922C9.17976 3.55587 8.36315 4.00885 7.43036 4.53261V2.14129L17.1692 2.14271V6.52205H16.5861V6.52319H16.3209C15.7304 6.52319 15.2511 7.001 15.2511 7.59269V7.70858C15.2511 8.29999 15.7303 8.77665 16.3195 8.77665H16.5846H18.3141H18.5798C19.1695 8.77665 19.6476 8.29884 19.6476 7.70858V7.58955C19.6487 7.00186 19.1709 6.52262 18.5804 6.52262ZM12.2986 17.9752C12.6731 17.9752 12.9751 18.2774 12.9751 18.6511C12.9751 19.0255 12.6728 19.3267 12.2986 19.3267C11.9256 19.3267 11.6242 19.0247 11.6242 18.6511C11.6247 18.2786 11.927 17.9752 12.2986 17.9752ZM13.7266 1.30098H10.8735C10.7839 1.30098 10.7097 1.2282 10.7097 1.13829C10.7097 1.04695 10.7839 0.974169 10.8735 0.974169H13.7266C13.8163 0.974169 13.8893 1.04667 13.8893 1.13829C13.8893 1.22792 13.8163 1.30098 13.7266 1.30098Z"></path><path d="M18.5788 11.8561H18.3151H16.3193C15.7302 11.8561 15.251 12.3353 15.251 12.9253V13.0423C15.251 13.6329 15.7291 14.1107 16.3193 14.1107H16.5845H18.3139H18.5782C19.1693 14.1107 19.646 13.6329 19.6474 13.0423V12.9253C19.6472 12.3353 19.1705 11.8561 18.5788 11.8561Z"></path></svg></i>
            Get the App
          </div>
          <nav>
            <ul>
              <li><a href="/investorRelations">Investor Relations</a></li>
              <li><a href="/addRestaurent">Add Restaurent</a></li>
              <li><a href='/Login'>Log in</a></li>
              <li><a href="/signup">Sign up</a></li>
            </ul>
          </nav>
        </div>


        <div className='lower-navbar'>
          <img
            width={300}
            height={60}
            src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" className="high-res-image" alt="" role="presentation"></img>
          <h1 className="">Discover the best food &amp; drinks inSiyana
          </h1>
          <div className='input-box'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#828282" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 iwHbVQ"><title>Search</title><path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path></svg>
            <input type="text" placeholder='Search for restaurent cusins and dish' />
          </div>
        </div>
      </header>
      <section>

        <div className='card'>
          <div className='image-container'>
            <img src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" />
          </div>
          <p className='title'>Order Online</p>
          <p className="desc">Stay home and order to your doorstep</p>
        </div>
        <div>

        </div>

      </section>
      <div className='box-wrapper'>
        <div className='box'>
          <div className='box1'>
            <img src="https://b.zmtcdn.com/data/o2_assets/a500ffc2ab483bc6a550aa635f4e55531648107832.png" alt="" width={250} />
          </div>
          <div className='box2'>
            <h2>Get the Zomato app</h2>
            <p>We will send you a link, open it on your phone to download the app</p>

            <input type="radio" /><label>Email</label>
            <input type="radio" /> <label>Phone</label>
            <div className='input'>
              <input type="text" placeholder="email" />
              <button>Share</button>
            </div>
            <p className='info'>Download app from</p>
            <img alt="image" src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" loading="lazy" />
            <img alt="image" src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" loading="lazy" ></img>
          </div>
        </div>
      </div>

      <footer>
        <div className='top-footer'>
          <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="" />
          <div className='select-btn-group'>
            <div className='select-btn'>
              <span></span>
              <p>India</p>
              <span><svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="15" height="15" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 jKmKoK"><title>chevron-down</title><path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path></svg></span>
            </div>
            <div className='select-btn'>
              <span></span>
              <p>English</p>
              <span><svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="15" height="15" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 jKmKoK"><title>chevron-down</title><path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path></svg></span>
            </div>
          </div>
        </div>
        <div className='middle-footer'>
          <div className='list'>
            <h6>ABOUT ZOMATO</h6>
            <p>Who We Are</p>
            <p>Blog</p>
            <p>Work With Us</p>
            <p>Investor Relations</p>
            <p>Report Fraud</p>
            <p>Contact Us</p>
          </div>
          <div className='list'>
            <h6>ZOMAVERSE</h6>
            <p>Zomato</p>
            <p>Feeding India</p>
            <p>Hyperpure</p>
            <p>Zomaland</p>
          </div>
          <div className='list'>
            <h6>FOR RESTAURANTS</h6>
            <p>Partner With Us</p>
            <p>Apps For You</p>
            <h6>FOR ENTERPRISES</h6>
            <p>Zomato For Work</p>
           </div>
           <div className='list'>
            <h6>LEARN MORE</h6>
            <p>Privacy</p>
            <p>Security</p>
            <h6>Terms</h6>
            <p>Sitemap</p>
           </div>
           <div className='list'>
            <h6>SOCIAL LINKS</h6>
            <p>Facebook</p>
            <p>Instagram</p>
            <h6>Twitter</h6>
           </div>
          
        </div>
        <hr/>
        <div className='bottom-footer'>
          <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2022 ?? Zomato??? Ltd. All rights reserved</p>
        </div>
      </footer>
    </>
  )
}

export default App
