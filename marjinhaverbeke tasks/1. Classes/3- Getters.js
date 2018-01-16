// Classes.3:
// Getters
//
// The way the verb property is set per instance rather than per class is kind of awkward
// Refactor the code to use a getter (get verb() { ... }) instead of an instance property.

class Speaker {
    constructor(name, verb) {
        this.name = name
        this._verb = verb || "says"
    }
    speak(text) {
        console.log(this.name + " " + this.verb + " '" + text + "'")
    }

    get verb() {
        return this._verb
    }
}

class Shouter extends Speaker {
    constructor(name) {
        super(name, "shouts")
    }

    speak(text) {
        super.speak(text.toUpperCase())
    }
}

new Shouter("Dr. Loudmouth").speak("hello there")
