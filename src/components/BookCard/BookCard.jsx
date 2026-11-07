import {Link} from 'react-router-dom';
import '@/scss/blocks/_book-card.scss';

const BookCard = (props) => {

  const {
    id,
    imgUrl,
    title,
    path,
  } = props.el;


  return (
    <Link
      className='book__item'
      to={path}
      state={id}
      aria-labelledby={`book-${id}-title`}
    >
      <img
        className='book__item-image'
        src={imgUrl}
        // Название уже в заголовке под картинкой — alt="", чтобы не читать его дважды
        alt=''
        width={540}
        height={191}
      />
      <h3 className='book__item-title' id={`book-${id}-title`}>
        {title}
      </h3>
    </Link>
  )
}

export default BookCard