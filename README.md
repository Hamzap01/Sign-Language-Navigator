# ✋ Sign Language Navigator

A real-time computer vision application that translates sign language gestures into text using webcam-based hand tracking.

## Overview
Sign Language Navigator uses MediaPipe for 21-point hand landmark detection and OpenCV for video processing. The system extracts geometric features (finger states, distances, angles) and applies rule-based logic to classify gestures in real time.

## Tech Stack
- Python  
- OpenCV  
- MediaPipe  
- NumPy  

## Pipeline
1. Capture webcam frame  
2. Detect hand landmarks  
3. Extract spatial features  
4. Classify gesture  
5. Display translated text  

## Future Improvements
- ML-based gesture classification  
- Full ASL alphabet support  
- Sentence prediction (NLP)  
- Speech output  
