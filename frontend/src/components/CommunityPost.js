import React, {useState} from 'react'

const CommunityPost = ({owner, post, setPost}) => {
  return (
    <div>
        {owner&&<div className="flex gap-3 items-center my-[1vw] justify-start">
            <img className="h-16 w-16 rounded-full" src={owner.icon ? owner.icon : "/logo192.png"} alt="image"></img>
            <div>
                <h2 className='font-medium font-dmsans'>{owner.name}</h2>
                <span className='font-light font-dmsans'>{owner.position}</span>
            </div>
        </div>}
        {post &&<div className="ml-[-3.5vw] bg-transparent"> <PostReadOnly post={post}  setPost={setPost}  /></div>}
        <div className="flex flex-row w-[inherit] gap-[0.5vw] ">
            <div className="w-[196px] h-10 pl-2 pr-4 py-2 bg-blue-600 bg-opacity-10 rounded-lg justify-center items-center gap-2 inline-flex">
                <div className="w-6 h-6 relative" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9.25279 19.125H5.89121C5.32696 19.125 4.87069 18.6645 4.87503 18.0994L4.92149 11.9923C4.92577 11.4332 5.37949 10.9821 5.93773 10.9821H9.25279M9.25279 19.125H16.2469C16.7232 19.125 17.1356 18.7937 17.239 18.3281L19.1004 11.0465C19.2414 10.4108 18.7585 9.80769 18.1083 9.80769H15.2723C14.6319 9.80769 14.129 9.37832 14.2531 8.74912L14.7776 6.09017C14.9017 5.46096 14.4209 4.875 13.7806 4.875H13.5808C13.2194 4.875 12.8852 5.06734 12.703 5.37995L9.25279 10.9821M9.25279 19.125V10.9821" stroke="#0578FB" stroke-width="1.5"/>
                    </svg>
                </div>
                <div className="text-blue-600 text-sm font-medium font-dmsans leading-normal">{post && post.likes}</div>
            </div>
            <div className="w-[196px] h-10 pl-2 pr-4 py-2 bg-blue-600 bg-opacity-10 rounded-lg justify-center items-center gap-2 inline-flex">
                <div className="w-6 h-6 relative" >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5.25 17.1632L5.25 8.87501C5.25 6.66586 7.04087 4.875 9.25001 4.87501L14.75 4.87502C16.9591 4.87502 18.75 6.66588 18.75 8.87502L18.75 12.4861C18.75 14.6952 16.9591 16.4861 14.75 16.4861L8.88461 16.4861L6.83752 17.9724C6.17646 18.4523 5.25 17.9801 5.25 17.1632Z" stroke="#0578FB" stroke-width="1.5"/>
                    </svg>
                </div>
                <div className="text-blue-600 text-sm font-medium font-dmsans leading-normal">1.1k</div>
            </div>
            <div className="w-[196px] h-10 pl-2 pr-4 py-2 bg-blue-600 bg-opacity-10 rounded-lg justify-center items-center gap-2 inline-flex">
                <div className="w-6 h-6 relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M10.1057 4.22687C9.74773 4.01843 9.28858 4.13963 9.08014 4.49758C8.8717 4.85553 8.99291 5.31468 9.35085 5.52311L10.1057 4.22687ZM12.5 6.48901L13.1249 6.90367C13.2391 6.73158 13.2773 6.52002 13.2304 6.31888C13.1836 6.11774 13.0559 5.94482 12.8774 5.84089L12.5 6.48901ZM10.212 8.58075C9.983 8.9259 10.0771 9.39135 10.4223 9.62036C10.7674 9.84937 11.2329 9.75522 11.4619 9.41007L10.212 8.58075ZM17.2969 7.58074C16.9896 7.30302 16.5153 7.32702 16.2376 7.63434C15.9599 7.94166 15.9839 8.41593 16.2912 8.69364L17.2969 7.58074ZM9.35085 5.52311L12.1226 7.13713L12.8774 5.84089L10.1057 4.22687L9.35085 5.52311ZM11.8751 6.07435L10.212 8.58075L11.4619 9.41007L13.1249 6.90367L11.8751 6.07435ZM18.125 12.807C18.125 15.8758 15.613 18.375 12.5 18.375V19.875C16.4287 19.875 19.625 16.7169 19.625 12.807H18.125ZM12.5 18.375C9.38703 18.375 6.875 15.8758 6.875 12.807H5.375C5.375 16.7169 8.57134 19.875 12.5 19.875V18.375ZM6.875 12.807C6.875 9.73823 9.38703 7.23901 12.5 7.23901V5.73901C8.57134 5.73901 5.375 8.89713 5.375 12.807H6.875ZM16.2912 8.69364C17.42 9.71373 18.125 11.179 18.125 12.807H19.625C19.625 10.7349 18.7253 8.87159 17.2969 7.58074L16.2912 8.69364Z" fill="#0578FB"/>
                </svg>
                </div>
                <div className="text-blue-600 text-sm font-medium font-dmsans leading-normal">1.1k</div>
            </div>
            <div className="w-[196px] h-10 pl-2 pr-4 py-2 bg-blue-600 bg-opacity-10 rounded-lg justify-center items-center gap-2 inline-flex">
                <div className="w-6 h-6 relative" >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M14.813 8.10558C15.1347 9.09362 16.0633 9.80769 17.1587 9.80769C18.5208 9.80769 19.625 8.70347 19.625 7.34135C19.625 5.97922 18.5208 4.875 17.1587 4.875C15.7965 4.875 14.6923 5.97922 14.6923 7.34135C14.6923 7.6081 14.7347 7.86496 14.813 8.10558ZM14.813 8.10558L9.9929 10.5194M9.9929 10.5194C9.57037 9.76755 8.76518 9.25962 7.84135 9.25962C6.47922 9.25962 5.375 10.3638 5.375 11.726C5.375 13.0881 6.47922 14.1923 7.84135 14.1923C8.71817 14.1923 9.48812 13.7348 9.92547 13.0454M9.9929 10.5194C10.432 11.3006 10.4057 12.2884 9.92547 13.0454M9.92547 13.0454L15.0166 15.4354M15.0166 15.4354C14.8102 15.7959 14.6923 16.2135 14.6923 16.6587C14.6923 18.0208 15.7965 19.125 17.1587 19.125C18.5208 19.125 19.625 18.0208 19.625 16.6587C19.625 15.2965 18.5208 14.1923 17.1587 14.1923C16.2417 14.1923 15.4416 14.6927 15.0166 15.4354Z" stroke="#0578FB" stroke-width="1.5"/>
                </svg>
                </div>
                <div className="text-blue-600 text-sm font-medium font-dmsans leading-normal">1.1k</div>
            </div>
        </div>
    </div>
  )
}

export default CommunityPost
