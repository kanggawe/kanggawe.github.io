import { lazy, Suspense } from 'react'
import Slider from '../components/Slider'

// Lazy load Units component karena ukurannya besar
const Units = lazy(() => import('../components/Units'))

const Home = () => {
  return (
    <div>
      <Slider/>
      <Suspense fallback={
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      }>
        <Units/>
      </Suspense>
    </div>
  );
}
export default Home;