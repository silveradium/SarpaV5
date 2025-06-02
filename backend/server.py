from flask import Flask, jsonify, send_from_directory, request
from flask_cors import CORS
import tensorflow as tf
from tensorflow.keras.preprocessing import image
import numpy as np
from PIL import Image
import io
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

IMAGE_FOLDER = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'images')

# Load your model
model = tf.keras.models.load_model('../model/my_model4.keras')

def prepare_img(file):
#   img_path = test_path
  img = image.load_img(file, target_size=(224, 224))
  image_array = image.img_to_array(img)
  img_array_expanded = np.expand_dims(image_array, axis=0)
  return tf.keras.applications.mobilenet_v2.preprocess_input(img_array_expanded)

processed_img = prepare_img("images/Russell_s Viper1.jpg")
predictions = model.predict(processed_img)
print(predictions)

@app.route('/predict', methods=['POST'])
def predict():
    # Get the image file from the request
    img_file = request.files.get('image')
    print(img_file)
    if img_file is None:
        return jsonify({'error': 'No image provided'}), 400

    # Read and preprocess the image
    img = Image.open(io.BytesIO(img_file.read()))
    img = img.resize((224, 224))  # Adjust size to what your model expects
    img_array = np.array(img) / 255.0  # Normalize image
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension

    # Make prediction
    predictions = model.predict(img_array)
    print(predictions)
    # Process predictions if needed

    return jsonify({'predictions': predictions.tolist()})


@app.route('/snakes', methods=['GET'])
def get_snakes():
    snakes = [
    {
        "id": '6',

        "english":
        {
            "name": "Russel's Viper",
            "scientific": '-Daboia russelii',
            "description": 'Highly venomous Asian snake with diamond patterns, major cause of snakebite fatalities.',
            "image": 'http://127.0.0.1:5000/images/Russell_s Viper1.jpg',
        },
        "sinhala":
        {
            "name": "රසෙල්ස් වයිපර්",
            "scientific": '-ඩබොයියා රසෙල්ස්ලි',
            "description": 'බුදුවාදය අනුව දමන ආසියානු සත්වයක්, සත්වයේ මහා මාර්ගයක්.',
            "image": 'http://127.0.0.1:5000/images/Russell_s Viper1.jpg',
        },
        "tamil":
        {
            "name": "ரஸ்ஸெல்ஸ் வைபர்",
            "scientific": '-டபோயா ரஸ்ஸெல்லீ',
            "description": 'பெரும் விஷம் உள்ள ஆசிய பாம்பு, பாம்பு கொலைகளின் முக்கிய காரணமாகும்.',
            "image": 'http://127.0.0.1:5000/images/Russell_s Viper1.jpg',
        },

    },
    {
        "id": "2",
        "english": {
            "name": "Common Krait",
            "scientific": "-Bungarus caeruleus",
            "description": "Highly venomous elapid of Indian subcontinent, slender with black and white bands.",
            "image": "http://127.0.0.1:5000/images/common krait.jpg"
        },
        "sinhala": {
            "name": "සාම්පාදු ක්‍රෙයිට්",
            "scientific": "-බුන්ගරුස් කැරුලියස්",
            "description": "ඉන්දියානු උපහරණ සිත්වයේ විශාලත්වයානු පැම්බුදු බුදුවාදයක්, කළු සහ සුදු පැටියාවන් සහිතවයාන.",
            "image": "http://127.0.0.1:5000/images/common krait.jpg"
        },
        "tamil": {
            "name": "பொது கிரைட்",
            "scientific": "-புங்கரஸ் சேருலியஸ்",
            "description": "இந்திய உபமண்டலத்தின் அதிசய விஷமான எலபிட், கரும்புத்துண்டுகளுடன் நெருக்கமானது.",
            "image": "http://127.0.0.1:5000/images/common krait.jpg"
        }
    },
    {
        "id": "3",
        "english": {
            "name": "Banded Kukri Snake",
            "scientific": "-Oligodon arnensis",
            "description": "A non-venomous colubrid snake named for its curved teeth used for slicing eggs and prey.",
            "image": "http://127.0.0.1:5000/images/banded kukri snake.jpg"
        },
        "sinhala": {
            "name": "බැන්ඩ්ඩෙඩ් කුක්රි නයියා",
            "scientific": "-ඔලිගොඩොන් ඇර්නෙන්සිස්",
            "description": "අවිශාලත්වයානු කොලුබ්රිඩ් පැම්බුදු බුදුවාදයක්, එක්ස් සහ බැන්ඩ් පැටියාවන් සහිතවයාන.",
            "image": "http://127.0.0.1:5000/images/banded kukri snake.jpg"
        },
        "tamil": {
            "name": "பாண்டெட் குக்ரி பாம்பு",
            "scientific": "-ஒலிகோடான் ஆர்னென்சிஸ்",
            "description": "அரிசியான கொடியான பாம்பு பெயர், முட்டுகள் மற்றும் விலங்குகளை சிக்குவதற்கு பயன்படுத்தப்படும்.",
            "image": "http://127.0.0.1:5000/images/banded kukri snake.jpg"
        }
    },
    {
        "id": "4",
        "english": {
            "name": "Olive Keelback",
            "scientific": "-Atretium schistosum",
            "description": "Mildly venomous natricine, olive-green, common near South and Southeast Asian waters.",
            "image": "http://127.0.0.1:5000/images/olive keelback.jpg"
        },
        "sinhala": {
            "name": "කුරුලා පැටියා",
            "scientific": "-ඇට්රේටියම් ෂිස්ටොසම්",
            "description": "පැම්බුදු බුදුවාදයක්, කුරුලා-කසාලා, දකුණු සහ මධ්‍යම ආසියාවෙහි පැම්බුදු බුදුවාදයක්.",
            "image": "http://127.0.0.1:5000/images/olive keelback.jpg"
        },
        "tamil": {
            "name": "ஒலிவ் கீல்பேக்",
            "scientific": "-அட்ரெடியம் ஷிஸ்டோசம்",
            "description": "மிதமான விஷம் உள்ள நேட்ரிசின், ஒலிவ்-கிளீன், தெற்கு மற்றும் தெற்கு ஆசிய நீர்களுக்கு அரண்மையானது.",
            "image": "http://127.0.0.1:5000/images/olive keelback.jpg"
        }
    },
    {
        "id": "5",
        "english": {
            "name": "Green Pit Viper",
            "scientific": "-Trimeresurus trigonocephalus",
            "description": "Moderately venomous, endemic to Sri Lanka, bright green with heat-sensing pits.",
            "image": "http://127.0.0.1:5000/images/green pit viper.jpg"
        },
        "sinhala": {
            "name": "කෙසෙලා පැටියා",
            "scientific": "-ට්‍රිමෙරෙසුරස් ට්‍රිගොනොස්ලස්",
            "description": "මධ්‍යම බුදුවාදයක්, ශ්‍රී ලංකාවෙහි ප්‍රදේශීය, හිරස් අනුරාධ පැටියාවන්.",
            "image": "http://127.0.0.1:5000/images/green pit viper.jpg"
        },
        "tamil": {
            "name": "பச்சை பிட் வைபர்",
            "scientific": "-ட்ரிமெரெஸுருஸ் ட்ரிகோனோசெபாலஸ்",
            "description": "மிதமான விஷம் உள்ளது, இலங்கைக்கு உள்ளது, வெள்ளை பிட்டுகளுடன் படிக்கும் பச்சை.",
            "image": "http://127.0.0.1:5000/images/green pit viper.jpg"
        }
    },
    {
        "id": "1",
        "english": {
            "name": "Trinket Snake",
            "scientific": "-Coelognathus helena",
            "description": "Non-venomous, attractively patterned South Asian colubrid with docile nature.",
            "image": "http://127.0.0.1:5000/images/trinket snake.jpg"
        },
        "sinhala": {
            "name": "ට්‍රින්කෙට් පැටියා",
            "scientific": "-කොලොග්නැතස් හෙලෙනා",
            "description": "අවිශාලත්වයානු, පැම්බුදු බුදුවාදයක්, සුදු සහ රතු පැටියාවන් සහිතවයානු විශාලත්වයානු කොලුබ්රිඩ් පැම්බුදු බුදුවාදයක්.",
            "image": "http://127.0.0.1:5000/images/trinket snake.jpg"
        },
        "tamil": {
            "name": "ட்ரிங்கெட் பாம்பு",
            "scientific": "-கோலோக்நாதஸ் ஹெலேனா",
            "description": "அருமையான வண்ணம் உள்ள தெற்காசிய கொடியான பாம்பு, அமைதியான பொருள்.",
            "image": "http://127.0.0.1:5000/images/trinket snake.jpg"
        }
    },
    {
        "id": "7",
        "english": {
            "name": "Saw-scaled Viper",
            "scientific": "-Echis carinatus",
            "description": "Highly venomous, inhabits dry Middle East and Indian subcontinent, known for 'sizzling' sound.",
            "image": "http://127.0.0.1:5000/images/saw scaled viper.jpg"
        },
        "sinhala": {
            "name": "සෝ-ස්කැල්ඩ් වයිපර්",
            "scientific": "-ඊචිස් කැරිනැටස්",
            "description": "බුදුවාදය අනුව, මැදපෙරදිග සහ ඉන්දියානු උපහරණ සිත්වයේ, 'හීනිය' ශබ්දය ලබාගන්නා.",
            "image": "http://127.0.0.1:5000/images/saw_scaled viper.jpg"
        },
        "tamil": {
            "name": "சாஸ்-ஸ்கேல்டு வைபர்",
            "scientific": "-எசிஸ் காரினேட்டஸ்",
            "description": "மிதமான விஷம், நடுநிலையான மேற்கத்திய மற்றும் இந்திய உபமண்டலத்தில் வாழும், 'சீசிங்' ஒலியுடன் பிரபலமானது.",
            "image": "http://127.0.0.1:5000/images/saw_scaled viper.jpg"
        }
    }
]
    return jsonify(snakes)

@app.route('/snakeResults', methods=['GET'])
def get_snake_results():
    snake_results = [
        {
            "name": "Boie's Rough-Sided Snake",
            "scientific": "-Aspidura trachyprocta",
            "image": 'http://127.0.0.1:5000/images/Russell_s Viper1.jpg',
        },
        {
            "name": "Common Indian Krait",
            'scientific': "-Bungarus caeruleus",
            "image": 'http://127.0.0.1:5000/images/Russell_s Viper1.jpg',
        },
        {
            "name": "Common Krait",
            'scientific': "-Bungarus caeruleus",
            "image": "http://127.0.0.1:5000/images/common krait.jpg"
        },
        {
            "name": "Common Kukri Snake",
            "scientific": "-Oligodon arnensis",
            "image": "http://127.0.0.1:5000/images/common krait.jpg"
        },
        {
            "name": "Green Pit Viper",
            "scientific": "-Trimeresurus trigonocephalus",
            "image": "http://127.0.0.1:5000/images/green pit viper.jpg"
        },
        {
            "name": "Olive Keelback",
            "scientific": "-Atretium schistosum",
            "image": "http://127.0.0.1:5000/images/olive keelback.jpg"
        },
        {
            "name": "Russel's Viper",
            "scientific": '-Daboia russelii',
            "image": 'http://127.0.0.1:5000/images/Russell_s Viper1.jpg',
        }
    ]

    return jsonify(snake_results)

@app.route('/images/<filename>')
def serve_image(filename):
    return send_from_directory(IMAGE_FOLDER, filename)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)