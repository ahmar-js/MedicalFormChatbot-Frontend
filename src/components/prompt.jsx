import React from 'react'
import sendIcon from "../assets/icons/send.svg";

function prompt() {
  return (
    <>
    <footer className="bg-white fixed bottom-0 w-full rounded-lg shadow dark:bg-gray-800">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <form className="flex items-center sm:ml-64 w-full mx-auto">
              <label htmlFor="voice-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  id="voice-search"
                  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Ask a question"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 end-0 flex items-center pe-3"
                >
                  <img src={sendIcon} alt="Send Icon" />
                </button>
              </div>
            </form>
          </div>
        </footer>
    </>
  )
}

export default prompt