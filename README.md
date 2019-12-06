# Fend-Project

View all articles
sort articles by date, comment-count and votes
view all articles of one author
view a page for each topic with related author 
View an individual article
view an individual article comments 
post new comment
vote on an article
vote on a comment
frontend pagination for comments and articles
Delete Article, Post Article

*As Hiring partner
should have easy accessibility and compatibility with mobile 
should be able to follow the read me easily and hosted link in readme
link backend in the readme and hosted backend


Paths:
"/" homepage
"/login" 
"/signup"
"profile" - "/profile/post"
"/articles" - "/articles/:id"




- If search but no error, empty array send "no results found"
-How to remove the "&" from the first query Url -> perhaps form request action extraction
-search bar should be a class component and pass the state back on a function passed down and the query object can be passed to the api request
-login page - class based
-Logon page needs to do a get request for all users and nest each in each select
-Profile will send error "please log in first" if just browsing
-Can i add the search component into the profile page so reusable to fetch all articles of the user
-posting article page fetches the current topics and nests it in to the select, and option gto post new topic with topic name and description,
if one or the other input is populated the other needs to disabled so there is only one topic, and a body 

