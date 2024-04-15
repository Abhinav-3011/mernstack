import React from 'react'
import "./Home.css"
import { NavLink } from 'react-router-dom'
const Home = () => {
    const bs = new URL("../image/2245_U1RVRElPIFBDIDE4MzAtMjA.jpg", import.meta.url)
    const bs2 = new URL("../image/oprtunities.png", import.meta.url)

    return (
        <>
            <main className='main'>

                <nav className="home_nav_main_block text-white-500 flex bg-black ">
                    <section className='image_main_block'>
                        <img src={bs} />
                    </section>
                    <section className='flex navsection'>

                        <div>  Home</div>
                        <div> About</div>

                        <div> Carrier</div>

                        <div>Contactus </div>

                        <div>Register</div>
                        <NavLink id="login" to="/login">
                            Login
                        </NavLink>
                    </section>

                </nav>

                <section className='operunity_image'>


                </section>
            </main>
        </>
    )
}

export default Home
