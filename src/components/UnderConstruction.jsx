import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function UnderConstruction () {
    return (
        <div className="m-auto bg-yellow-400 text-center p-20 rounded-lg">
            <FontAwesomeIcon className="text-yellow text-9xl my-10 mx-auto" icon="fa-solid fa-triangle-exclamation" />
            <p className="font-black text-5xl">Under Construction</p>
        </div>
    )
}

export default UnderConstruction;