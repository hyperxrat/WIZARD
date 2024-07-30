import speech_recognition as sr
import pyttsx3

def speak(text):
    engine = pyttsx3.init()
    engine.say(text)
    engine.runAndWait()

def listen():
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening...")
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.listen(source)

    try:
        print("Recognizing...")
        command = recognizer.recognize_google(audio).lower()
        print(f"You said: {command}")
        return command
    except sr.UnknownValueError:
        print("Sorry, I didn't get that. Could you please repeat?")
        return ""
    except sr.RequestError as e:
        print(f"Error connecting to Google Speech Recognition service: {e}")
        return ""

def handle_command(command):
    if "hello" in command:
        speak("Hello! How can I assist you?")
    elif "goodbye" in command:
        speak("Goodbye! Have a great day.")
    else:
        speak("I'm not sure how to respond to that.")

if __name__ == "__main__":
    speak("I AM DAVID GOGGINS, THE TOUGHEST MAN IN THE WORLD, THEY DONT KNOW ME SUN")

    while True:
        command = listen()
        if command:
            handle_command(command)
