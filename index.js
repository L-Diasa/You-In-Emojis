const myEmojis = ["👩‍💻", "⛷", "🍲"]
const emodwa = document.getElementById("emoji-container")
const emod = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")
const emojiContainer = document.getElementById("emoji-container")

function renderEmojis() {
    const emojiContainer = document.getElementById("emoji-container")
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()

pushBtn.addEventListener("click", function(){
    addEmoji("push")
})

unshiftBtn.addEventListener("click", function(){
    addEmoji("unshift")
})

popBtn.addEventListener("click", function(){
    removeEmoji("pop")
})

shiftBtn.addEventListener("click", function(){
    removeEmoji("shift")
})

emojiContainer.addEventListener("click", function(){
    navigator.clipboard.writeText(emojiContainer.textContent);
    emojiContainer.classList.add("active");
        setTimeout(function() {
            emojiContainer.classList.remove("active");
        }, 2000)
})

function addEmoji(how) {
    const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value) {
        if("unshift" === how) {
            myEmojis.unshift(emojiInput.value)
        }
        if("push" === how) {
            myEmojis.push(emojiInput.value)
        }
        emojiInput.value = ""
        renderEmojis()
    }
}

function removeEmoji(how) {
    if("pop" === how) {
        myEmojis.pop()
    }
    if("shift" === how) {
        myEmojis.shift()
    }
    renderEmojis()
}