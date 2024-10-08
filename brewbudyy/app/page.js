import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center gap-4 flex-col items-center  text-white h-[84vh]">
      <div className = "flex justify-center flex-row items-center">
      <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" class="xs:h-16 xs:w-16" data-v-23be58bd=""><g clip-path="url(#clipId-2)"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="#FDE12D"></path></g><defs><clipPath id="clipId-2"><rect fill="white" height="24" width="24"></rect></clipPath></defs></svg>
      <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" class="xs:h-16 xs:w-16" data-v-23be58bd=""><g clip-path="url(#clipId-2)"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="#FDE12D"></path></g><defs><clipPath id="clipId-2"><rect fill="white" height="24" width="24"></rect></clipPath></defs></svg>
      <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" class="xs:h-16 xs:w-16" data-v-23be58bd=""><g clip-path="url(#clipId-2)"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="#FDE12D"></path></g><defs><clipPath id="clipId-2"><rect fill="white" height="24" width="24"></rect></clipPath></defs></svg>
      <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" class="xs:h-16 xs:w-16" data-v-23be58bd=""><g clip-path="url(#clipId-2)"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="#FDE12D"></path></g><defs><clipPath id="clipId-2"><rect fill="white" height="24" width="24"></rect></clipPath></defs></svg>
      <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" class="xs:h-16 xs:w-16" data-v-23be58bd=""><g clip-path="url(#clipId-2)"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="#FDE12D"></path></g><defs><clipPath id="clipId-2"><rect fill="white" height="24" width="24"></rect></clipPath></defs></svg>
      <span><h4 class="text-dark text-fuchsia-50 text-18 font-cr-regular ml-4 xs:text-12" data-v-23be58bd="">Loved by 1,000,000+ creators</h4></span>
      </div>
        <div className="font-bold text-5xl flex justify-center items-center my-8 ">
          BrewBuddy{" "}
          <span>
            <img src="/cup3.gif" width={44} alt="" />
          </span>
        </div>

        <p>
          A crowdfunding platform for creators. Get fund by your fans and
          followers.
        </p>
        <div className = "my-8">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start here
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read more
          </button>
          
        </div>
        <div className = "my-2 text-center flex justify-center flex-col items-center"><h4> It’s free and takes less than a minute! </h4></div>
      </div>
      <div className="bg-white h-1 opacity-15"></div>
      <div className="text-white container mx-auto">
        <h1 className=" text-3xl font-bold text-center my-14">
          Your Fans can buy you a brew!
        </h1>
        <div className="flex gap-5 justify-around my-24">
          <div className="item space-y-3 flex flex-col justify-center text-center items-center">
          <img
              className=" bg-slate-200 rounded-full p-2  text-black"
              src="/staff (1).gif"
              width={88}
              alt=""
            />
            
            <p className = "font-bold">Fund yourself</p>
            <p className = "text-center">Fans are available</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center text-center items-center">
            <img
              className=" bg-slate-200 rounded-full p-2  text-black"
              src="/Coin.gif"
              width={88}
              alt=""
            />
            <p className = "font-bold">Fund yourself</p>
            <p className = "text-center">Fans are available</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center text-center items-center">
          <img
              className=" bg-slate-200 rounded-full p-2 text-black"
              src="/team.gif"
              width={88}
              alt=""
            />
            
            <p className = "font-bold">Fans wants to help </p>
            <p className = "text-center">Fans are available</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-15"></div>

      <div className="text-white container mx-auto pb-32 pt-12">
      <div className="text-center text-slate-400 gap-0 text-xl my-0 "><h5>POSTS, AUDIO & EMAIL</h5></div>
        <h1 className=" text-3xl font-bold text-center mt-4 mb-8">
        Publish your best work
        </h1>
        <h3 className="flex  flex-col justify-center items-center w-76"> <span>BrewBuddy makes it easy to publish free and exclusive content. </span>   
          Try different formats such as audio, and make it members-only to drive more memberships.</h3>
        <div className="flex gap-5 justify-around ">
          {/* <div className="item space-y-3 flex flex-col justify-center text-center items-center">
            
          <img
              className=" bg-slate-200 rounded-full p-2  text-black"
              src="/staff (1).gif"
              width={88}
              alt=""
            />
            
            <p className = "font-bold">Fund yourself</p>
            <p className = "text-center">Fans are available</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center text-center items-center">
            <img
              className=" bg-slate-200 rounded-full p-2  text-black"
              src="/Coin.gif"
              width={88}
              alt=""
            />
            <p className = "font-bold">Fund yourself</p>
            <p className = "text-center">Fans are available</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center text-center items-center">
          <img
              className=" bg-slate-200 rounded-full p-2 text-black"
              src="/team.gif"
              width={88}
              alt=""
            />
            
            <p className = "font-bold">Fans wants to help </p>
            <p className = "text-center">Fans are available</p>
          </div> */}
          
          <div className="mt-44 flex flex-col xs:hidden items-center justify-center" data-v-e2534bb2=""><img src="https://cdn.buymeacoffee.com/assets/img/homepage/images/posts_v8.png" onerror="this.setAttribute('data-error', 1)" width="824" height="481" alt="Posts" loading="lazy" data-nuxt-img="" srcset="https://cdn.buymeacoffee.com/assets/img/homepage/images/posts_v8.png 1x, https://cdn.buymeacoffee.com/assets/img/homepage/images/posts_v8.png 2x" class="max-w-824 w-full h-auto" data-v-e2534bb2=""/></div>
          
          
        </div>
      </div>
    </>
  );
}
