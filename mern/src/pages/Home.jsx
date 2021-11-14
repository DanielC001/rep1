import { Link } from 'react-router-dom';
//import Layout from '../layouts/Layout';
function Home() {
    return (
        <div>
            <Link to='/page1'>
                <div>
                    <h1>Home</h1>
                </div>
            </Link>
        </div >

    );
}
export default Home;