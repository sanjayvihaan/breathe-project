const Spinner = () => {
    return (
        <button type="button" className="bg-[#2E9844] p-2 flex justify-center align-middle" disabled>
            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                {/* <!-- ... --> */}
            </svg>
            <span className="text-[#fff]">Processing...</span>
        </button>


    )
}

export default Spinner;