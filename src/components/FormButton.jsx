import React from "react";

export const FormButton = ({onClick}) => {
    return (
        <button type='submit' onClick={onClick} className="button-color absolute right-0 top-[1px] flex w-16 justify-center  rounded-3xl p-[14px] hover:translate-x-0.5 hover:opacity-60 xl:w-24">
            <img src="../images/icon-arrow.svg" alt="arrow" />
        </button>
    );
};
