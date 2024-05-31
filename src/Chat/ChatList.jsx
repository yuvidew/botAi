import React, { useState } from 'react'
import { format } from 'date-fns';
import { ThumbsDown, ThumbsUp } from 'lucide-react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

export const ChatList = ({
    chats
}) => {
    const now = new Date()
    const [rating , setRating] = useState(0)    

    return (
        <div className='h-[83%] flex items-end m-auto w-[95%]'>
            <ul className='w-full'>
            {chats.map(ele => (
                <li key={ele.id || ele.ask} className=' flex items-start gap-x-5 shadow-2xl bg-[#D7C7F421] rounded-lg py-4 px-5 mb-[.8rem]'>
                    <div className=' h-full flex items-start '>
                        <div className='w-[3rem]  h-[3rem] rounded-full overflow-hidden'>
                            {ele.ask ? (
                                <img className=' w-full h-full rounded-full object-cover scale-125' src="https://s3-alpha-sig.figma.com/img/5bb6/e9c7/c4b35009e0a7a2836ff42eea14866b03?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PlDCV60objM5bmjqNp3LiV~GPeRETNlIj-Xv7QUnusTQegKm9pRLnhPC1Yh~JigiFjJqJUgYKPgtlvihmMd3qUW5k6F5SxU9eylVBahPCw1DwlrWWn3Gvmtcjhw44H6ufHmyMshwxTU~RFWbGRTfzNsytpCFY5ksJAlh9XLK5FXfAQxDprbpzFgq3eOjfODjB9EVnexdHjKAlMvNSdhsnoJltAuJoHruZZ67LPUTHy6WPkAm~Sv1a-pMoqL6E-g9JCf3J61OHrTQfM7W50SLYmHcgKcO4Wuv5cxOgH3oQqBaOw4M0AunEuYC9j9-yYypN51ZO-Tihg1SqZ5z0IFuYw__" alt="" />
                            ) : (
                                <img className=' w-full h-full rounded-full object-cover scale-125' src="https://s3-alpha-sig.figma.com/img/4b1c/47d6/93bc8af758e2de31a7de8493b52750af?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CmbYJc4tjuWzAp7T1D32ZBzJfMX6k7Ift-oVyb7YCw69X07JZwfvoz~qJyGl85DNC45XEiV4FM~bSIi4uSpWPGPLihjmNtoYXMmGoGC2b~7F-sK2GD2O5~om4r7ldt8e5-rG2j6gl-3IKi-mLkp7F2aPrbn2RtLld1iJbZeQaO8p238Zx0BgAXvWKUwwy0eq0xdGjN48xxTa5HSOB2dWoV62j484miYiIE6GhSt2S3Gh7XmfP998xTGK5T8mo5R-eBjc7LWK2crQLb9uev5ZKMwT8G1D2QAQzoWomSGaFhSS7HsvD3sGx~7yyayyWBNSN20yPAymJn6maT2lLGQQlg__" alt="" />
                            )}
                        </div>
                    </div>
                    <div className='lg:w-[90%] w-[80%]'>
                        <h1 className=' font-medium text-[1.2rem] pb-2'>
                            {ele.ask ? "You" : "Soul AI"}
                        </h1>
                        <p className=' pb-2'>
                            {ele.ask ? ele.ask : ele.response}
                        </p>
                        <div className=' flex items-center gap-3'>
                            <p className=' text-[.8rem] text-stone-700 dark:text-white'>
                                {format(now, 'hh:mm a')}
                            </p>
                            {ele.response && (
                                <>
                                    <div className='flex items-center gap-2'>
                                        <ThumbsUp className=' h-5 w-5' />
                                        <ThumbsDown className=' h-5 w-5' />
                                    </div>
                                </>
                            )}
                        </div>
                        <div className=' flex items-center mt-2'>
                            {ele.response && (
                                <Rating className='h-[2rem] w-[8rem] ' value={rating} onChange={setRating} />
                            )}
                        </div>
                    </div>
                </li>
            ))
            }
            </ul>
        </div>
    )
}
