import projectsList from '../data/projects.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Projects () {

    return (
        <ul className='space-x-3 justify-center items-center text-lg m-auto p-8 flex flex-wrap w-4/6 gap-x-4 gap-y-8'>
            {
                projectsList.map((project, i) => {
                    return (
                        <div className='flex bg-white rounded-lg items-center'>
                            <p className='text-5xl p-3 text-black'><FontAwesomeIcon icon="fa-brands fa-github" /></p>
                            <a className="text-black p-3" href={project.link}>{project.name}</a>
                        </div>
                    )
                })
            }
        </ul>
    );
}

export default Projects