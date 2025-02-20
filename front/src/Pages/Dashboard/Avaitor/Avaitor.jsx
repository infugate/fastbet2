import React, { useState, useEffect, useRef } from 'react';
import image from '../../../assets/mountains.png';
import './Avaitor.css';
import planeImg from '../../../assets/plane.png';
import blastImg from "../../../assets/blast.png";
import shineImg from "../../../assets/shine.png";

export const Aviator = () => {
  const [countdown, setCountdown] = useState(7);
  const [multiple, setMultiple] = useState(1.11);
  const [maxMultiple, setMaxMultiple] = useState(parseFloat((Math.random() * (30.00 - 0.01) + 0.01).toFixed(2)));
  console.log(maxMultiple);

  const [isBlast, setIsBlast] = useState(false);
  const [betinput, setBetinput] = useState(0);
  const [placeBet, setPlaceBet] = useState(false);
  const [betAmount, setBetAmount] = useState(0);
  const [takeWinnings, setTakeWinnings] = useState(false);
  const [winnings, setWinnings] = useState(0);
  const [popup, setPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [placebetClicked, setPlacebetClicked] = useState(0);
  const [takeWinningsClicked, setTakeWinningsClicked] = useState(0);
  const [bettingData, setBettingData] = useState([
    { username: '********69', odds: 'x0', bet: '0 INR', win: '0 INR', updated: null },
    { username: '********15', odds: 'x0', bet: '0 INR', win: '0 INR', updated: null },
    { username: '********19', odds: 'x0', bet: '0 INR', win: '0 INR', updated: null },
    { username: '********53', odds: 'x0', bet: '0 INR', win: '0 INR', updated: null },
    { username: '********25', odds: 'x0', bet: '0 INR', win: '0 INR', updated: null },
    { username: '********65', odds: 'x0', bet: '0 INR', win: '0 INR', updated: null },
    { username: '********12', odds: 'x0', bet: '0 INR', win: '0 INR', updated: null },
    { username: '********11', odds: 'x0', bet: '0 INR', win: '0 INR', updated: null },
    { username: '********57', odds: 'x0', bet: '0 INR', win: '0 INR', updated: null },
    { username: '********23', odds: 'x0', bet: '0 INR', win: '0 INR', updated: null },
    { username: '********63', odds: 'x0', bet: '0 INR', win: '0 INR', updated: null },
    { username: '********18', odds: 'x0', bet: '0 INR', win: '0 INR', updated: null },
    { username: '********87', odds: 'x0', bet: '0 INR', win: '0 INR', updated: null },
    { username: '********54', odds: 'x0', bet: '0 INR', win: '0 INR', updated: null },
    { username: '********99', odds: 'x0', bet: '0 INR', win: '0 INR', updated: null },
  ]);
  const [hasUpdatedBets, setHasUpdatedBets] = useState(false);

  // Store timeout IDs to clear them later
  const timeoutIds = useRef([]);

  // Countdown Timer
  useEffect(() => {
    if (countdown > 0) {
      const interval = setInterval(() => {
        setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [countdown]);

  // Multiplier Increaser (Only when countdown hits 0)
  useEffect(() => {
    if (countdown === 0 && multiple < maxMultiple) {
      const multiplierInterval = setInterval(() => {
        setMultiple((prev) =>
          prev < maxMultiple ? parseFloat((prev + 0.01).toFixed(2)) : maxMultiple
        );
      }, 100);

      return () => clearInterval(multiplierInterval);
    }
  }, [countdown, multiple, maxMultiple]);

  // Reset when multiplier reaches maxMultiple
  useEffect(() => {
    if (multiple >= maxMultiple) {
      // If user placed a bet but didn't take winnings, show loss popup


      setIsBlast(true);
      setTimeout(() => {
        setIsBlast(false);
      }, 800);

      // Clear all pending timeouts
      timeoutIds.current.forEach((id) => clearTimeout(id));
      timeoutIds.current = [];

      setTimeout(() => {
        setCountdown(7); // Restart countdown
        setMultiple(1.11); // Reset multiplier
        setBetAmount(0); // Reset bet amount
        setPopupMessage(""); // Clear popup message
        setPopup(false); // Hide popup
        setPlacebetClicked(0); // Reset placebetClicked count
        setTakeWinningsClicked(0); // Reset takeWinningsClicked count
        setHasUpdatedBets(false); // Reset bet update flag
        setMaxMultiple(parseFloat((Math.random() * (30.00 - 0.01) + 0.01).toFixed(2))); // Reset max multiple
      }, 5000);
    }
  }, [multiple]);

  useEffect(() => {
    if (multiple >= maxMultiple && placebetClicked > 0 && takeWinningsClicked === 0) {
      setPopupMessage("You lost your bet!"); // Show loss popup message
      setPopup(true); // Show popup
      setTimeout(() => {
        setPopup(false); // Hide popup after 3 seconds
        setPopupMessage(""); // Clear popup message
      }, 3000);

    }
  }, [multiple, placebetClicked, takeWinningsClicked]);


  // Update betting data only once when countdown ends
  useEffect(() => {
    if (countdown === 0 && !hasUpdatedBets) {
      updateBettingData();
      setHasUpdatedBets(true); // Mark that bets have been updated
    }
  }, [countdown, hasUpdatedBets]);

  // Reset betting data when countdown resets
  useEffect(() => {
    if (countdown === 7) {
      const resetData = bettingData.map((entry) => ({
        ...entry,
        bet: '0 INR',
        odds: 'x0',
        win: '0 INR',
        updated: null, // Reset updated flag
      }));
      setBettingData(resetData);
    }
  }, [countdown]);



  const calculateWinnings = () => {
    return betAmount * multiple; // Calculate winnings
  };

  const updateBettingData = () => {
    const updatedData = bettingData.map((entry) => {
      const randomNumber = Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000; // Random bet amount
      const randomMultiplier = (Math.random() * (20.00 - 1.01) + 1.01).toFixed(2); // Random decimal between 1.01 and 20.00
      const winAmount = (randomNumber * randomMultiplier).toFixed(2); // Calculate winnings

      // Random delay between 5s and 20s for each row
      const randomDelay = Math.floor(Math.random() * (50000 - 2000 + 1)) + 2000;

      // Store the timeout ID
      const timeoutId = setTimeout(() => {
        setBettingData((prevData) => {
          return prevData.map((prevEntry) => {
            if (prevEntry.username === entry.username && multiple < maxMultiple) {
              return {
                ...prevEntry,
                odds: `x${randomMultiplier}`,
                win: `${winAmount} INR`,
                updated: true, // Mark as updated
              };
            }
            return prevEntry;
          });
        });
      }, randomDelay);

      // Add the timeout ID to the list
      timeoutIds.current.push(timeoutId);

      // Return the initial entry with updated bet amount
      return {
        ...entry,
        bet: `${randomNumber} INR`,
      };
    });

    // Update the betting data with the new bet amounts
    setBettingData(updatedData);
  };

  return (
    <div>

      <main >
        <div className='relative' >
          {/* <div className='betting-table  midcom px-5 py-2 xl:py-10 lg:px-14 absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between  w-[34%]   '>
            <div className='table bg-[#272e5d] lg:row-span-2 rounded-lg shadow-lg overflow-hidden w-full lg:max-w-5xl  width-[30px]   ' >
              <div className=' bg-gradient-to-r from-[#e65c00] to-[#e63946] flex justify-between items-center p-3 px-4 text-white text-sm font-semibold'>
                <div className='flex flex-col items-center'>
                  <span className="title">Number of players</span>
                  <div className="flex items-center">
                    <i className="fa-solid fa-user mr-2 text-[12px] "  ></i>
                    <span id="playersCount" className="font-bold" >0</span>
                  </div>
                </div>

                <div className='flex flex-col items-center'>
                  <span className='title'>Total bets</span>
                  <div className='flex items-center'>
                    <img src="https://img.icons8.com/ios-filled/30/ffffff/coins.png" alt="Coins Icon" className='mr-2 w-4 text-[12px]' />
                    <span id="totalBets" className="font-bold text-[12px]">0 INR</span>
                  </div>
                </div>

                <div className='flex flex-col items-center'>
                  <span className="title">Total winnings</span>
                  <div className='flex items-center'>
                    <img src="https://img.icons8.com/ios-filled/30/ffffff/money-bag.png" alt="Money Bag Icon" className='mr-2 w-5 text-[12px]' />
                    <span id="totalWinnings" className="font-bold text-[12px]" >0 INR</span>
                  </div>
                </div>
              </div>


      


              <div className='overflow-y-auto  overflow-x-hidden betting-table max-h-[50vh] lg:max-h-[70vh]'>

                <table className='w-full text-left'>
                  <thead className='bg-[#1b1d36] text-gray-400 uppercase text-xs sticky top-0 z-5'>
                    <tr>
                      <th className='py-3 px-4 text-center font-semibold'>USERNAME</th>
                
                      <th className='py-3 px-4 text-center font-semibold'>BET</th>
                      <th className='py-3 px-4 text-center font-semibold'>WIN</th>
                    </tr>
                  </thead>
                  <tbody id="bettingData" className="text-center font-small  ">
                    {bettingData.map((entry, index) => (
                      <tr key={index} className="border-b border-gray-700">
                        <td
                          className={`p-1 ${entry.updated === true ? 'text-green-500' : entry.updated === false ? 'text-red-500' : 'text-white'}`} // Dynamic className
                        >
                          {entry.username}
                        </td>
                    
                        <td
                          className={`p-1 ${entry.updated === true ? 'text-green-500' : entry.updated === false ? 'text-red-500' : 'text-white'}`} // Dynamic className
                        >
                          {entry.bet}
                        </td>
                        <td
                          className={`p-1 ${entry.updated === true ? 'text-green-500' : entry.updated === false ? 'text-red-500' : 'text-white'}`} // Dynamic className
                        >
                          {entry.win}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

              </div>


            </div>

          </div> */}



          <div className="betting-table">
            <div className="table-container">
              <div className="header">
                <div className="column">
                  <span className="title">Number of players</span>
                  <div className="icon-text">
                    <i className="fa-solid fa-user icon"></i>
                    <span id="playersCount" className="bold">0</span>
                  </div>
                </div>
                <div className="column">
                  <span className="title">Total bets</span>
                  <div className="icon-text">
                    <img src="https://img.icons8.com/ios-filled/30/ffffff/coins.png" alt="Coins Icon" className="icon" />
                    <span id="totalBets" className="bold">0 INR</span>
                  </div>
                </div>
                <div className="column">
                  <span className="title">Total winnings</span>
                  <div className="icon-text">
                    <img src="https://img.icons8.com/ios-filled/30/ffffff/money-bag.png" alt="Money Bag Icon" className="icon" />
                    <span id="totalWinnings" className="bold">0 INR</span>
                  </div>
                </div>
              </div>
              <div className="betting-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>USERNAME</th>
                      <th>BET</th>
                      <th>WIN</th>
                    </tr>
                  </thead>
                  <tbody id="bettingData">
                    {bettingData.map((entry, index) => (
                      <tr key={index} className="border-gray-700">
                        <td className={entry.updated === true ? 'text-green' : entry.updated === false ? 'text-red' : 'text-white'}>
                          {entry.username}
                        </td>
                        <td className={entry.updated === true ? 'text-green' : entry.updated === false ? 'text-red' : 'text-white'}>
                          {entry.bet}
                        </td>
                        <td className={entry.updated === true ? 'text-green' : entry.updated === false ? 'text-red' : 'text-white'}>
                          {entry.win}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* plane  */}
          {/* <div>
            <div className='crash-container xl:col-span-2 plane relative top-[10px] lg:top-[15px] xl:top-[20px] 2xl:top-[40px] '>
              <div className='outer-crash relative'>
                <div className='crash '>

                  <div className='mountains'>
                    <img
                      src={image}
                      alt="Mountains"
                      className={`mountain ${multiple >= maxMultiple || countdown > 0 ? "paused" : ""}`}
                    />
                    <img
                      src={image}
                      alt="Mountains"
                      className={`mountain ${multiple >= maxMultiple || countdown > 0 ? "paused" : ""}`}
                    />

                    <img
                      src={image}
                      alt="Mountains"
                      className={`mountain ${multiple >= maxMultiple || countdown > 0 ? "paused" : ""}`}
                    />

                    <img
                      src={image}
                      alt="Mountains"
                      className={`mountain ${multiple >= maxMultiple || countdown > 0 ? "paused" : ""}`}
                    />

                    <img
                      src={image}
                      alt="Mountains"
                      className={`mountain ${multiple >= maxMultiple || countdown > 0 ? "paused" : ""}`}
                    />

                    <img
                      src={image}
                      alt="Mountains"
                      className={`mountain ${multiple >= maxMultiple || countdown > 0 ? "paused" : ""}`}
                    />

                  </div>

                  <div id="animation-container" className="curve relative top-[-43.5vh] left-[-10vh] ">
                    {countdown === 0 ? (
                      <svg id="animation-svg" className='absolute ' viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="50%">
                            <stop offset="0%" style={{ stopColor: 'rgb(190, 96, 34)', stopOpacity: 0.8 }} />
                            <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0 }} />
                          </linearGradient>
                        </defs>

                        <path
                          id="curve-path"
                          className={`curved-rect ${multiple === maxMultiple ? "animation-paused" : ""}`}
                          d="M 50 252 Q 450 260 740 80 L 740 500 Q 300 350 80 500 Z"
                          fill="url(#gradient1)"
                        >
                          <animate
                            attributeName="d"
                            from="M 50 258 Q 50 255 50 248 L 50 450 Q 300 350 50 500 Z"
                            to="M 50 252 Q 450 260 740 80 L 740 500 Q 300 350 80 500 Z"
                            dur="7s"
                            repeatCount="1"
                          />
                        </path>

                        <path
                          id="plane-path"
                          className={` ${multiple === maxMultiple ? "animation-paused" : ""}`}
                          d="M 50 253 Q 450 260 720 90"
                          stroke="rgb(204, 183, 40)"
                          strokeWidth="4"
                          fill="transparent"
                        >
                          <animate
                            attributeName="d"
                            from="M 50 253 Q 50 250 70 250"
                            to="M 50 253 Q 450 260 720 90"
                            dur="7s"
                            repeatCount="1"
                            keyTimes="0;0.1;1"
                          />
                        </path>

                        <g id="plane">
                          <image
                            id="plane-image"
                            href={planeImg}
                            width="100"
                            height="100"
                            transform="translate(-50, -50)"
                            className={`plane-animation ${multiple === maxMultiple ? "animation-paused" : ""} `}
                            style={{ opacity: 1 }}
                          >
                            <animateMotion dur="0.1s" repeatCount="1" fill="freeze" rotate="auto">
                              <mpath href="#plane-path" />
                            </animateMotion>
                          </image>
                        </g>

                        <g id="blast">
                          <image
                            id="blast-image"
                            href={blastImg}
                            width="100"
                            height="100"
                            transform="translate(-50, -50)"
                            className={`plane-animation {isBlast ? "blast-animation" : ""}`}
                            style={{ opacity: isBlast ? 1 : 0, }}
                          >
                            <animateMotion dur="0.1s" repeatCount="1" fill="freeze" rotate="auto">
                              <mpath href="#plane-path" />
                            </animateMotion>
                          </image>
                        </g>

                        <g id="shine">
                          <image
                            id="shine-image"
                            href={shineImg}
                            width="100"
                            height="100"
                            transform="translate(-50, -50)"
                            className={`shine-animation ${multiple === maxMultiple ? "animation-paused" : ""}`}
                          >
                            <animateMotion dur="0.1s" repeatCount="1" keyTimes="0;1" fill="freeze">
                              <mpath href="#plane-path" />
                            </animateMotion>
                          </image>
                        </g>
                      </svg>
                    ) : null}
                  </div>



                  <div id="content">
                    <div className='countdown-display hidden '>

                      <div className="ticks">

                        <div className="tick tick1 rotate-0 "></div>

                        <div
                          className="tick tick2 rotate-30"
                        ></div>

                        <div
                          class="tick tick3 rotate-60"
                        ></div>

                        <div
                          class="tick tick4 rotate-90"
                        ></div>

                        <div
                          class="tick tick5 rotate-120"
                        ></div>

                        <div
                          class="tick tick6 rotate-150"
                        ></div>

                        <div
                          class="tick tick7 rotate-180"
                        ></div>

                      </div>

                    </div>

                  </div>
                </div>

                <div className={`count-down countdown ${countdown === 0 ? 'hidden' : ''}`} id="countdown-value">
                  {countdown}
                </div>


                <div className={`multiplier ${countdown > 0 ? 'hidden' : ''}`} id="multiplier-value">
                  <p>{multiple}x</p>
                </div>
                <div className={`absolute  top-200px h-full w-full inset-0 bg-black/50  top-0 flex justify-center  items-center ${popup ? "block" : "hidden"} `} >
                  <div className='bg-black rounded-lg shadow-lg p-5 w-64 lg:w-72  flex justify-center items-center text-green-500'>{popupMessage}</div>

                </div>


              </div>
            </div>

            <div className='relative '>

              <div className=" absolute history history-container w-[40%]  ml-[32%] bg-black/50 mt-[50px] h-[250px] rounded-lg   ">

                <div className="history-header flex justify-center items-center   ">
                  <i className="bi bi-alarm-fill "></i> HISTORY
                </div>

                <table className='history-table w-full border-collapse '>
                  <thead className=''>
                    <tr className='bg-gray-200 text-gray-700'>
                      <th>DATE</th>
                      <th>TIME</th>
                      <th>ROUND ID</th>
                      <th>BET</th>
                      <th>ODDS</th>
                      <th>WIN</th>
                      <th>CRASH</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr className='text-green-500  '>
                      <td  >2023-10-01</td>
                      <td>12:34:56</td>
                      <td>123456</td>
                      <td>100</td>
                      <td>2.5</td>
                      <td>250</td>
                      <td>12.34</td>
                    </tr>

                  </tbody>
                </table>



              </div>

              <div className="absolute stake ml-[30%] sm:mx-[50%] md:mx-[60%] lg:mx-[72%] w-[100%] sm:w-[70%] md:w-[60%] lg:w-90">

                <div className='stake-header flex justify-center items-center mt-[50px] mx-[10px] bg-[#333333] text-white  p-5 w-90% h-9     flex justify-center items-center text-green-500'>
                  <div>
                    STAKE SELECTOR
                  </div>

                </div>
                <div className='' >
                  <div className='mx-[10px] bg-[#333333] p-5 w-90%  h-full   '>
                    <label
                      htmlFor="bet-input"
                      className="font-medium mb-2 block text-[12px] text-[#9ca3af]"
                    >
                      Bet
                    </label>
                    <input
                      type="number"
                      id="bet-input"
                      className={`w-full text-black bg-[#c9c9c9] h-6 p-1 rounded-md focus:outline-orange-500 text-[12px] disabled:opacity-50 ${countdown === 0 ? "disabled" : ""
                        }`}
                      placeholder="Enter your bet"
                      value={betinput}
                      onChange={(e) => setBetinput(Number(e.target.value))}
                      disabled={countdown === 0}
                    />
                    <div className=" mt-2">
                      <button
                        onClick={() => setBetinput(betinput + 20)}
                        disabled={countdown === 0}

                        className="number-button bg-[#414363] hover:bg-orange-500 text-white p-1 rounded-md disabled:opacity-50"
                      >
                        20
                      </button>

                      <button
                        onClick={() => setBetinput(betinput + 90)}
                        disabled={countdown === 0}
                        className="number-button bg-[#414363] hover:bg-orange-500 text-white p-1 rounded-md disabled:opacity-50"
                      >
                        90
                      </button>

                      <button
                        onClick={() => setBetinput(betinput + 200)}
                        disabled={countdown === 0}
                        className="number-button bg-[#414363] hover:bg-orange-500 text-white p-1 rounded-md disabled:opacity-50"
                      >
                        200
                      </button>
                      <button
                        onClick={() => setBetinput(betinput + 700)}
                        disabled={countdown === 0}
                        className="number-button bg-[#414363] hover:bg-orange-500 text-white p-1 rounded-md disabled:opacity-50"
                      >
                        700
                      </button>
                      <button
                        onClick={() => setBetinput(betinput + 2000)}
                        disabled={countdown === 0}
                        className="number-button bg-[#414363] hover:bg-orange-500 text-white p-1 rounded-md disabled:opacity-50"
                      >
                        2000
                      </button>
                      <button
                        onClick={() => setBetinput(betinput + 8000)}
                        disabled={countdown === 0}
                        className="number-button bg-[#414363] hover:bg-orange-500 text-white p-1 rounded-md disabled:opacity-50"
                      >
                        8000
                      </button>
                      <button
                        onClick={() => setBetinput(0)}
                        disabled={countdown === 0}
                        className="number-button bg-red-700 text-white hover:text-red-700 hover:border-red-700 hover:bg-orange-500 text-white p-1 rounded-md disabled:opacity-50"
                      >
                        <span class="font-bold " >x</span>
                      </button>
                    </div>

                    <div className="flex justify-between mt-2 bg-">
                      <button
                        id="placeBetSection"
                        onClick={() => {
                          if (betinput === "" || betinput === 0 || placebetClicked === 1) {
                            return;
                          }



                          setBetAmount(betinput);
                          setPopup(true);
                          setTimeout(() => {
                            setPopup(false);
                          }, 2000);
                          setPopupMessage("Bet placed!");
                          setPlacebetClicked(1);
                        }}
                        disabled={countdown === 0}
                        className="bg-orange-500 hover:bg-[#ff3d00] h-10 text-white font-semibold py-1 px-8 rounded-md text-[12px] mt-2 disabled:opacity-50"
                      >
                        <span className="block text-center">PLACE A BET</span>
                      </button>

                      <button
                        id="takewin"
                        onClick={() => {
                          if (takeWinningsClicked === 1) {
                            return;
                          }

                          const winnings = calculateWinnings();
                          setWinnings(winnings);
                          setTakeWinningsClicked(1);
                          setPopup(true);
                          setTimeout(() => {
                            setPopup(false);
                          }, 2000);
                          setPopupMessage(`You have won: ${winnings.toFixed(2)}`);
                        }}
                        className="text-white font-semibold h-10 py-1 px-9 rounded-md bg-[#ff3d00] hover:bg-[#ff3d00] text-[12px] mt-2 disabled:opacity-50"
                        disabled={countdown > 0 || multiple === maxMultiple || takeWinningsClicked === 1}
                      >
                        TAKE WINNINGS
                      </button>
                    </div>


                  </div>



                </div>
              </div>
            </div>


          </div> */}

<div>
      <div className="crash-container plane">
        <div className="outer-crash">
          <div className="crash">
            <div className="mountains">
              {[...Array(6)].map((_, i) => (
                <img
                  key={i}
                  src={image}
                  alt="Mountains"
                  className={`mountain ${multiple >= maxMultiple || countdown > 0 ? "paused" : ""}`}
                />
              ))}
            </div>

            <div id="animation-container" className="curve">
              {countdown === 0 && (
                <svg id="animation-svg" viewBox="0 0 800 400">
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="50%">
                      <stop offset="0%" style={{ stopColor: "rgb(190, 96, 34)", stopOpacity: 0.8 }} />
                      <stop offset="100%" style={{ stopColor: "white", stopOpacity: 0 }} />
                    </linearGradient>
                  </defs>

                  <path id="curve-path" className={`curved-rect ${multiple === maxMultiple ? "animation-paused" : ""}`} d="M 50 252 Q 450 260 740 80 L 740 500 Q 300 350 80 500 Z" fill="url(#gradient1)" />

                  <g id="plane">
                    <image id="plane-image" href={planeImg} width="100" height="100" className={`plane-animation ${multiple === maxMultiple ? "animation-paused" : ""}`} />
                  </g>
                </svg>
              )}
            </div>
          </div>

          <div className={`count-down countdown ${countdown === 0 ? "hidden" : ""}`} id="countdown-value">
            {countdown}
          </div>

          <div className={`multiplier ${countdown > 0 ? "hidden" : ""}`} id="multiplier-value">
            <p>{multiple}x</p>
          </div>

          {popup && (
            <div className="popup">
              <div className="popup-message">{popupMessage}</div>
            </div>
          )}
        </div>
      </div>
    </div>




        </div>

      </main>

    </div>
  )
}
