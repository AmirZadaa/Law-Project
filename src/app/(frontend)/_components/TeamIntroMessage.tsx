import React from 'react'

const TeamIntroMessage = ({ title, details }: { title: string; details: string }) => {
  return (
    <div className="bg-foreground flex flex-col items-center">
      <div className="flex justify-center text-text pt-20 max-xl:pt-16 max-sm:pt-10 pb-2">
        <div className="bg-text h-[1px] w-10 translate-y-3.5" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
          />
        </svg>
        <div className="bg-text h-[1px] w-10 translate-y-3.5" />
      </div>
      <div className="text-center w-1/2 text-xl max-2xl:text-lg max-lg:w-[70%] max-md:text-base max-md:w-[80%] max-sm:w-full max-sm:px-2 pb-24 max-xl:pb-16 max-sm:pb-10">
        <h1 className="text-2xl font-bold pb-4 max-sm:text-xl">{title}</h1>
        {details}
      </div>
    </div>
  )
}

export default TeamIntroMessage
