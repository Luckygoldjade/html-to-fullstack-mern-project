import { React } from "react";
import { FcCandleSticks } from "react-icons/fc";
import { AiOutlineStock } from "react-icons/ai";

// debugger starts here
// debugger;

function HomePage() {
  return (
    <>
      <article>
        <p>
          <i>
            <FcCandleSticks />
            <AiOutlineStock />
          </i>{" "}
          <strong>M.E.R.N.</strong> stands for <strong>MongoDB, Express, React,</strong> and <strong>Node.js.</strong>
        </p>

        <p>
          This Assignment will require use of your existing React frontend
          website that has pages, components, styles, icons, and images for
          Home, Trade Log, Gallery, Staff, and Order.
        </p>

        <ul>
          <li>
            The Trade Log page will have a form to log your trades and a list of
            your stock or option trades.
          </li>
          <li>The Trade Log page will have a link on the navigation bar.</li>
          <li>
            The Trade Log page implements C.R.U.D. (Create, Read, Update,
            Delete) functionality.
          </li>
        </ul>

        <p>
          Both the frontend and backend use React. The backend uses Express and
          Node.js. The database is MongoDB and is connected to VS Code using
          Mongoose. The frontend uses JavaScript, Express, and Node.js. It is a
          SPA (Single Page Application) and uses React Router to navigate
          between pages.
        </p>

        <p>REST API</p>
        <ul>
          <li>The backend uses REST API to communicate with the frontend.</li>
          <li>
            The backend is hosted on Heroku and the frontend is hosted on
            Netlify.
          </li>
          <li>The backend is connected to MongoDB Atlas.</li>
        </ul>

        <p>REACT image gallery</p>
        <ul>
          <li>
            REACT image gallery is used to display images on the Gallery page
          </li>
          <li>The images are stored in the public folder</li>
        </ul>

        <p>REACT router DOM</p>
        <ul>
          <li>REACT router DOM is used to navigate between pages</li>
          <li>
            The Trade Log page is a SPA (Single Page Application) and uses React
            Router to navigate between pages
          </li>
        </ul>

        <p>REACT icons</p>
        <ul>
          <li>REACT icons are used on the navigation bar and footer</li>
          <li>The icons are from react-icons</li>
        </ul>
              
        <p>JSX and JavaScript</p>
        <ul>
          <li>JSX and JavaScript are used to create the frontend</li>
          <li>JSX is used to create the components</li>
          <li>JavaScript is used to create everything else</li>
        </ul>
      </article>
    </>
  );
}

export default HomePage;
