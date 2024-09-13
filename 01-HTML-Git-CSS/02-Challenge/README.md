# Module 1 Challenge

Before you get started on your first Challenge, review the elements that you'll find in each assignment.

## Challenge Elements

Challenges adhere to a format that's commonly used by software development teams that use **agile project management** to manage their work. Practicing this will prepare you for the workflows you'll experience as a professional developer.

> **deep dive** To learn more about agile, read this [Wikipedia article on agile software development](https://en.wikipedia.org/wiki/Agile_software_development).

Each Challenge contains the following elements:

* **User Story**: This is a short, simple description of a feature told from the perspective of the person who is requesting the new capability, usually a user or customer of the system. This follows an AS AN / I WANT / SO THAT format. For example, "AS A shopper visiting an online store, I WANT to place items in a shopping cart, SO THAT I can purchase them." 

* **Acceptance Criteria**: These are the requirements that you must meet to satisfy the scope of work. They are not exhaustive, but they do entail the minimum aspects of a working solution. Consider this a checklist of baseline requirements. Acceptance criteria can be presented in various ways. In this case, we'll use a common format called **scenario-oriented criteria** which expresses each requirement in a WHEN / THEN format. Don't worry if this doesn't make sense now; it will become very familiar to you after you complete a couple of challenges. 

* **Mock-up**: This is an image or animation that demonstrates the design and functionality of the web application that you'll build for the Challenge.

## HTML CSS Git Challenge: Code Refactor

This week's challenge involves a very important aspect of web development: **accessibility**. 

One of the most common tasks for front-end and junior developers is to take existing code and refactor it (recall that to refactor code is to improve it without changing what it does) to meet a certain set of standards or implement a new technology. In this Challenge, a marketing agency has hired you to refactor an existing site to make it more accessible. 

> **note** Your coursework this week will prepare you with all the skills that you need to succeed on this assignment!

Web accessibility is an increasingly important consideration for businesses. It ensures that people with disabilities can access a website using assistive technologies such as video captions, screen readers, and braille keyboards. Making a website accessible is also good for business for many reasons, one of them being that accessible sites are better positioned in search engines like Google. It also helps companies avoid litigation that can occur when people with disabilities can't access their website.

Even though accessibility is a broad topic that can include complex requirements, your tech lead has given you a small list of specific criteria to satisfy the project. These criteria are documented in the Acceptance Criteria section.

> **important** An important rule to follow when working with someone else's code is the **Scout Rule**, which recommends that you always leave the code a little cleaner than when you found it.

To impress clients, you should always go the extra mile and improve the codebase for long-term sustainability. For example, make sure that all links are functioning correctly. Also, rework the CSS to make it more efficient by consolidating CSS selectors and properties, organizing them to follow the semantic structure of the HTML elements, and including comments before each element or section of the page.

Are you ready to jump in? Here are this week's challenge requirements: 

### User Story

```md
AS A marketing agency
I WANT a codebase that follows accessibility standards
SO THAT our own site is optimized for search engines
```

### Acceptance Criteria

```md
GIVEN a webpage meets accessibility standards
WHEN I view the source code
THEN I find semantic HTML elements
WHEN I view the structure of the HTML elements
THEN I find that the elements follow a logical structure independent of styling and positioning
WHEN I view the image elements
THEN I find accessible alt attributes
WHEN I view the heading attributes
THEN they fall in sequential order
WHEN I view the title element
THEN I find a concise, descriptive title
```

### Mock-Up

> **note** This layout is designed for "desktop", so you may notice that some of the elements don't look like the Mock-Up when viewed at a resolution smaller than 768px. In future lessons, you will learn how to make elements "responsive" so that your web application is optimized for any screen size.

The following image shows the web application's appearance and functionality:

![A webpage titled "Horiseon" features a navigation menu in the header, a hero image, various sections, and more.](https://static.bc-edx.com/coding/software-dev/01-HTML-Git-CSS/assets/01-html-css-git-homework-demo.png)

## Getting Started

This is an autograded assignment, meaning that you will follow the link below to open the assignment in a new window in the Ed platform. You will modify the existing starter code files to meet the requirements listed below.

> **note** If you need any assistance with the Ed platform, please review the information on submitting assignments in Module 0.

## Grading Requirements

This Challenge is graded based on the following criteria: 

### Semantic Elements 42%

* The HTML must have:

    * a `header` element. (7 points)

    * a `nav` element. (7 points)
    
    * a `main` element. (7 points)

    * more than one `section` element. (7 points)
    
    * an `aside` element. (7 points)

    * a `footer` element. (7 points)

### Alt Attributes on Images 12%

* Each of the six images must have alt text. (2 points each)

### Title is Updated 6%

* The title of the page must be updated. (6 points)

### CSS is Applied to HTML 40%

You'll need to update the CSS so that it matches the semantic HTML elements. Once you've updated the CSS, the following must be true:

* The `header` element should have a background color of `#2a607c`. (4 points)

* The `header` element should have a text color of `#ffffff`. (4 points)

* The first three images should have a `height` of `200px`. (4 points each)

* The last three images should have a `height` of `150px`. (4 points each)

* The `footer` element should have `30px` padding. (4 points)

* The text in the `footer` element should be centered. (4 points)

## How to Submit the Challenge

Follow the link below to open this autograded assignment in a new tab. Once you have completed the assignment in the Ed platform, submit it and you will return to Bootcamp Spot.

> **note** You are allowed to miss up to two Challenge assignments and still earn your certificate. If you complete all Challenge assignments, your lowest two grades will be dropped. If you wish to skip this assignment, click Next, and move on to the next Module.

> **important** No matter how difficult the course becomes, you must always turn in original work. Plagiarism is not tolerated. If your instructional or support staff determine that you have plagiarized work, your Student Success Advisor will determine the appropriate course of action based on university policy. Such actions may include, but are not limited to, a documented plagiarism discussion, an incomplete or failing grade assignment, or ineligibility for graduation.
