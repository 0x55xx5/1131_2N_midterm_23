import { useState, useEffect } from 'react'
import MenuItem_23 from '../../components/mid_xx/MenuItem_xx'

let api_url = `http://localhost:3000/api/menu_23`

const P2Page_23 = () => {
  const [blogs, setBlogs] = useState([])

  const fetchBlogsFromNodeServer = async () => {
    try {
      const response = await fetch(api_url)
      const data = await response.json()
      console.log('menu data', data)
      setBlogs(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchBlogsFromNodeServer()
  }, [])

  return (
    /* <section className='blogs'>
      <div className='section-title'>
        <h2> Blogs From Node Server </h2>
        <h3> Hsingtai Chung, 123456789</h3>
      </div>
      <div className='blogs-center'>
        {blogs.map((item) => {
          const { id, img, remote_url, title, category, descrip } = item
          return (
            <article key={id} className='blog'>
              <img src={img} alt='Coffee photo' className='img blog-img' />
              <div className='blog-content'>
                <span>
                  {' '}
                  {category} <i className='fa-solid fa-mug-saucer'></i>
                </span>
                <h3>{title}</h3>
                <p>{descrip}</p>
                <a href='#'>read more</a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
*/
    <>
      <section class='menu-demo'>
        <div class='btn-container'></div>
        <div class='section-center'>
          <section class='menu'>
            <div class='title'>
              <h2>YU ZHONG XIAN - 912410023</h2>
              <div class='underline'></div>
            </div>
            <div class='btn-container'>
              <button type='button' class='filter-btn' data-id='all'>
                all
              </button>
              <button type='button' class='filter-btn' data-id='breakfast'>
                breakfast
              </button>
              <button type='button' class='filter-btn' data-id='lunch'>
                lunch
              </button>
              <button type='button' class='filter-btn' data-id='dessert'>
                dessert
              </button>
              <button type='button' class='filter-btn' data-id='shakes'>
                shakes
              </button>
            </div>
            <div class='section-center'>
              {blogs?.map((b) => {
                const { id, title, price, img, remote_img, descrip } = b
                return (
                  <MenuItem_23
                    key={id}
                    title={title}
                    price={price}
                    img={img}
                    remote_img={remote_img}
                    descrip={descrip}
                  />
                )
              })}
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default P2Page_23
