import '@/scss/blocks/_book-card.scss'; 

const BookCard = (props) => {

  const {
    imgUrl,
    title,
  } = props.el;
  

  return (
    <div className='book__item'>
      <img className='book__item-image' src={imgUrl} alt="" width={540} height={191} />
      <h3 className='book__item-title'>{title}</h3>
    </div>
  )
}

export default BookCard