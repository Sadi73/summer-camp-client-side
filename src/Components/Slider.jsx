
const Slider = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://img.freepik.com/free-vector/font-design-summer-camp-with-cute-kid-park_1308-43351.jpg?size=626&ext=jpg&ga=GA1.2.793887435.1673891886&semt=ais" className="w-full h-[600px]" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://img.freepik.com/free-vector/outdoor-encampment-doodle-composition_1284-23883.jpg?size=626&ext=jpg&ga=GA1.2.793887435.1673891886&semt=ais" className="w-full h-[600px]" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://img.freepik.com/free-vector/camping-composition-with-two-tents-fire-cool-box-with-trees-night-sky-cartoon_1284-54942.jpg?size=626&ext=jpg&ga=GA1.1.793887435.1673891886&semt=ais" className="w-full h-[600px]" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://img.freepik.com/free-vector/forest-camp-poster-with-van-chair-guitar-concept-travel-hiking-activity-vacation_107791-6742.jpg?size=626&ext=jpg&ga=GA1.1.793887435.1673891886&semt=ais" className="w-full h-[600px]" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Slider;