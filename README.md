# Infinite Scrolling React App
## Overview
This project is a simple React JS application that implements infinite scrolling functionality. The app fetches a list of items from a mock API (or a real API endpoint if configured) and loads more items automatically as the user scrolls down the page, creating an infinite scroll experience.

## Features
* Infinite Scrolling: Automatically loads more data as the user scrolls to the bottom of the page.
* Responsive Design: Works on both mobile and desktop devices.
* Loading Indicator: Shows a loading message while fetching data.

## How It Works
The infinite scrolling functionality is achieved by detecting when the user scrolls near the bottom of the page and triggering an API call to fetch more items. Here’s a summary of the logic:

* Scroll Detection: An event listener on the window object detects when the user scrolls near the bottom of the page.
* Data Fetching: A function makes a GET request to the API endpoint to retrieve additional data.
* State Management: New data is added to the existing list in the component’s state, allowing the app to render the new items seamlessly.
