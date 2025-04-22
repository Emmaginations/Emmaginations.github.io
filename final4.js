function Design() {
    const [currentIndex, setCurrentIndex] = React.useState(0);
  
    const images = [
      "./img5.jpg",
      "./img6.jpg",
      "./img7.png",
      "./img8.jpg"
    ];
  
    React.useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((index) => {
            if (index === images.length -1) {
                return 0;
            } else {
                return index + 1;
            }
        });
      }, 3000); // interval of three seconds
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="carousel">
        <img src={images[currentIndex]} className="carousel-image" />
      </div>
    );
  }

const design = ReactDOM.createRoot(document.getElementById("design"));
design.render(<Design />);