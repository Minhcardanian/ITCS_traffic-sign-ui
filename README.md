# ITCS Traffic Sign UI

This is the frontend for a traffic sign detection and classification project as part of the Intro-CS subject at VGU. The frontend, built using React, interfaces with a backend model server to classify uploaded traffic sign images.

## Project Overview

This project aims to classify traffic signs using a deep learning model. The backend model processes images through a pipeline consisting of several stages (Extractor, Localizer, Decoder, Classifier) to identify the type of traffic sign. The frontend’s role is to provide a user-friendly interface for uploading images, interacting with the model, and displaying results.

**Key steps in the classification pipeline (handled by the backend):**
- **Extractor**: Extracts low-level features from the input image using convolutional layers.
- **Localizer**: Employs a spatial transformer to focus on the most relevant regions, improving robustness to shifts and rotations.
- **Decoder**: Refines and reconstructs localized features into a representation suitable for classification.
- **Classifier**: Applies additional layers to produce final class predictions using cross-entropy loss.

The frontend sends user-uploaded images to the backend for inference, then receives predicted classes and feature images (semantic, illumination maps) to display.

## Features

- **Upload and Classify Images**: Drag-and-drop or click-to-upload traffic sign images for real-time classification.
- **Real-Time Results Display**: Shows predicted class and related feature visualizations.
- **Night Mode Toggle**: Switch between light and dark themes for better accessibility and comfort.
- **Dropdown Info Panel**: Access project details, repository links, and more.
- **Click Effects**: Interactive visual feedback on mouse clicks.
- **Responsive UI**: Layout adapts seamlessly to mobile, tablet, and desktop devices.

## Technologies Used

- **React**: Core framework for building the UI.
- **CSS**: For styling and responsive design.
- **HTML5 & JavaScript**: Standard web technologies for a smooth user experience.
- **REST API Integration**: Communicates with the backend server to retrieve classification results.

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/traffic-sign-ui.git
   cd traffic-sign-ui
