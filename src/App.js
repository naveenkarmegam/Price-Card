
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <div className="box my-5 py-5">
      <div className='heading text-center'>
        <h1>Price Cards</h1>
      </div>

      <div className="row justify-content-center align-items-center my-5">

        <div className="col-lg-4 col-md-6">
          <div className="card">
              <div className="card-head">
                <span>FREE</span>
                <h1>&#x24;0/month</h1>
              </div>
              <div className="card-body">
              <ul>
                  <li><span>&#10003;</span>Single User</li>
                  <li><span>&#10003;</span>50GB Storage</li>
                  <li><span>&#10003;</span>Unlimited Public Projects</li>
                  <li><span>&#10003;</span>Community Access</li>
                  <li className='wrong'><span>&#9747;</span>Unlimited Private Projects</li>
                  <li className='wrong'><span>&#9747;</span>Dedicated Phone Support</li>
                  <li className='wrong'><span>&#9747;</span>Free Subdomain</li>
                  <li className='wrong'><span>&#9747;</span>Monthly Status Reports</li>
                </ul>
                <div className="button">
                  <button>BUTTON</button>
                </div>

              </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card">
              <div className="card-head">
                <span>PLUS</span>
                <h1>&#x24;9/month</h1>
              </div>
              <div className="card-body">
              <ul>
                  <li><span>&#10003;</span>5 User</li>
                  <li><span>&#10003;</span>50GB Storage</li>
                  <li><span>&#10003;</span>Unlimited Public Projects</li>
                  <li><span>&#10003;</span>Community Access</li>
                  <li><span>&#10003;</span>Unlimited Private Projects</li>
                  <li><span>&#10003;</span>Dedicated Phone Support</li>
                  <li><span>&#10003;</span>Free Subdomain</li>
                  <li className='wrong'><span>&#9747;</span>Monthly Status Reports</li>
                </ul>
                <div className="button">
                  <button>BUTTON</button>
                </div>

              </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card">
              <div className="card-head">
                <span>PRO</span>
                <h1>&#x24;49/month</h1>
              </div>
              <div className="card-body">
              <ul>
                  <li><span>&#10003;</span>Unlimited User</li>
                  <li><span>&#10003;</span>50GB Storage</li>
                  <li><span>&#10003;</span>Unlimited Public Projects</li>
                  <li><span>&#10003;</span>Community Access</li>
                  <li><span>&#10003;</span>Unlimited Private Projects</li>
                  <li><span>&#10003;</span>Dedicated Phone Support</li>
                  <li><span>&#10003;</span>Free Subdomain</li>
                  <li><span>&#10003;</span>Monthly Status Reports</li>
                </ul>
                <div className="button">
                  <button>BUTTON</button>
                </div>

              </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}

export default App;
