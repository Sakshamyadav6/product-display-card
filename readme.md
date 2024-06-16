# Product Card Display Page

This project is a simple web application that displays product cards fetched from a remote API. Each product card includes details such as the product image, title, description, price, and additional information. The application allows users to search for products by title, view more details about each product in a modal, and delete products from the display.

## Technologies Used

- HTML
- CSS (Bootstrap for styling)
- JavaScript (Vanilla JS)
- Fetch API for data retrieval
- Bootstrap Modal for displaying product details
- Responsive design for mobile and desktop views

## Features

- **Display Products:** Products are fetched from a remote API and displayed as cards.
- **Search Functionality:** Users can search for products by title using a debounce function to improve search performance.
- **Product Details Modal:** Clicking on "More Details" button on each card opens a modal displaying more information about the product.
- **Delete Product:** Each product card includes a "Delete" button that removes the product from the display and closes its associated modal.

## Implementation Details

### HTML Structure

The HTML file (`index.html`) includes:
- A search input field and a button for searching products.
- A container (`<div id="container">`) where product cards are dynamically added.
- Bootstrap modal structure for displaying detailed product information.

### CSS Styling

- Custom CSS styles for product cards, search bar, buttons, and modal appearance.
- Utilized Bootstrap classes for responsive design and layout.

### JavaScript (Vanilla JS)

- Fetch API to retrieve products data asynchronously from a remote endpoint (`https://dummyjson.com/products`).
- Dynamically creating product cards based on fetched data.
- Event listeners for search input changes to filter products dynamically.
- Event listeners for "More Details" buttons to open modals.
- Event listeners for "Delete" buttons to remove products and close associated modals.

### How to Run

1. Clone the repository to your local machine.
2. Open `index.html` in a web browser (Chrome, Firefox, etc.).
3. The product cards will be displayed with the ability to search, view more details, and delete products.

### Improvements and Future Work

- Implementing edit functionality for products.
- Enhancing UI/UX with animations and transitions.
- Adding pagination for better handling of large datasets.
- Implementing sorting and filtering options for products.

### Author

- Saksham Yadav
- infosakshamyadav@gmail.com
