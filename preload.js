// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementsByClassName(selector)
    if (element) element[0].innerText = text
  };

  const convertToMinute = (seconds) => {
    return [Math.floor(seconds / 60), seconds % 60]
  };

  const convertToString = (numbers) => {
    return numbers < 10 ? `0${numbers}` : numbers;
  }
  
  const convertResult = (minutes, seconds) => {
    return `${convertToString(minutes)}:${convertToString(seconds)}`
  };

  let duration = 600;
  replaceText(`countDown`, convertResult(...convertToMinute(duration)))

  const countDown = () => {
    console.log("gi the")
    if (duration) {
      replaceText(`countDown`, convertResult(...convertToMinute(--duration)))
    }
  }

  // setInterval((countDown), 1000);
})