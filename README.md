# Unit-04-Code-Quiz

Here is the Unit-04 Homework Assignment. For this assignment we were tasked with creating a code quiz program. 
All functionality has been coded with vanilla JS. 
At the beginning you are shown the first page which asks if you are ready to take the quiz. 
    a "Yes" click will begin the quiz by showing the first page and will begin a timer counting down from 75 seconds. 
    a "No" click does nothing. (I didn't see a point in creating functionality for that because... If no is clicked then the quiz simply doesn't start.)
Upon hitting questions one the countdown timer becomes visible to the user
Each answer button "A, B, C, and D" have eventListeners attached that will lead the user to the next question. 
    However the one exception is the correct answer. (due to time restraints, I simply made a correct answer worth one point)
    The correct answer choice runs a "correct" function which will add the point to their score, which is visible in the console
At the completion of 5 questionss the User is taken to a "Score Page" where they can view placeholder names (Time Restraints again...)
The user can view their score in the console log. 
    unfortunatley the "score++;" code seems to add more than just one integer to the running total once question 4 is answered. 
        I haven't found a reason as to why? 

As previously mentioned time restraints cut this project short. Funcionality that is missing includes 
    -- a score that is adaptive to how long it took to answer the question
    -- a location to input your own score (saved in the local database)
    -- and a high score screen that is reflective of the users past scores 

I'm sure this will cause my grade to take a nose dive. However due to my ability to build this with next to no google-fu, I've become a lot more excited about coding. 
    You may give me an F good sir... But I do consider this quite the moral victory!!! 

    Have a great day Adam and/or Andy :D 