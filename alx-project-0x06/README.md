# 0. Implementing a share layout

Objective: In most applications, you will have multiple pages that share similar Layout (i.e. Header and Footer). This can be achieved in multiple ways. You have already seen how you can do this by reusing your Header and Footer Components on Multiple pages. But there is a better way to do this and that is through the DRY framework. Set up a base application using create-next-app@latest with the name alx-project-0x03 in a Github repository alx-project-0x03-setup .

# 1. Importing Google fonts

Objectives: By default your project will include some tailwindcss configurations. We can import a google font to be included in the global space of our tailwindcss. We will see how to do this in our global.css file.

# 2. Setting up our landing page with Imperative routing

Objectives: Our App will have 3 additional mini apps. This can be accessible through imperative routing. Which means we need to use the Link component explicitly but by using useRouter Hook from next/router.

We will modify our index.tsx file to achieve this functionality

# 3. Move your interfaces to the right directory

Objectives: Clean up your code a bit, remember, it is always good to keep your code well organized. Group your files into the right directories.

# 4. Resolve a 404 page not found

Objectives: In the file-based routing system, each pathname has to correspond to a particular file that exists in the pages/ directory. In an event where any such pathname is used but not found in the pages directory. Your routing will resolve to a 404 page not found.

This is a default behavior in Nextjs applications. The behavior can be overridden if you wish to have a Custom Error Page

# 0. Adding a counter app to our platform with useState Hook

# 1. Include a ContextAPI for global state management

Objective: ContextAPI allows us to maintain a global state for our applications that can be used across multiple components without prop drilling. For our application, we have a Header component, which is completely different from our CounterApp component (mapped to the route /counter-app). We want to achieve a feature such that when a button is clicked in one component, the effect can reflect in another component. E.g: Our counter will reflect in both Header and CounterApp Components

# 2. Include a Redux for global state management

Objective: Redux allows us to maintain a global state for our applications that can be used across multiple components without prop drilling just like ContextAPI, but for large scale applications . For our application, we have a Header component, which is completely different from our CounterApp component (mapped to the route /counter-app). We want to achieve a feature such that when a button is clicked in one component, the effect can reflect in another component. E.g: Our counter will reflect in both Header and CounterApp Components.