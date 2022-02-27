import React from 'react'

export default function Header() {
  return (
    <header id="navbar" role="banner" className="navbar container-fluid navbar-default">
<div className="container">
  
    <div className="navbar-header">
      
      
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
          </div>

          <div className="navbar-collapse collapse" id="navbar-collapse">
        <nav role="navigation">
                      <ul className="menu nav navbar-nav"><li className="first leaf active"><a href="/soc/" className="active">Home</a></li>
<li className="leaf"><a href="/soc/node/1">Events</a></li>
<li className="leaf"><a href="/soc/node/2">Clubs</a></li>
<li className="leaf"><a href="/soc/node/3">Houses</a></li>
<li className="leaf"><a href="/soc/node/4">Core Team</a></li>
<li className="leaf"><a href="/soc/node/5">Ragging Prevention Team</a></li>
<li className="leaf"><a href="https://www.srmist.edu.in/soc/student-counseling" title="">Student Counselling</a></li>
<li className="leaf"><a href="/soc/discipline">Discipline</a></li>
<li className="leaf"><a href="https://www.srmist.edu.in/soc/gallery/shuru" title="">Gallery</a></li>
<li className="last leaf"><a href="/soc/node/8">Contact</a></li>
</ul>                                      </nav>
      </div>
    	</div>

</header>
  );
}
