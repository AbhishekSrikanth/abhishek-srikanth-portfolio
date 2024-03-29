import NavBarButton from './NavBarButton';

function NavBar({ activeButton, onButtonClick }) {

    const buttonTexts = ['Home', 'Skills', 'Projects', 'Experience', 'Recommendations', 'Awards', 'Education']

    return (
        <div className="h-[8.33%] flex py-5">
            <nav className="space-x-3 items-center text-lg m-auto px-4">
                {
                    buttonTexts.map((buttonText, i) => <NavBarButton
                            text={buttonText}
                            active={activeButton === buttonText}
                            onClick={(value) => onButtonClick(value)}
                            key={i}
                        />
                    )
                }
            </nav>
        </div>
    );
}

export default NavBar;