import styles from '/styles/post2.module.scss'
import { Nav, Navbar, Container, Button, InputGroup, FormControl} from 'react-bootstrap'
import Link from 'next/link'
import HeaderNav from '/components/HeaderNav'
import Footer from '../../components/Footer'
import TypeOnePost from '../../components/posts/TypeOnePost'
import TypeTwoPost from '../../components/posts/TypeTwoPost'
import TypeThreePost from '../../components/posts/TypeThreePost'
import { PostCard, Categories, PostWidget } from '../../components/posts'
import { getPosts } from '../../services'

export default function blog({ posts}) {
  return (
    <div className={styles.blog}>
      <HeaderNav style={{ display: 'flex', justifyContent: 'center' }} />


      <section className={styles['recent-posts']}>
        <div className={styles.content}>
          <div className={styles.featured}>
            <p className={styles.tags}>Featured</p>
            <h1>{posts.map((post, index) =>  (
              <div>
                {post.node.tags == 'top' ? post.node.title : null}
              </div>))}
            </h1>
            <div style={{ display: 'flex', margin: '0.5rem 0'}}>
              <div>
                <div className={styles.profile}></div>
                <p>By{posts.map((post, index) =>  (
              <div>
                 {post.node.tags == 'top' ? post.node.author.name : null}
              </div>))}</p>
              </div>
              
              <p>7 min.</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum metus nec arcu placerat laoreet. Phasellus porttitor velit sit amet leo tincidunt imperdiet. Nam maximus egestas tincidunt. Sed porttitor porta est, sit amet pulvinar turpis sollicitudin non. Nam sed mi.</p>
          </div>

        
              
              
        
          <div className={styles.bigImage} style={{  backgroundImage: 'url(/blog-assets/building2.jpg)'}}></div> 
          <div className={styles.quote}>
            <i class='bx bxs-quote-left'></i>
            <p>Have you ever heard of a High APY Savings Account?</p>
            <img src='/blog-assets/Instagram_Glyph_Gradient_RGB.png' alt='' />
          </div>

          {/* thin form type post */}
          <div style={{position: 'absolute', left: '5%', bottom: '15%'}}>
            <TypeOnePost/>
          </div>


          {/* thin form type post */}
          <div style={{ position: 'absolute', bottom: '-5%', right: '3%'}}>
            <TypeThreePost />
          </div>

          

          <div className={styles.topics}>
            <div className={styles.tags}>
              <div className={styles.tag}>
                <div className={styles.icon}><i class='bx bx-message-alt-x'></i></div>
                <p>Risk</p>
              </div>

              <div className={styles.tag}>
                <div className={styles.icon}><i class='bx bx-credit-card-alt' ></i></div>
                  <p>Credit</p>
                </div>

              <div className={styles.tag}>
                <div className={styles.icon}><i class='bx bx-cart' ></i></div>
                  <p>Budget</p>
                </div>

              <div className={styles.tag}>
                <div className={styles.icon}><i class='bx bx-calendar-check' ></i></div>
                <p>2022</p>
                </div>
            </div>
          </div>

          <img src="/asleep.jpg" alt="" className={styles.bigImagePost2} />
          <div className={styles.post2Text}>
          <h1>Your 10 Best Financial Strategies</h1>
            <div style={{ display: 'flex', margin: '0.5rem 0'}}>
              <div>
                <div className={styles.profile}></div>
                <p>By Daniel Tshibangu</p>
              </div>
              
              <p>7 min.</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum metus nec arcu placerat laoreet. </p>
          </div>
          
          <div className={styles.instagramAd}>
            <div className={styles.author}>

              <div className={styles.profile}></div>

              <div>
                <p className={styles.name}>Daniel Tshibangu</p>
                <p className={styles.title}>Founder of Mukadi</p>
              </div>
            </div>

            <div className={styles.metrics}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '1rem 0' }}>
                <span>
                  <p className={styles.title}>Articles</p>
                  <p className={styles.count}>5</p>
                </span>
                <span>
                  <p className={styles.title}>Followers</p>
                  <p className={styles.count}>120</p>  
                </span>
                <span>
                  <p className={styles.title}>Views</p>
                  <p className={styles.count}>1k</p>  
                </span>
              </div>
            </div>

            
          </div>

          <div>
            
          </div>
        </div>
      </section>
      



      
      <div style={{ display: 'flex', alignContent: 'center', backgroundColor: '#191D21', color: '#FBE6DA'}}>

        <h3 className={styles.latestTitle}>Latest Posts</h3>
        
        <div className={styles['blog-content']}>

            <div className={`${styles['first-story']} ${styles['story-format']}`}>
              <h2 className={styles.title}>The First Signs of Alchoholic Liver Damage Are Not in the Liver</h2>
              <div className={styles.details}>
                <p>The combination of my father's death and my personal background lit a fire in me to know more.</p>
                <br />
                <p>He was admitted to the hsopital on June 24, 2016.</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center'}}>
                <div className={styles.profile}></div>
                <div>
                  <p>Daniel Tshibangu</p>
                  <p>Founder of Mukadi</p>
                </div>
              </div>
            </div>

            <div className={`${styles['second-story']} ${styles['story-format']}`}>
              <h2 className={styles.title}>Three Things That Helped Raise My Credit Score +100 Points</h2>
              <div style={{ display: 'flex', alignItems: 'center'}}>
                <div>
                  <p>By Daniel Tshibangu</p>
                </div>
              </div>
            </div>

            <div className={`${styles['third-story']} ${styles['story-format']}`}>
              <div className={styles.headImage} style={{ backgroundImage: "url(/blog-assets/balloon.jpg)" }}></div>
              <h2 className={styles.title}>Three Things That Helped Raise My Credit Score +100 Points</h2>
              <div className={styles.details}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum metus nec arcu placerat laoreet. Phasellus porttitor velit sit amet leo tincidunt imperdiet. Nam maximus egestas tincidunt. Sed porttitor porta est, sit amet pulvinar turpis sollicitudin non. Nam sed mi.</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center'}}>
                <div className={styles.profile}></div>
                <div>
                  <p>Daniel Tshibangu</p>
                  <p>Founder of Mukadi</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles['blog-content-2']}>

              <div className={`${styles['fourth-story']} ${styles['story-format']}`}>
                <div className={styles.content1}>
                <div className={styles.headImage} style={{ backgroundImage: "url(/businessman-walking.jpg)" }}></div>
                <h2 className={styles.title}>Why You Need To Save At Least 40% of Your Income Each Month</h2>
                <p>By Daniel Tshibangu</p>
                </div>
              </div>

              <hr  style={{ width: '80%', opacity: 0.1 }}/>

              <div className={`${styles['fifth-story']} ${styles['story-format']}`}>
                <div className={styles.content2}>
                  <h2 className={styles.title}>My Vision of Financial Risk and How It Affects Your Purchases</h2>
                  <p>By Daniel Tshibangu</p>
                </div>
              </div>

              <hr  style={{ width: '80%', opacity: 0.1 }}/>

              <div className={`${styles['sixth-story']} ${styles['story-format']}`}>
                <div className={styles.content2}>
                  <p>Money Tip of The Day</p>
                  <h2 className={styles.title}>My Vision of Financial Risk and How It Affects Your Purchases</h2>
                  <p>By Daniel Tshibangu</p>
                </div>
              </div>
            </div>
         </div>

        <section style={{ height: '100%', margin: '10rem auto'}}>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
            {posts.map((post, index) => <PostCard post={post.node} key={post.title} />)}
          </div>
        </section>

        <section className={styles.subscribe}>
          <div className={styles.content}>
            <p className={styles.headerCopy}>Sign up for newsletter and be the first to get updates and news about our app.</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '2rem 0'}}>
              <hr/><img src='/mukadi-logo-black.svg' alt="" /><hr/>
            </div>

            <InputGroup className="mb-3">
              <FormControl
                placeholder="your-email@mukadi.com"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="primary" id="button-addon2" >
                <i class='bx bx-search' ></i>
              </Button>
            </InputGroup>
          </div>
        </section>

        <section>
          <Footer />
        </section>
        
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts}
  }
}

