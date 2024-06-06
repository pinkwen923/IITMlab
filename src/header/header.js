

import { Link, Outlet } from 'react-router-dom';


import './header.css';

function Header() {
  return (
    <div>
      
      <div class="nav navbar-default navbar-fixed-top ">
        <div class="container-fluid ">
          <div>


          </div>
          <header class="d-flex flex-wrap justify-content-center py-3  ">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none ">
              {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
              <span class="fs-2"><img class="iitmlogo" src={require("../content/img/iitmlab1.png")} ></img></span>
            </a>

            <ul class="drop-down-menu nav ">
              <li class="nav-item"><a href="/" class="nav-link active" aria-current="page">首頁</a></li>
              <li class=" nav-item"><Link to="/lab" class="nav-link">介紹</Link>
                <ul>
                  <li><Link to="/lab">實驗室</Link>
                  </li>

                  <li><Link to="/teacher">指導老師</Link>
                  </li>

                </ul>
              </li>

              <li class="nav-item"><Link to="/thesis" class="nav-link">發表</Link>
                <ul>
                <li><Link to="/thesis">論文</Link>
                  </li>
                  <li><Link to="/patent">專利</Link>
                  </li>

                  <li><Link to="/popularscience">科普活動</Link>
                  </li>
                  <li><Link to="/plan">計畫</Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item"><Link to="/compete" class="nav-link">專題/競賽</Link>
               
              </li>
              <li class="nav-item"><Link to="/activity" class="nav-link">活動</Link>
   
              </li>
              <li class="nav-item"><a href="" class="nav-link">計畫成果</a>
                <ul>
                <li><a href="/Cubiio">Cubbio酷斃了</a>
                  </li>
                  <li><a href="http://140.133.74.248:5173/">碳為觀止</a>
                  </li>


                </ul>
              </li>
            </ul>
          </header>
        </div>
      </div>
    </div>

  );
}

export default Header;
