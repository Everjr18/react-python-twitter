import UserInformation from "../../Hooks/userInformation";
import defaultUser from "../../assets/userDefault.png";

export default function ReplyTweet() {
  const {firs_name,avatar} = UserInformation()
  const joinFirsName = firs_name.replace(/\s+/g, "")
  return (
    <div>
      <article className="py-3 px-4 h-auto">
        <div className="grid grid-cols-[40px,1fr] mr-3 ">
          <div className="w-10 grid justify-items-center mr-3">
          {avatar ? (
                  <img
                    src={avatar}
                    alt=""
                    className="w-10 h-10 rounded-full cursor-pointer"
                  />
                ) : (
                  <img src={defaultUser} className="w-10 h-10 rounded-full" alt="" />
                )}
            <div className="relative">
              <div className="border-l-2 border-gray-400 absolute -left-[1px] -top-2 h-[40px]" />
            </div>
          </div>
          <div className="flex flex-col ml-3">
            <div className="flex justify-between">
              <div className="flex gap-1 items-center">
                <span className="hover:underline">{firs_name || ""}</span>
                <span>@{joinFirsName || ""}</span>

                <span className="mb-2">.</span>
                {/* <span className=""><TimeAgo timestamp={tweet.created} /></span> */}
              </div>
            </div>
            {/* <div className="mb-3 grid">
              <p className=" text-justify hyphens-auto">{contenido}</p>
            </div> */}
            <div className="flex flex-row P-4">
              <p className="text-gray-500">Replying to</p>
              <span className="text-blue-500">@{joinFirsName || ""}</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
