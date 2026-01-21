import {Link, useNavigate} from 'react-router-dom';
import '@/scss/blocks/_notfound-page.scss';

const NotFoundPage = () => {
  const navigate = useNavigate()
  console.log(navigate)
  const goBack = () => {
    navigate(-1)
  }
  return (<section
      className="notfound"
      aria-labelledby='notFound-title'
    >
      <div className="notfound__container container">
        <div className="notfound__inner">
          <h2
            className="notfound__title h2"
            id='notFound-title'
          >Page Not Found
          </h2>
          <div className="notfound__inner__link">
            <Link
              to='/'
              onClick={goBack}
            >
              Go back
            </Link>
          </div>
        </div>
      </div>
    </section>);
};
export default NotFoundPage;
