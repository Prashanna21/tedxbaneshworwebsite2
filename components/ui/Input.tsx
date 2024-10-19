import React from "react";

const Input = ({
    placeHolder,
    name="",
    type,
    customCss = "",
    required = true,
}) => {
    return(
        <input required={required} name={name} type={type} placeholder={placeHolder} className={`rounded-md border-none placeholder:text-[#827979] placeholder:text-[15px] md:placeholder:text-[16px] text-black-c1 md:px-2 md:py-2 px-1.5 py-1.5 text-lg focus:ring-0 focus:outline-none ${customCss}`}/>
    )
}

export default Input;