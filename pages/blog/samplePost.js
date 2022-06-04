import React from 'react'
import styles from '/styles/post.module.scss'
import { Nav, Navbar, Container, Button, InputGroup, FormControl} from 'react-bootstrap'
import Link from 'next/link'
import Footer from '/components/Footer'

const samplePost = () => {
  return (
    <div style={{ position: 'relative'}}>
        <section className={styles.jumbotron}>
        <header className={styles['navbar']}>
            <nav>
                <Navbar className={styles.navi}>
                    <Container className={styles.container}>
                        <Navbar.Brand href="http://localhost:3000/" className={styles.logo}>
                            <img src='/mukadi-logo-black.svg' style={{ height: '2.4rem' }} />
                            <img src='MUKADI.svg' alt="" />
                        </Navbar.Brand>
                    </Container>

                    <Container className={styles.container}>
                        <Nav className={styles['nav-options']}>
                            <Nav.Link href="#" className={styles.link}>Home</Nav.Link>
                            <Nav.Link href="#" className={styles.link}>Features</Nav.Link>
                            <Nav.Link href="#" className={styles.link}>Blog</Nav.Link>
                            <Nav.Link href="#" className={styles.link}>About</Nav.Link>
                        </Nav>
                    </Container>

                    <Container className={styles.container}>
                            <Button variant="outline-primary">
                                Coming Soon
                            </Button>

                            <Button variant="outline-primary">
                                Instagram
                            </Button>
                    </Container>
                </Navbar>
            </nav>
        </header>


        
            <div className={styles.content}>
                <div className={styles.tag}>
                    <p>Growth</p>
                </div>

                <h1>Some Fancy Blog Title.</h1>
                <h2>Some Fancier Subtitle lol</h2>

                <div className={styles['extra-details']}>
                    <p>Daniel Tshibangu</p>
                    <p>Feb 22, 2021</p>
                    <p>7 Min Read</p>
                </div>

                <div style={{ backgroundImage: 'url(/blog-assets/building2.jpg)'}}  className={styles.coinImg}></div>
                
            </div>
        </section>

        <section className={styles['blog']}>

            <div className={styles['table-content-space']}>
                <p className={styles.title}>Contents</p>
                <hr />
                <ul>
                    <li><a href="#">fhsgfhghjgdsh sdgfhjsgsdhjgjhdsds ghjdsghj</a></li>
                    <li><a href='#'>second title</a></li>
                </ul>
            </div>

            <div className={styles.blogArea}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est odio, vehicula nec arcu ac, lacinia blandit velit. Proin laoreet arcu et tortor rhoncus scelerisque vel et justo. Nunc ornare, diam id vestibulum porttitor, justo ex semper mi, eu pretium ante tortor sit amet mi. Nulla id iaculis eros. Nulla sagittis sem a magna scelerisque finibus quis ut tellus. Suspendisse at maximus erat, sit amet dignissim tortor. Ut diam purus, molestie eu aliquet id, elementum nec enim. Donec iaculis aliquet turpis, vitae tempor lorem accumsan eget. Duis elementum nunc vitae posuere consequat. Morbi pretium congue tortor a bibendum. Fusce et tincidunt diam. Duis vel magna ornare, tristique magna nec, dignissim eros.</p>
                <br/><br/>Proin eget dui sed ipsum pharetra efficitur vitae nec est. Nullam molestie neque nulla, in pretium risus mattis ac. Proin condimentum, orci accumsan sagittis euismod, dui nibh accumsan lectus, scelerisque imperdiet eros ante ac ipsum. Integer porta sollicitudin laoreet. Vestibulum elit magna, feugiat et justo eget, tincidunt fermentum odio. Nam id ex in quam venenatis sodales at eu ipsum. Proin non orci odio. In hac habitasse platea dictumst. In id ante bibendum, imperdiet augue eget, eleifend mi. Nullam ultrices metus et fermentum finibus. Curabitur vel nisi orci. In quis magna sit amet erat faucibus elementum eu in dui.
                Integer at hendrerit ante. Etiam vestibulum ultrices mollis. Mauris placerat ultrices purus vitae volutpat. Maecenas sem leo, lacinia vel nunc nec, condimentum rhoncus metus. Donec pharetra turpis dignissim cursus fringilla. Duis euismod id turpis ut rhoncus. Quisque pulvinar, nisl at dignissim laoreet, justo tortor bibendum mi, ut suscipit lorem neque eu magna. Sed congue non urna at consequat. Etiam malesuada magna eros, eget faucibus tortor fermentum feugiat. Mauris eget bibendum dolor, at condimentum urna.
                Integer sed leo quam. Fusce sed consequat ligula, vitae ultricies dolor. Maecenas mattis vulputate euismod. Cras volutpat nibh et quam mollis, interdum porttitor lacus cursus. Mauris sit amet ornare ex. In auctor semper orci in ullamcorper. Nulla varius, odio a pulvinar commodo, massa nisi tincidunt massa, vitae vulputate velit ipsum molestie ligula. Fusce euismod scelerisque maximus. Nunc ac tellus gravida justo vulputate fermentum in at augue. Nulla fermentum, nunc sed fringilla malesuada, nulla eros imperdiet risus, eu fermentum nisl nisl sit amet ipsum.
                Proin dignissim velit ut blandit interdum. Nam a lectus eu nibh vehicula egestas et at nunc. Duis vehicula, erat id eleifend bibendum, enim neque vestibulum arcu, in aliquet mauris leo feugiat sem. Duis pretium eu odio ut convallis. Nullam sit amet orci quis purus interdum mattis. Pellentesque placerat quam lorem, nec consequat nibh bibendum sit amet. Integer sed mattis justo.
            </div>

            <div className={styles['author-info']}>
                <div className={styles.author}>
                    <img src="/homepage-header.jpg" alt="" />
                    <address><Link href='#'><a rel='author'><p>Daniel Tshibangu</p></a></Link></address>
                    <p className={styles['author-detail']}>
                        <strong style={{ color: '#000', fontWeight: 500}}>Founder of Mukadi, an online money management application.</strong> 
                        <br/><br/> My goal is to help others achieve financial awareness and make better financial decisions for themselves and their families. </p>
                </div>

                <div className={styles.share}>
                    <p className={styles.title}>Share</p>

                    <div className={styles.buttons}>
                        <img src='/blog-assets/Facebook Brand Asset Pack 2019/f-Logos-2019-1/f_Logo_Online_04_2019/Color/PNG/f_logo_RGB-Blue_144.png' alt='' />
                        <img src='/blog-assets/Logo blue.svg' alt='' />
                        <img src='/blog-assets/Instagram_Glyph_Gradient_RGB.png' alt='' />
                    </div>
                </div>
            </div>
        </section>

        <section>
            <Footer />
        </section>
    </div>
  )
}

export default samplePost