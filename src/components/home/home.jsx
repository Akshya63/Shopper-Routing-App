import { Link } from 'react-router-dom';
import './home.css';

export function Home() {
    return (
        <div className="row p-3">
            <div className="Jewelery col" >
                <div className='main-title'>
                  JEWELERY
                </div>
                <div>
                    <Link className='btn btn-light' to='jewelery'>Shop <span className='bi bi-arrow-right'></span></Link>
                </div>


            </div>

            <div className="electronics col" >
                <div className='main-title'>
                 ELECTRONICS
                </div>
                <div>
                    <Link className='btn btn-light' to='electronics'>Shop <span className='bi bi-arrow-right'></span></Link>
                </div>
                

            </div>
            <div className="men-fashion col">
            <div className='main-title'>
                 MEN FASHION
                </div>
                <div>
                    <Link className='btn btn-light' to='men'>Shop <span className='bi bi-arrow-right'></span></Link>
                </div>


            </div>
            <div className="women-fashion col">
            <div className='main-title'>
                 WOMEN FASHION
                </div>
                <div>
                    <Link className='btn btn-light' to='women'>Shop <span className='bi bi-arrow-right'></span></Link>
                </div>

            </div>
        </div>

    )
}