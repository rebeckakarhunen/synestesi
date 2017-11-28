const picker = document.getElementById("color-picker")
class Color {
	constructor(red, green, blue) {
		this.red = red
		this.green = green
		this.blue = blue
	}
	toString() {
		return "rgb(" + this.red + ", " + this.green + ", " + this.blue + ")"
	}
	getComplement() {
		return new Color(255 - this.red, 255 - this.green, 255 - this.blue)
	}
}
function interpolate(value, from, to) {
	return Math.round(from * (1 - value) + to * value)
}
const result = []
picker.onclick = (ev) => {
//	console.log("x " + ev.offsetX)
	const p = ev.offsetX / picker.clientWidth
	console.log("p " + p * 100 + "%")
	let color = new Color(0, 0, 0)
	if (p < 1 / 10) {
		const x = p * 10
		console.log(x)
		color = new Color(interpolate(x, 0, 112), interpolate(x, 0, 28), interpolate(x, 0, 28))
		console.log("1")
	} else if (p < 2 / 10) {
		const x = (p - 1 / 10) * 10
		console.log(x)
		color = new Color(interpolate(x, 112, 216), interpolate(x, 28, 142), interpolate(x, 28, 13))
		console.log("2")
	} else if (p < 3 / 10) {
		const x = (p - 2 / 10) * 10
		console.log(x)
		color = new Color(interpolate(x, 216, 230), interpolate(x, 142, 230), interpolate(x, 13, 22))
		console.log("3")		
	} else if (p < 4 / 10) {
		const x = (p - 3 / 10) * 10
		console.log(x)
		color = new Color(interpolate(x, 230, 0), interpolate(x, 230, 128), interpolate(x, 22, 0))
		console.log("4")		
	} else if (p < 5 / 10) {
		const x = (p - 4 / 10) * 10
		console.log(x)
		color = new Color(interpolate(x, 0, 7), interpolate(x, 128, 144), interpolate(x, 0, 218))
		console.log("5")		
	} else if (p < 6 / 10) {
		const x = (p - 5 / 10) * 10
		console.log(x)
		color = new Color(interpolate(x, 7, 75), interpolate(x, 144, 0), interpolate(x, 218, 130))
		console.log("6")	
	} else if (p < 7 / 10) {
		const x = (p - 6 / 10) * 10
		console.log(x)
		color = new Color(interpolate(x, 75, 202), interpolate(x, 0, 98), interpolate(x, 130, 202))
		console.log("7")	
	} else if (p < 8 / 10) {
		const x = (p - 7 / 10) * 10
		console.log(x)
		color = new Color(interpolate(x, 202, 233), interpolate(x, 98, 20), interpolate(x, 202, 20))
		console.log("8")	
	} else if (p < 9 / 10) {
		const x = (p - 8 / 10) * 10
		console.log(x)
		color = new Color(interpolate(x, 233, 255), interpolate(x, 20, 255), interpolate(x, 20, 255))
		console.log("9")	
	} else {
		const x = (p - 9 / 10) * 10
		console.log(x)
		color = new Color(interpolate(x, 255, 128), interpolate(x, 255, 128), interpolate(x, 255, 128))
		console.log("10")	
	
	}
	// console.log(color)
	console.log(color.toString())
	console.log("%c vald ", "background: " + color.toString() + "; color: " + color.getComplement().toString());
	result.push({ word: wordElement.innerText, color, position: p })
	nextWord()
}
let timeout
const wordElement = document.getElementById("word")
function nextWord() {
	if (timeout)
		clearTimeout(timeout)
	if (words.length == 0) {
		document.getElementById("test").style = "display: none;"
		const resultElement = document.getElementById("result")
		resultElement.style = "display: table;"
		resultElement.innerHTML = result.map(r => `<tr><td>${r.word}</td><td style="background: ${r.color ? r.color.toString() : "inherit"}; color: ${r.color ? r.color.getComplement().toString() : "inherit"}">${(r.position ? (Math.round(r.position * 100) / 100).toLocaleString() : "")}</td></tr>`).join("\n")
	} else {
		const index = Math.floor(Math.random() * words.length)
		wordElement.innerText = words[index]
		words.splice(index, 1)
		timeout = setTimeout(() => {
			result.push({ word: wordElement.innerText })
			nextWord()
		}, 10000)
	}
}
document.addEventListener('DOMContentLoaded', function() {
	nextWord()
}, false);
