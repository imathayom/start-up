import { headers } from 'next/headers';
import '/public/css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
export default function Home() {
  const headersList = headers();
  
  return (
      <>
      <div className="wrapper">
        <div id="main" className="main">
                <div className="home"> 
                  <div className="container">
                  <div className="row text-center">
                  <div className="col-md-12">
                    <div className="hero-img">
                      <Image className="img-fluid" width={0} height={0} sizes="100vw" src="/images/hero.png" alt="Hero" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="hero-content">
                      <h5>{headersList.get('host')}</h5>
                      <h1>Weave from HyvBangkok</h1>
                        
                      <p>💥🌈🎉🥰  Something Awesome is Coming Soon. 👈🍫🎖️</p>                       
                    </div>
                  </div>
                  <div className="col-md-12">
                <div className="client-list">
                  <ul>
                    <li><Image className="img-fluid" width={0} height={0} src="/images/krungthep.svg" alt="krungthep" /></li>
                    <li><Image className="img-fluid" width={0} height={0} src="/images/nodejs.svg" alt="nodejs" /></li>
                    <li><Image className="img-fluid" width={0} height={0} src="/images/react.svg" alt="react" /></li>
                    <li><Image className="img-fluid" width={0} height={0} src="/images/typescript.svg" alt="typescript" /></li>
                    <li><Image className="img-fluid" width={0} height={0} src="/images/ubuntu.svg" alt="ubuntu" /></li>
                  </ul>
                </div>
              </div>

                  </div>
                  </div>
                </div>
        </div>


             
    </div>
    </>
  )
}
