import { useState, useEffect } from 'react'
import MenuItem_23 from '../../components/mid_xx/MenuItem_xx'
import { sdk } from '../../sdk/SupaSDK'

const P3Page_23 = () => {
  const [blogs, setBlogs] = useState([])

  const fetchBlogsFromNodeServer = async () => {
    try {
      let { data: d, error } = await sdk.from('menu_23').select('*')
      console.log('db source:', d)
      setBlogs(d)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchBlogsFromNodeServer()
  }, [])

  return (
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

export default P3Page_23
