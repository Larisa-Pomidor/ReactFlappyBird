const BIRD_SIZE = 20;
const GAME_WIDTH = 500;
const GAME_HEIGHT = 500;
const GRAVIRY = 5;

const Game = () => {
    const [birdPosition, setbirdPosition] = React.useState(GAME_HEIGHT / 2);

    React.useEffect(() => {
        let timeId;
        if (birdPosition < GAME_HEIGHT - BIRD_SIZE) {
            timeId = setInterval(() => {
                setbirdPosition((birdPosition) => birdPosition + GRAVIRY)
            }, 24)
        }

        return () => {
            clearInterval(timeId);
        };
    });

    return (
        <div></div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

const Bird = styled.div`
    position: absolute;
    background-color: red;
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    top: ${(props) => props.top}px;
    border-radius: 50%;
`;

const GameOuter = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;

const GameBox = styled.div`
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;
    background-color: blue;
`;


