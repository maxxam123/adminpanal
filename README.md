1.

npx create-react-app .

2.

deleted all files in public excluded index.html

modified index.html

deleted all files in src excluded App.js & index.js

in public created style.css

3.

modified App.js & index.js

tested the app --> everything is working perfectly

4.

src --> added context & pages & components

pages --> added home

home --> added home.css & Home.jsx

App.js added <Home/>

tested the app --> everythink OK

5.

npm install @material-ui/core --force

npm install @material-ui/icons --force

components --> created sidebar & topbar

sidebar --> created Sidebar.jsx & sidebar.css

topbar --> created Topbar.jsx & topbar.css

src --> created app.css

modified App.js

6.

App.js --> added "import ./app.css"

components --> added featuredInfo

featuredInfo --> added FeaturedInfo.jsx & featuredInfo.css

Home.jsx --> added <FeaturedInfo.jsx/>

public --> added assets/ (pictures)

7.

npm install react-router-dom@5

npm install @material-ui/data-grid --force

App.js --> import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

App.js --> added Route "UserList"

src --> added dummyData.js

Sidebar.jsx --> added LINK to "home & users"

UserList.jsx --> display data from dummydata.js

.8

src --> added context

context --> added authContext & movieContext & userContext

userContext --> added apiCalls.js & UserContext.js & UserActions.js & UserReducer

npm install axios

modified index.js

modified UserList.jsx

9.

pages --> added user

user --> added User.jsx & user.css

App.js --> added new Route "/user/:userId"

10.

modified User.jsx

11.

pages --> added newUser --> added NewUserjsx & newUser.css

App.js --> added Route "/newUser"

npm install firebase

src --> added firebase.js

12.

modified NewUser.jsx

13.

pages --> added productList --> added ProductList.jsx / productList.css

App.js added Route "/products"

Sidebar.jsx --> activated LINK to "products"

index.js --> added <MovieContextProvider/>

14.

pages --> added product --> added Product.jsx & product.css

App.js --> added Route "/product/:productId

15.

pages --> added newProduct --> added NewProduct.jsx & newProduct.css

App.js --> added Route "/newProduct"

16.

pages --> added login --> added Login.jsx

Topbar.jsx --> activated "Logout"

App.js --> added Route "/Login"

App.js --> added "const { user } = useContext(AuthContext);"

App.js --> added:

<Route path="/login">{user ? <Redirect to="/" /> : <Login /></Route>
{user && (
<>
<Topbar/>

<div className="container" >
.
.
.
</div>
</>
)}

index.js --> added <AuthContextProvider/>

17.
