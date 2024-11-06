const MenuItem_23 = ({ id, price, remote_img, title, category, descrip }) => {
  return (
    <article key={id} class='menu-item'>
      <img src={remote_img} alt='' class='photo' />
      <div class='item-info'>
        <header>
          <h4>{title}</h4>
          <h4 class='price'>{price}</h4>
        </header>
        <p class='item-text'>{descrip}</p>
      </div>
    </article>
  )
}

export default MenuItem_23
