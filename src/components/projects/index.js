import './projects.scss'
import Front from '../projects/imgs/pokedex.png'
import Modal from './imgs/modal.png'

const projects = () => {
    return(
    <>
        <div className='container project-page'>
            <div className='text-zone'>
                <h1>PROJECTS</h1>
                <h2>
                    What I have been working on...
                </h2>
                    <h1>Pokedex: </h1>
                        {/* <span>
                            The Pokedex web application incorporates the use of Bootstrap and API's.
                            More specifically, I fetch images, name, and specific information about 
                            each pokemon. 
                        </span>
                        <img className = 'poke-home-page' src={Front} alt = 'pokedex home page'></img>         
            </div>
            <div>
                <span>  
                     The use of Modals have increased my understanding for javascript. The use of API's to fetch 
                     information into the modal's has greatly impacted my understanding of api's andthe creation 
                     of modals. in incorporations of more subjects within the webpage  hs been broadened, where I 
                     have  the confidence to be able to create a more diversified web page.   
                </span>
                <img className='poke-modal' src= {Modal} alt = 'modal-tag' ></img> */}
            </div>

        </div>
    </>
    )
}

export default projects