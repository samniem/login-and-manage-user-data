# Adobe XD and React.JS Login and Manage User Data
Adobe XD and React.js demo project where the user is able to login, and then manage their personal user data and configuration.

## 1. Mock Design with Adobe XD

[Adobe XD design file](https://github.com/samniem/login-and-manage-user-data/blob/main/design/Stellar%20Operations%20Management.xd)

### Login UI
![LoginUI](https://github.com/samniem/login-and-manage-user-data/blob/main/design/design1.png)

### User Data Management UI

![UseDataManagement](https://github.com/samniem/login-and-manage-user-data/blob/main/design/design2.png)

## 2. Component Hierarchy Breakdown

### Login UI Hierarchy

- 0. App
    - 1.Header: Site Name
    - 2.LoginContainer: Contains all of the functionality required for login
        - 3.LoginHeader: Description of what the things below do
        - 4.UserNameInput: Input username to identify yourself
        - 5.PasswordInput: Password associated with the username
        - 6.LoginButton: Send login information from the two fields above

![LoginUIHierarchy](https://github.com/samniem/login-and-manage-user-data/blob/main/design/Login%20View%20Hierarchy.jpg)

### User Data Management Hierarchy

- 0. App
    - 1.Header: Site Name
    - 2.LogoutButton: End session for the current user
    - 3.FormContainer: Contains all of the components used to display and modify user data
        - 4.FormHeader: Displays name of the logged in user
        - 5.FormGrid: A div grid for generic input fields
            - 6.FormField: Contains label for the input and the associated input component
        - 7.FormNotes: A special note field for writing any information
        - 8.FormSend: Update the data as displayed on the form to the backend
    

![ManagementUIHierarchy](https://github.com/samniem/login-and-manage-user-data/blob/main/design/Management%20View%20Hierarchy.jpg)

## 3. Static Version of the Web Site

![StaticImplementation](https://github.com/samniem/login-and-manage-user-data/blob/main/implementation/static-implementation.png)

## 4. Minimal UI State Representation

The minimal state for this particular implementation will involve two stateful objects. The first one will be for if the user is loggedIn or not. This one can be a simple boolean although in a real implementation with a backend and a database we might have needed to use a more comprehensive state. Secondly, we will have a state for the formData tat will contain an assortment of strings. Some of the strings could benefir from TypeScript for setting types with only certain string options. We might implement this in a future version but for the time being we will stick only to JavaScript and React to keep focus on learning and improving only a few things at a time. 


## 5. Identify Where the States Live

Since the loggedIn state is used by the App component by default we must place the loggedIn state either in the App component or a separate component. We have opted for using the App component here. Secondly, the form state is used by subcomponents of the Form component, so we will simply locate the formData state inside the Form component. If the complexity starts increasing during implementation we may consider having a separate component for formData. 

![MinimalState](https://github.com/samniem/login-and-manage-user-data/blob/main/implementation/State.jpg)

### Practical Implementation

The code and UI for loggedIn state looks like below:
![LoggedIn](https://github.com/samniem/login-and-manage-user-data/blob/main/implementation/logged-in-state.png)

![LoginUI](https://github.com/samniem/login-and-manage-user-data/blob/main/implementation/login-ui.png)


And for formData without the inverse dataflow the code and UI look as shown below

![formstate1](https://github.com/samniem/login-and-manage-user-data/blob/main/implementation/form-state-1.png)

![formstate2](https://github.com/samniem/login-and-manage-user-data/blob/main/implementation/form-state-2.png)

![FormUI](https://github.com/samniem/login-and-manage-user-data/blob/main/implementation/form-ui.png)


## 6. Inverse Dataflow

### Form Inverse Dataflow

![FormInverseDataFlow](https://github.com/samniem/login-and-manage-user-data/blob/main/implementation/formInverseDataFlow.png)

### 

![LoggedInInverseDataFlow](https://github.com/samniem/login-and-manage-user-data/blob/main/implementation/loggedinReverseFlow.png)