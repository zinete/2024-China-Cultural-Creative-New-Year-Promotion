import { useTrail, animated } from "@react-spring/web";
const App = () => {
  const [trail] = useTrail(
    3,
    {
      from: { opacity: 0, y: 100 },
      to: { opacity: 1, y: 0 },
    },
    []
  );

  return (
    <div>
      <>
        {trail?.map((props, index) => {
          return (
            <animated.div key={index} style={props}>
              <span
                style={{
                  color: "#ffae00",
                }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem unde accusantium quo qui sunt non voluptas quibusdam
                tempore aliquid. Eligendi quos praesentium temporibus ut error
                hic laudantium minus quam nam!
              </span>
            </animated.div>
          );
        })}
      </>

      <div className="w-[100px] h-[100px] bg-sky-500 rounded-full"></div>
    </div>
  );
};

export default App;
