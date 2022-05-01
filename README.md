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
