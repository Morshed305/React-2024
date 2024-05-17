
const MainBody = () => {
    return (
        <main className="MainB Container">
            <div className="text">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, culpa. Nostrum impedit quos praesentium earum, officia aliquid ipsam aperiam? Fugit.
                </p>

                <div className="MainBtn">
                    <button>SHOP NOW</button>
                    <button className="SecondBtn">Category</button>
                </div>

                <div className="shopping">
                    <p>Also Available On</p>
                    <div className="BrandIcon">
                        <img src="/public/img/flipkart.png" alt="" />
                        <img src="/public/img/amazon.png" alt="" />

                    </div>
                </div>

            </div>

            <div className="MainImg">
                <img src="/public/img/shoe_image.png" alt="" />
            </div>

        </main>
    );
};

export default MainBody;