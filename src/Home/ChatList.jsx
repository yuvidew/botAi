import React from 'react'

export const ChatList = () => {
    return (
        <div className='h-[83%] flex items-end m-auto w-[95%]'>
            <ul className='w-full'>
                <li className=' flex items-center gap-x-5 shadow-2xl bg-[#D7C7F421] rounded-lg py-4 px-5 mb-1'>
                    <div className='w-[4.5rem] h-[4.5rem] rounded-full overflow-hidden'>
                        <img className=' w-full h-full  object-cover scale-125' src="https://s3-alpha-sig.figma.com/img/5bb6/e9c7/c4b35009e0a7a2836ff42eea14866b03?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PlDCV60objM5bmjqNp3LiV~GPeRETNlIj-Xv7QUnusTQegKm9pRLnhPC1Yh~JigiFjJqJUgYKPgtlvihmMd3qUW5k6F5SxU9eylVBahPCw1DwlrWWn3Gvmtcjhw44H6ufHmyMshwxTU~RFWbGRTfzNsytpCFY5ksJAlh9XLK5FXfAQxDprbpzFgq3eOjfODjB9EVnexdHjKAlMvNSdhsnoJltAuJoHruZZ67LPUTHy6WPkAm~Sv1a-pMoqL6E-g9JCf3J61OHrTQfM7W50SLYmHcgKcO4Wuv5cxOgH3oQqBaOw4M0AunEuYC9j9-yYypN51ZO-Tihg1SqZ5z0IFuYw__" alt="" />
                    </div>
                    <div className=''>
                        <h1 className=' font-medium text-[1.2rem] pb-2'>You</h1>
                        <p className=' pb-2'>How are you ? </p>
                        <p className=' text-[.8rem] text-stone-700'>text</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
