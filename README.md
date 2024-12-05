#### Explore Data

Navigate to data.jsx and explore arrays

#### Create Components

Create three components: Home, Modal, and Sidebar. Render them in App.jsx.

#### Global Context

Setup global context and don't forget to implement a custom hook.

#### Global State Values

Setup two state values, both booleans, isSidebarOpen and isModalOpen. Also, set up four functions to open and close the modal and sidebar. Make all of these values available in the application.

#### Home Component

In Home, set up two buttons and get two functions from global context, openSidebar and openModal. Once the user clicks the button, invoke one of the functions. Set up CSS for the buttons.

#### Modal and Sidebar Component

Create a Modal component and add modal CSS. Repeat the same steps with the Sidebar component.

The flow of the application should look something like this:

- Setup global context and implement a custom hook.

- Setup two state values, both booleans, isSidebarOpen and isModalOpen. Also, set up four functions to open and close the modal and sidebar. Make all of these values available in the application.

- Create three components: Home, Modal, and Sidebar. Render them in App.jsx.

- In Home, set up two buttons and get two functions from global context, openSidebar and openModal. Once the user clicks the button, invoke one of the functions. Set up CSS for the buttons.

- Create a Modal component and add modal CSS. Repeat the same steps with the Sidebar component.

.links a:hover {
background: var(--grey-100);
color: var(--grey-800);
}
.links a svg {
font-size: 1.5rem;
color: var(--grey-500);
margin-right: 1rem;
transition: var(--transition);
}
.links a:hover svg {
color: var(--grey-600);
}
.social-links {
justify-self: center;
display: flex;
padding-bottom: 2rem;
}
.social-links a {
font-size: 1.5rem;
margin: 0 0.5rem;
color: var(--primary-500);
transition: var(--transition);
}
.social-links a:hover {
color: var(--primary-800);
}

```

```
