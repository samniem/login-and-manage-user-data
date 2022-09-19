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

## 4. Minimal UI State Representation

## 5. Identify Where the States Live

## 6. Inverse Dataflow
