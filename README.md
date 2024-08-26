# Person CRUD - FrontEnd

As the name implies, this is the FrontEnd of the CRUD Person!

As this README is a little bigger than usual, here's a easy way to find what you're looking for:

## Table of Contents
- [Project Design](#project-design)
- [Running the Project](#running-the-project)
- [Developing the Project](#developing-the-project)
- [License](#license)


## Project Design

The design for the site was made in Figma and can be viewed here:

![Figma Design](docs/images/design.png)

The project is composed from one main page that would handle all the get requisitions.

![Home Page Design](docs/images/home-design.png)

And we have the differents modals for the following actions:

- Create Person:

![Modal Create Person Design](docs/images/cp-design.png)

- Select Avatar:

![Modal Choose Avatar Design](docs/images/ca-design.png)

- Update Person:

![Modal Update Person Design](docs/images/up-design.png)

- Add Address:

![Modal Add Address Design](docs/images/aa-design.png)

- Update Address:

![Modal Update Address Design](docs/images/ua-design.png)

- Show Person Info:

![Modal Person Info Design](docs/images/pi-design.png)

## Running the Project

As this project need the backEnd to work, we first need to run it.

- Step 1: Clone the backEnd repository if you don't have it.

    ```git clone https://github.com/AurorinhaBoreal/PersonCRUD-BackEnd.git```

- Step 2: Go to the Back End directory and run the Back End Container using docker.

    ```docker compose up -d```

- Step 3: After these steps you can go to the front end directory and run the Front End Container.

  - Step 3.1: Build the image from the Dockerfile.

    ```docker build -t person-frontend .```

  - Step 3.2: Create a container through that image and run it.

    ```docker run -it -p 3000:80 person-frontend```

## Developing the Project

The first part of a project is the organization of it's own creation. This topic will be for that

### US's - MVP

- ✅ [US001] Create Structure for Home Page
  - ✅ [US001-1] Create Header
  - ✅ [US001-2] Create Main Image
  - ✅ [US001-3] Create List Structure
  - ✅ [US001-4] Create Footer
- 🚧 [US002] Create Header Hide Logic
- ✅ [US003] Create Post Modals
  - ✅ [US003-1] Create Person Create Modal
  - ✅ [US003-2] Create Address Create Modal
  - ✅ [US003-3] Create Choose Avatar Modal
- ✅ [US004] Implement Post Method
  - ✅ [US004-1] Implement Person Post 
  - ✅ [US004-2] Implement Address Post
- ✅ [US005] Create Update Modals
  - ✅ [US005-1] Create Person Update Modal
  - ✅ [US005-2] Create Address Update Modal
- 🚧 [US006] Implement Update Method
  - ✅ [US006-1] Implement Person Update
  - ✅ [US006-2] Create Person Info Modal
  - 🚧 [US006-3] Implement Address Update
- 🚧 [US007] Create Delete Buttons 
  - 🚧 [US008-7] Implement Delete Buttons on Home
  - 🚧 [US008-7] Implement Delete Buttons on Person Info

### US's - EXTRA

- ✅ [US00X-1] Implement ChakraUI Themes
- ✅ [US00X-2] Implement ChakraUI Components Stylization

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.