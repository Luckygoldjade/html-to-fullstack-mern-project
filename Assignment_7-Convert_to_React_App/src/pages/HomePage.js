import React from 'react';

function HomePage() {
    return (
        <>
        <h2>Web Development Concepts</h2>
    <nav className="local">
        <a href="#servers">Web Servers</a>
        <a href="#frontend">Frontend Design</a>
        <a href="#images">Optimized Images</a>
        <a href="#css">Cascading Stylesheets</a>
        <a href="#forms">Forms</a>
        <a href="#express">Express</a>
        <a href="#javascript">JavaScript</a>
        <a href="#dom">DOM Changes</a>
    </nav>
    <article id="servers">
    <h3>
        Web Servers
    </h3>

    <p>
        {/* --Explain what index means as it relates to websites and servers */}
        When a client goes to a webpage, <strong>index.html</strong> is the page the server will send back to show the client. 
        The index.html file is the name of the resource on the server. As a convention, most web servers are 
        configured so that the request for / is mapped to the file at the path /index.html. This file is 
        called the designated <strong>homepage</strong> on the web server. In almost all real-world web applications, the 
        file index.html in the root directory is called the home page of the web application, and the web 
        application is configured to return this file whenever a <strong>GET request</strong> receives the <strong>URL</strong>. Index.html 
        is the default name for a home page of a website hosted on an Apache web server.
    </p>
    <p>
        {/* Explain what you see in the browser's Web Dev/Inspector tools. What is different about the file's 
        details on the web server versus the local computer? */}
        The web server version takes more than twice the amount of time to access than the local computer 
        version. The web server version uses the same index.html as the local computer, but the web server  
        version runs a <strong>JavaScript</strong> called executor.js and uses favicon.ico for making a custom browser tab icon. 
        The browser tab and contents for both web server and local computer shows my name, Tony Chan, and same 
        contents. The <strong>HTTP request</strong> lines for the two versions are similar, except for the URL paths. Both have 
        the <strong>GET</strong> request method and the same successful <strong>request response</strong> of 200. The web server version has 
        an IP address for finding the target web server, but the local computer version does not. The <strong>request 
        header</strong> for the web server version shows the client can handle text/html, English and encoding types. 
        The local computer request header references Chrome, which can do the same things. The request method 
        is GET, which means the request header body will be empty. No document is being requested. The <strong>HTTP 
        response</strong> are different for the two versions. In this example, no separate server is invoked. 
        The request is just for a static index.html file, which is sent back to the client. The local computer 
        version has minimal <strong>response header</strong> content. The web server version has more response header content 
        and the content type is specified as test/html. The web server version has to access a server far away 
        and more information is needed. A <strong>TCP/IP</strong> connection needs to be opened to the web server. The response 
        header has connection set to keep alive and uses an Apache server program. The <strong>response header body</strong>
        is the index.html file at the web server address, which is sent back to the client. 
    </p>
    <p>
        {/* Explain why the favicon.ico file has a status 200, but the main.css and main.js files do not. */}
        The <strong>response status</strong> for favicon.ico is 200, which means the HTTP request was successfully processed 
        by the server. The files <strong>main.css</strong> and <strong>main.js</strong> do not have a response status code and are showing 
        errors. The browser inspection tool indicates the main.css and main.js files do not exist and are 
        generating an error for each. The line of code with command link is looking for these two files. 
        After I create these two files in the same directory as index.html, the errors are eliminated and 
        the response status code is 200 for each file. 
    </p>
    <p>
        {/* Explain the parts of the URL to your web file. What are the scheme, subdomain, host domain, and 
        resources? */}
        The <strong>URL</strong> to my web file is a unique identifier. The scheme in my web file is HTTPS. A URL starts with 
        a <strong>scheme</strong> which identifies the protocol the web client must use to request the resource. A <strong>subdomain</strong> 
        is a subsection of that <strong>domain/server</strong>. Its name is appended to the front of the <strong>domain name</strong>. In my 
        web file, the subdomains are “web” and “engr.” The domain name is mapped to the IP address for that 
        server machine. In my web file, the domain name is oregonstate.edu. The resource in my web file URL 
        is index.html and the <strong>resource path</strong> is ~chanto/a1-chanto/.
    </p>
    </article>


    <article id="frontend">
    <h3>
        Frontend Design
    </h3>

    <p>
        {/* The concept of frontend design */}
        <strong>Frontend design</strong> is about creating an interface that is both aesthetically pleasing and functional. This means considering the user's experience and the purpose of the web page. One important consideration is adapting the viewing environment to different formats, from mobile phones to large screen displays, to ensure that the web page is accessible and usable on any device.

        The <strong>graphical user interface (GUI)</strong> is a key component of frontend design. It should be simple to use and intuitive, with clear navigation and prominent calls to action. The organization of the web page should be logical and easy to follow, with the most significant information positioned prominently to catch the user's attention. While the top right corner is often a good position for key information, this can vary depending on the purpose and content of the web page.

        Color can be used to evoke emotions and create contrast, while typography and fonts can convey hierarchy and readability. Media such as images and videos can also enhance the user experience, but should be used sparingly to avoid overwhelming the user.

        Usability is a critical component of frontend design. It's about making it easy for users to accomplish specific tasks, such as making a purchase or searching for a topic of interest. This means designing with the user in mind and considering factors such as load times, clear messaging, and accessibility for users with disabilities.

        Overall, frontend design is a complex and multifaceted discipline that requires careful consideration of a wide range of factors. By focusing on user experience, GUI design, organization, and usability, designers can create effective and engaging frontend designs.

    </p>

    <dl>
        {/* The five "E"s of usability */}
        <h4>The Five "E"s of Usability</h4>
        <dt>Effective</dt>
        <dd>It is easy for users to meet their goal(s). The main messages are clear.</dd>
        <dt>Efficient</dt>
        <dd>The user can get through the website with the fewest clicks as possible.</dd>
        <dt>Easy to navigate</dt>
        <dd>For first time users, the website should be intuitive to get around. The main topics should be main headers.</dd>
        <dt>Error-free</dt>
        <dd>The website needs to be tested for all the possible results that a customer will want to achieve.</dd>
        <dt>Enjoyable to use, or engaging</dt>
        <dd>The overall experience needs to be hassle-free and give what the customer wants.</dd>

    </dl>

    <p>
        {/* The purpose of page layout tags */}
        <strong>Page layout tags</strong> are <strong>block-level elements</strong> such as paragraph, headers, lists, 
        navigation, tables and many more. There are two categories called block level elements or <strong>inline level 
        elements</strong> that contribute to the flow control in HTML. A Block-level element occupies the entire 
        horizontal space, and vertical space equal to the height of its contents, thereby creating a “block”. 
        On the other hand, inline elements can start anywhere in a line. Browsers typically display the block-level 
        element with a newline both before and after the element. A block-level element always starts on a new line 
        and takes up the full width available. Block-level elements may appear only within a body element. 

    </p>

    <p>
        {/* How anchors link to content and from page to page? Clarification: What is the conceptual difference between text anchors and navigation? */}
        We create links from one section or page to another using the <strong>anchor element</strong>. The content between the opening and closing anchor element tags should describe the link when someone clicks to navigate to it. The anchor element's <strong>HREF</strong> attribute, creates a hyperlink to web pages, files, email addresses, locations on the same page, or anything else a URL can address. Content within each anchor element should indicate the link's destination. If the HREF attribute is present, pressing the enter key while focused on the anchor element will activate it. It is possible to use the anchor element's HREF attribute to link to a specific location within a document, rather than just the top of the document. <strong>Text anchor</strong> is an attribute to elements such as TEXT, TREF, TSPAN and more. It is used to align (start-, middle- or end-alignment) a string of pre-formatted text or auto-wrapped text and is applied to each individual text chunk within a given text element. The <strong>navigation</strong> HTML element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes. The navigation element is intended only for a major block of navigation links. A document may have several navigation elements, for example, one for site navigation and one for inside the same page navigation.

    </p>
    </article>

    <article id="images">
    <h3>Optimizing Images</h3>
    
    <p>
        {/* What are the 6 major specifications of images for the web? And why? */}
        {/* Which file formats are most appropriate for photos and for line art? And why? */}
        In order to improve the image usability of HTML and loading of webpage images, there are six image specifications for the web. 
        </p>
        <ul>
            <li>Use descriptive and short file names that contain who, what, when and where. Search engines will scan file names for categorization for others looking for this topic. </li>
            <li>Use compression applications to reduce file sizes to as small as possible in order to reduce load times, but do not sacrifice image quality too much. </li>
            <li>Crop the images to the dimensions that will fit your webpage space. Frame the image on one main point, which will help the viewer know what the image is about and not get distracted by other objects. For displaying programming code, just show a small function or a section of code that is readable.</li>
                
            <li>The correct file format for pictures is <strong>JPEG</strong>. It is a good choice for lossy compression of still images and is currently the most popular. JPEG files are only used for photographic images. They compress down to small file sizes and remain rectangular. <strong>Graphics Interchange Format, GIF,</strong> and 8-bit <strong>PNG</strong> are correct file formats for logos, icons, and line art. GIF is a good choice for simple images and animations. GIF files can have 8-bit transparency and/or animation and are typically used for line-art graphics. Their edges anti-alias to one background matte color. Portable Network Graphics, PNG, is preferred over JPEG for more precise reproduction of source images, or when transparency is needed. </li>
            
            <li>Image usability will provide multiple image sizes for a range of monitor sizes is becoming a standard. Responsive images are images that work well on devices with widely differing screen sizes, resolutions, and other such features. This helps to improve performance across different devices. An improvement would be to display a cropped version of the image which displays the important details of the image when the site is viewed on a narrow screen. A second cropped image could be displayed on a medium width screen device, like a tablet. The general problem whereby you want to serve different cropped images in that way, for various layouts, is commonly known as the art direction problem. In addition, there is no need to embed such large images on the page if it is being viewed on a mobile screen. Doing so can waste bandwidth; in particular, mobile users don't want to waste bandwidth by downloading a large image intended for desktop users, when a small image would do for their device. Ideally, multiple resolutions would be made available to the user's web browser. The browser could then determine the optimal resolution to load based on the screen size of the user's device. </li>
            
            <li>Lastly, for image usability, there is a color mode for HTML with 256 predefined HTML colors such as red, blue, pink and more. Other color modes are <strong>hex</strong> (hexadecimal) codes, <strong>RGB</strong> (red, green, blue), <strong>RGBA</strong> (red, green, blue, alpha), and <strong>HSL</strong> (hue, saturation, lightness). Select which color mode by file format such as RGB for PNG, JPG, SVG, and WebP, and Indexed for GIF. </li>

        </ul>
    </article>

    <article id="css">
    <h3>Cascading Stylesheets</h3>
    <p>
        {/* What are the main reasons to incorporate stylesheets in websites and apps? */}
        Before <strong>Cascading Style Sheets, CSS</strong>, HTML had a big problem. It was, HTML was never intended to contain tags for formatting a web page. Then in some later versions of HTML, fonts and color information were added to the language. Developers had the difficulty to consistently maintaining style formatting page by page. CSS changed all that. It removed the style formatting from the HTML page. CSS is used to define styles for your web pages, including the design, layout, and variations in display for different devices and screen sizes. The style definitions are normally saved in external .css files. With an external stylesheet file, you can change the look of an entire website by changing just one file, which saves the developer from a lot of work adjusting page by page. It allows the developer to make the webpage to what he is envisioning it to be.

    </p>
    <p>
        {/* What are the 5 ways to incorporate styles? And why? */}
        A main external CSS file can be linked in the global head of an index.html. Other stylesheets for specific components can be linked after the global CSS file or, imported into that global stylesheet. There are five different ways to include styles after the global stylesheet. 
        </p>
        <ul>
            <li>The first method, an externally linked CSS file. For this webpage, the global stylesheet example is &lt;link rel="stylesheet” type="text/css” media="screen” href="main.css”&gt; or use import, @import “component1.css”;</li>
            <li>The second method is embed or internal style within a &lt;style&gt;&lt;/style&gt; tag. An internal CSS is used to define a style for a single HTML page.  An example is &lt;style&gt; h1 color: blue; p color: red; &lt;/style&gt; </li>
            <li>The third way is inline, which uses the style attribute of an HTML element. The element's attribute and value are used. An inline CSS is used to apply a unique style to a single HTML element. An example is &lt;h1 style="color:blue;”&gt;A Blue Heading &lt;/h1&gt;</li>
            <li>A fourth method is in JavaScript template literals within a JavaScript function. </li>
            <li>Lastly, In regular JavaScript, by manipulating the Document Object Model (DOM).</li>
        </ul>
    </article>


    <article id="forms">
        <h3>Forms</h3>
        <p>
            {/* What are the 6 major goals of accessible forms? And why? */}
            The six main goals of accessible forms are
        </p>
        <ul>
            <li>Provide clear instructions above the form and in the labels. Placeholder values are only helpful for users with vision.</li>
            <li>Let users know why you're gathering the data and which fields are required.</li>
            <li>Set the first field to autofocus, so users can start typing without using the keyboard.</li>
            <li>Ensure each form control can be filled in using the keyboard, for those that cannot or don't use a mouse or trackpad.</li>
            <li>Add tab indexing to complex forms, so it is clear in which order the fields should be filled.</li>
            <li>Ensure validation messages are screen readable. The built-in HTML browser message is not screen-readable.</li>
        </ul>
        <p>
            {/* What are the major tags, their attributes , and their purposes? */}
            
                We will be using these basic form elements throughout the remainder of the course: <strong>form, fieldset, legend, label, input, select, option, and textarea.</strong>
        </p>
            <ul>
                <li>The <strong>form</strong> HTML element represents a document section containing interactive controls for submitting information and has two very important attributes. The first is action, which specifies where the request from the form should be sent. The second essential attribute is method, which specifies the HTTP method to be used in the HTTP request sent when the form is submitted.</li>
                
                <li>The <strong>label</strong> HTML element represents a caption for an item in a user interface. Associating a label with a form control, such as input or textarea offers some major advantages. The label text is not only visually associated with its corresponding text input; it is programmatically associated with it, too. This means that, for example, a screen reader will read out the label when the user is focused on the form input, making it easier for an assistive technology user to understand what data should be entered.</li>
                
                <li>The <strong>fieldset</strong> HTML element is used to group several controls as well as labels within a web form. The fieldset element provides a grouping for a part of an HTML form, with a nested legend element providing a caption for the fieldset.</li>
                
                <li>The <strong>legend</strong> HTML element represents a caption for the content of its parent fieldset.</li>
                
                <li>The <strong>input</strong> HTML element is used to create interactive controls for web-based forms in order to accept data from the user. A wide variety of types of input data and control widgets are available, depending on the device and user agent. The input element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes. How an input works varies considerably depending on the value of its type attribute. The input element is so powerful because of its attributes. Some attributes are <strong>checkbox, radio, email, button, image, submit</strong> and more. If this attribute is not specified, the default type adopted is text. Another important input element attribute is the <strong>name.</strong> It is a string specifying a name for the input control. This name is submitted along with the control's value when the form data is submitted. The name attribute creates a unique behavior for radio buttons. Consider the name a required attribute, even though it is not required.</li>
                
                <li>The <strong>select</strong> HTML element represents a control that provides a menu of options. The select element has some unique attributes you can use to control it, such as multiple to specify whether multiple options can be selected, and size to specify how many options should be shown at once. It also accepts most of the general form input attributes such as required, disabled, autofocus, etc.</li>
                
                <li>The <strong>option</strong> HTML element is used to define an item contained in a select, an optgroup, or a datalist element. As such, option can represent menu items in popups and other lists of items in an HTML document. Each menu option is defined by an option element nested inside the select element. Each option element should have a value attribute containing the data value to submit to the server when that option is selected. If no value attribute is included, the value defaults to the text contained inside the element.</li>
                
                <li>The <strong>textarea</strong> HTML element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.</li>
                
                <li>The <strong>button</strong> HTML element is an interactive element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology. Once activated, it then performs an action, such as submitting a form or opening a dialog.</li>
                </ul>
        <p>
            {/* What are the major form style recommendations to improve usability? And why? */}
            The major form style recommendations to improve usability include making inputs, selects, and buttons about the size of the tip of a finger, visually separating groups of labels and inputs, and spacing out the forms for better readability. It's also important to use clear and descriptive language in form labels and instructions, avoiding jargon or technical language that may be unfamiliar to users. Inline validation, which provides immediate feedback to users when they enter information that is incorrect or incomplete, can also help improve usability by reducing frustration and errors.

            To group controls, developers can use the <strong>fieldset</strong> element, and the <strong>legend</strong> element can provide a caption for the content. Using the <strong>label</strong> element with the <strong>block</strong> attribute can improve readability, and attributes such as <strong>autofocus</strong> and <strong>required</strong> can help guide users through the form. Additionally, increasing font size and adding padding can accommodate users with larger fingers or arthritis.
            
            Finally, using consistent design patterns and layout across forms can help users feel more comfortable and confident in completing them. By implementing these form style recommendations, developers can improve the usability and accessibility of their forms, making them easier and more efficient for users to complete.
        </p>

    </article>

    <article id="express">
        <h3>Express</h3>

            {/* What is Node.js, and how can we use it to improve the web development experience? */}
        <h4>Node.js</h4>
        <p>
            <strong>Node.js</strong> was written initially by Ryan Dahl in 2009 and is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a JavaScript runtime environment that works on the backend server hardware and executes JavaScript code outside a web browser. Node.js allows the creation of Web servers and networking tools using JavaScript for server-side scripting and a collection of modules that handle various core functionalities. The ability to run JavaScript code on the server is often used to generate dynamic web page content before the page is sent to the user's web browser. Node.js brings event-driven programming to web servers in which the flow of the program is determined by events such as user actions (mouse clicks, key presses), sensor outputs, or message passing from other programs or threads. A result of event driven programming is the development of fast web servers in JavaScript. Developers can create scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task. Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.
        </p>

            {/* What is NPM, and how can we use it to improve the web development experience? */}
        <h4>NPM</h4>
        <p>
            In January 2010, <strong>NPM</strong> became the package manager for the Node JavaScript platform. The package manager makes it easier for programmers to publish and share source code of Node.js packages. It is designed to simplify installation, updating, and intelligent uninstallation of packages. It consists of a command line client, also called NPM, and an online database of public and paid-for private packages, called the NPM registry. The registry is accessed via the client, and the available packages can be browsed and searched via the NPM website. NPM is included as a recommended feature in the Node.js installer. When used as a dependency manager for a local project, NPM can install, in one command, all the dependencies of a project through the package.json file. In the package.json file, each dependency can specify a range of valid versions using the semantic versioning scheme, allowing developers to auto-update their packages while at the same time avoiding unwanted breaking changes. NPM also provides version-bumping tools for developers to tag their packages with a particular version. NPM also provides the package-lock.json file, which has the entry of the exact version used by the project after evaluating semantic versioning in package.json.          
        </p>

            {/* What is Express, and how can we use it to improve the web development experience? */}
        <h4>Express</h4>
        <p>
            <strong>Express.js</strong> is a tool that helps developers build web applications, which are basically websites or online services that you can use from your computer or phone. Think of it as a set of building blocks that developers can use to create these websites and make them work properly. Express.js is especially helpful because it provides a lot of useful features that make it easier for developers to create these web applications. For example, it helps them handle requests from users who are visiting the website, store data that users enter, and display information back to the users. Express.js is different from Node.js. Express.js is a web application framework for Node.js. It is built on top of Node.js and provides a set of features for building web applications such as routing, middleware, and HTTP utilities. Express.js is often used to create APIs or web applications that handle HTTP requests and responses. In other words, Node.js provides the runtime environment for JavaScript to run on a server, while Express.js provides the framework for building web applications on top of Node.js. Express.js is not a requirement to use Node.js, but it is a popular choice for building web applications because it simplifies many common tasks and provides a structured way to organize your code. Overall, Express.js is a tool that makes it easier for developers to build websites and online services that work well and provide a good experience for users.
        </p>
    </article>

    <article id="javascript">
        <h3>JavaScript</h3>
        <p>
            The main data types of javaScript are:
        </p>
            <ul>
            <li>JavaScript has no explicit <strong>integer</strong> type. All numbers are double-precision, which means don't worry about the difference between, say, 1 and 1.0. As with floating-point numbers in any programming language, you cannot avoid round off errors with fractional values. This is inevitable since decimal numbers such as 0.1, 0.2, and 0.3 do not have exact binary representations.</li>

            <li>The <strong>Boolean</strong> type has two values, false and true. In a condition, values of any type will be converted to a Boolean value. The values 0, <strong>NaN, null</strong>, <strong>undefined</strong>, and the <strong>empty</strong> string are each converted to false, all others to true.</li>

            <li><strong>String</strong> literals are enclosed in single or double quotes: 'Hello' or “Hello”. If you use a quote inside a string that is delimited by the same quote type, escape it with a backslash.</li>

            <li>JavaScript's <strong>symbols</strong> are a special data type introduced in modern JavaScript that can be used as object keys instead of just strings. The main advantage of symbols is their uniqueness. Every symbol created using the <strong>Symbol()</strong> function is completely unique and cannot be replicated. They are useful for defining properties with well-known symbols to customize the behavior of certain <strong>API</strong> methods, which allows you to create objects with non-standard behavior and write code that works with generic objects. Symbols can also be used as keys in object literals and destructuring assignments. Additionally, symbols have two built-in properties, <strong>Symbol.iterator</strong> and <strong>Symbol.toPrimitive</strong>, which can be used to customize the behavior of an object when it is iterated over or coerced to a primitive value. Since symbols are not strings, you cannot use the dot notation for symbol keys, and instead must use the bracket operator. It's important to save the symbol in a variable or object, so that it is available when you need it. Overall, symbols provide a powerful and flexible way to work with objects in JavaScript.
            JavaScript has two ways to indicate the absence of a value. When a variable is declared but not initialized, its value is <strong>undefined.</strong> This commonly happens with functions. When you call a function and fail to provide a parameter, the parameter variable has the value undefined. The <strong>null</strong> value is intended to denote the intentional absence of a value. Unlike null, undefined is not a reserved word. It is a variable in the global scope.</li>

            <li>JavaScript's <strong>objects</strong> are very different from those in class-based languages such as Java and C++. A JavaScript object is simply a set of name/value pairs or “properties.” Such an object has only public data and neither encapsulation nor behavior. The object is not an instance of any particular class. In other words, it is nothing like an object in traditional object-oriented programming. Of course, you can store an object in a variable. Once you have such a variable, you can access the object properties with the usual dot notation. The non-object types are collectively called primitive types.</li>

            </ul>
            In JavaScript, objects are a collection of key-value pairs, where the keys are also referred to as properties of the object. Objects can be created, read, updated, and deleted using the <strong>CRUD</strong> operations. You can store an object in a variable and access its properties using the <strong>dot notation</strong>. You can modify existing properties or add new ones as needed.
            Arrays in JavaScript are also objects, but their property names are numeric indices starting from 0. Although array indices are numbers, JavaScript requires all object property names to be strings. This is why the indices are represented as strings in arrays. 
            <strong> JSON</strong>, or <strong>JavaScript Object Notation</strong>, is a lightweight text-based format used for exchanging data between applications. It is easy for both humans and machines to read and write. Despite the name including “JavaScript,” JSON is programming language agnostic, which means that programs written in different languages can exchange data using the JSON format. JSON is widely used for data exchange between web applications and servers, as well as between different web applications.
            JavaScript's conditionals are used to make decisions and execute different blocks of code based on certain conditions. They are implemented using <strong>if-then</strong> statements and <strong>switch</strong> statements, which allow for branching in code. It is important to pay attention to the evaluation of conditions in JavaScript due to automatic type conversion and “loose equality” operators that can lead to confusing behavior.
            JavaScript has a variety of comparison operators, such as &lt;, &lt;=, &gt;, and &gt;=, which are used to compare values. These operators also work with strings, using lexicographic order. It is significant to ensure that both operands are of the same type when using comparison operators, or to convert operands explicitly if necessary. The <strong>strict equality</strong> operators (=== and !==) are used to test for equality between values of the same type. Operands of different types are never strictly equal, while undefined and null values are only strictly equal to themselves. Numbers, Boolean values, and strings are strictly equal if their values are equal.
            There are also <strong>“loose equality”</strong> operators (== and !=) that can compare values of different types, but they are generally not useful. Mixed typed comparisons can be a source of confusion, particularly with the <strong>“weak equality”</strong> operators (== and !=). When one operand is a number, the other operand is converted to a number, and if it is a string, the conversion yields the numeric value if the string contains a number, 0 if the string is empty, or NaN otherwise. <strong>NaN</strong> stands for not a number. Any comparison involving NaN is always false, even NaN &lt;= NaN.
            JavaScript's loops are used to execute a block of code repeatedly, either a fixed number of times or until a condition is met. There are three types of loops in JavaScript: <strong>for, while</strong>, and <strong>do-while.</strong> The for loop is used to iterate a specific number of times and is often used with an index variable that is incremented or decremented with each iteration. The while loop is used to execute a block of code while a condition is true, and it may or may not execute at all depending on the initial condition. The do-while loop is similar to the while loop, but it always executes at least once before checking the condition. Loops are an essential part of JavaScript programming and are commonly used to perform tasks such as iterating through arrays, processing input data, and generating HTML content dynamically. However, it is important to use loops carefully to avoid infinite loops and ensure that the code executes efficiently.
            JavaScript object-oriented programming is a programming paradigm that involves creating objects with <strong>identity, state</strong>, and <strong>behavior</strong>. In JavaScript, objects have been supported for a long time, and they can be created without declaring classes unlike other programming languages. Instead, JavaScript's approach to object-oriented programming is based on <strong>prototypes</strong>. Every object in JavaScript has a prototype that it inherits from, and developers can create new objects by copying properties and methods from existing objects. This allows for a flexible and dynamic system of object creation and manipulation. Additionally, JavaScript supports various features of object-oriented programming, such as <strong>encapsulation, inheritance</strong>, and <strong>polymorphism</strong>, through its prototype-based system. With the recent introduction of class syntax in JavaScript, it's now possible to define classes that create objects with prototypes and other object-oriented features, making JavaScript more accessible to developers familiar with traditional class-based object-oriented programming.
            Functional programming in JavaScript involves using functions as <strong>“first-class”</strong> values. This means that we can assign functions to variables, define functions that receive other functions as arguments, and define functions that return functions. These powerful features are used very frequently in modern JavaScript, and it is important to understand them to be a good JavaScript developer. Functional programming also heavily uses the concept of <strong>closures</strong>, which are functions that have access to the variables in their outer scope even after that scope has been exited. <strong>Closure</strong> is a key feature of functional programming because it allows us to create and return functions that “remember” their original environment and can operate on data that might not be accessible outside that environment. With functional closure, we can create powerful and flexible functions that can adapt to different input data and contexts. Overall, functional programming and functional closure are important concepts for any JavaScript developer to understand in order to write efficient and flexible code.
    </article>

    <article id="dom">
        <h3>Change the DOM using JavaScript and Express</h3>
        <p>
            Developers update the <strong>DOM</strong> of a page by using the <strong>DOM API</strong> through JavaScript and Express for several reasons:
        </p>
            <ul>
            <li><strong>Dynamic Content:</strong> JavaScript enables developers to create dynamic and interactive web pages. By manipulating the DOM, they can add, remove, or modify elements and properties based on user actions, server responses, or other events. This enhances the user experience by providing a more engaging and responsive interface.</li>
            
            <li><strong>Asynchronous Updates:</strong> JavaScript, in combination with AJAX, allows developers to make asynchronous requests to the server without reloading the entire page. This means they can fetch data from the server in the background and dynamically update specific parts of the DOM, without interrupting the user's interaction with the page.</li>
            
            <li><strong>Client-Server Communication:</strong> JavaScript can send HTTP requests to the server using AJAX or the fetch API. Developers can send data to the server, retrieve server-generated content, or perform server-side operations asynchronously. By updating the DOM based on the server's response, they can reflect changes in the UI without requiring a full page reload.</li>
            
            <li><strong>Real-time Updates:</strong> In applications that require real-time updates, such as chat applications or collaborative editing tools, JavaScript and frameworks like <strong>Socket.IO</strong> are used to establish a persistent connection with the server. This allows the server to push updates to the client in real-time, and JavaScript can update the DOM accordingly to reflect those updates instantly.</li>
            </ul>
            Express, as a server-side framework for Node.js, is commonly employed to handle server-side logic and routing in web applications. It can receive requests from the client, process them, interact with databases or external APIs, and send back responses. By combining Express with JavaScript on the server-side, developers can dynamically generate HTML content or API responses, which can be further manipulated on the client-side using JavaScript and DOM manipulation techniques.
        <p>
            Testing the DOM (Document Object Model) using random data has both pros and cons, similar to testing other types of application code.
        </p>
        <p>
            Pros:
        </p>
            <ul>
            <li>Identification of Edge Cases: Random data testing helps identify edge cases that might not be caught by other testing methods. It exercises the DOM in ways that would be difficult or impractical with manually-created data.</li>
            
            <li>Performance Improvement: Random data can be used to stress test the DOM, revealing performance bottlenecks that may go unnoticed in controlled scenarios. This aids in optimizing the DOM for real-world applications.</li>
            
            <li>Bug Discovery: Random data testing can uncover bugs in the DOM that might not be detected through other testing approaches. It assists in enhancing the overall quality and reliability of the DOM.</li>
            </ul>
            Cons:
            <ul>
            <li>Time-Consuming: Generating and testing random data can be time-consuming, particularly when dealing with large documents. The process may require significant computational resources and impact testing efficiency.</li>
            
            <li>Bug Reproduction Challenges: Random data's unpredictable nature makes it difficult to reproduce bugs encountered during testing. Reproducing and debugging these issues can be challenging, hindering the timely resolution of identified problems.</li>
            
            <li>Result Interpretation Difficulty: Interpreting the results of random data testing can be challenging due to the unpredictable nature of the data. Determining the root causes of issues can be complex, making it harder to pinpoint and address the underlying problems.</li>
            </ul>
        <p>
            In conclusion, while testing the DOM with random data can offer benefits such as identifying edge cases, improving performance, and discovering bugs, it also entails challenges related to time consumption, bug reproduction, and result interpretation. A balanced testing strategy that combines random data testing with other structured approaches can help mitigate these drawbacks and yield more comprehensive results.
        </p>
        
    </article>

    </>
    );
}

export default HomePage;    // required for elsewhere to import this page
