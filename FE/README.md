# Visitvarmland Tipsblankett (Shit in shit out)
React vite application

# Contributors: 
    Fredrick : https://github.com/Fredrick665
    Marko : https://github.com/MapYh
    Christian : https://github.com/Christian1429

# ------ Installation ------
we use mongoDB for testing
add:
    BE env:
    MONGODB_URI=mongodb://localhost:27017/turid
    PORT=2000
    NODE_ENV=development
---->
    npm i both directories
        cd fe
            npm run start:all

# ------ Usage ------
The form is divided into multiple steps:

    Step 1: Contact Information: Input name, email, and phone number.
    Step 2: Organizer Information: Provide details about the event organizer.
    Step 3: Event Details: Add event name, date, location, description, gdpr consent and submit.

    Global: 
        Translation button Swedish and English.
        Close button X redirect to -> https://www.visitvarmland.com
    others:
        GDPR button i redirect to -> https://www.regionvarmland.se/regionvarmland/om-regionen/personuppgiftsbehandling

# ------ State Management ------
    The application uses React's useState and useContext hooks to manage form data globally. The FormDataContext component (formData) stores all form data, making it accessible across different components.

# ------ Form Handling ------
    Form wraps the application and declare all components, making it easy to move components around and style them individually.
    Use the Next and Back buttons to navigate between steps. The Send button submits the form data to handleSubmit.js

# ------ API ------
    GetFrom.js: Fetches initial data. // local dummy data, create your own data.
    PostForm.js: Submits the completed formData to the API.
    
# ------ Translations ------
i18n:
    classnames are used to translate the form's labels and buttons.

├── public/
│   ├── assets/               # Static assets
├── src/
│   ├── api/                  # API interaction files
│   │   ├── GetFrom.js        # Fetch data from the API
│   │   ├── PostForm.js       # Submit form data to the API
│   ├── components/           # Reusable UI components
│   ├── ├── buttons/          # All buttons     
│   │   ├── ClientExist.jsx   # Adding existing client onto theform
│   │   ├── ClientNew.jsx     # Create a new client
│   │   ├── Contact.jsx       # Create contact information
│   │   ├── DatePicker.jsx    # Date selection component
│   │   ├── Event.jsx         # Event details form
│   │   ├── ImgUpload.jsx     # Image upload component
│   │   ├── Places.jsx        # Location input component
│   │   ├── Price.jsx         # Pricing information component
│   ├── context/              # Global state management
│   │   ├── FormDataContext.jsx
│   ├── pages/                # Main form pages
│   ├── utils/                # Utility functions
│   │   ├── formUtils.js      # Form-related utilities
│   │   ├── handleSubmit.js   # Form submission logic
│   │   ├── mappers.js        # Data transformation functions
│   ├── App.jsx               # Main application component
│   ├── i18n.js               # Translation

