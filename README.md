# Diary

My son just turned 9. He has some interest in computers and computer games (the way it should be) and we talked about whether it would be a good idea to learn programming. This is a diary that I am maintaining about this experiment. Maybe it would be useful to others in similar situation.

## Day 0: Aug 9, 2014

We had already reinstalled Linux/Ubuntu on an old laptop that worked really well for this purpose.
I explained to him the basics of that laptop which he seemed to understand. Though I am a programmer myself, I was not sure if I could teach him about programming, so I started to look for books. Luckily, we found "Hello World! Second Edition: Computer Programming for Kids and Other Beginners" (II edition) written by __Warren Sande__ and __Carter Sande__. Warren-and-Carter is a Father-and-Son pair! (And Warren's wife and Carter's mom Patricia is a big reason why they wrote the book). So, we started following along this book.

1. Installed Python and Idle (Python Shell).
2. Installed the gtypist program. This is something that is usually missed by people while they teach programming to kids. The right way to type (or touch-type) is so important with either QWERTY or DVORAK keyboards! So, we did 'sudo apt-get install gtypist' (Thanks Linux/Ubuntu) and decided that we will both use the 'Home-Row technique' to learn to touch-type.
3. We decided to follow along the book and do programming exercises from the book.
4. He agreed to Python rather grudgingly for he wanted to start with iPhone programming. But that's the next thing and he agreed to do that.
5. We gave May 2015 as the date by which we'll finish the book.
6. We read up to "Starting Python with IDLE" on the first day. Then he was hungry :-). So, we stopped.

## Day 1: Aug 14, 2014
1. Started reading from "Starting Python with IDLE". He is using IDLE to play with the commands in the book.
2. He is also interested in trying out his own commands. He is having fun.
3. He tried division 10/2. Then i asked him to try 11/2 and 11.0 / 2. He finds the results funny :)
4. He wrote his first program in Python and ran it. Was very happy. 
5. We stopped at "If something goes wrong".

## Day 2: Aug 18, 2014
1. He has already read till Chapter 3 - "Operators"! Looks like he understands what variables are.
2. He likes to try new statements on his own. He tried many examples of += and -= by himself. He was talking about loops. Looks like he understands the loop concept, but does not know how to write a loop yet.
3. We also tried operators *=, /= and **=. He was quite excited.
4. Now trying out some programs at the end of the chapter.
5. We stopped after doing area and perimeter program at the end of chapter 3.

# Day 3: Aug 19, 2014
1. Writing the the program to convert celcius to farenheit. He wrote both C to F and F to C by asking user which conversion the user wants.
2. Writing program to calculate travel time. We are done with chapter 3.

# Day 4: Aug 20, 2014
1. Starting chapter 4 now. They have explained data types int, float and str.
2. Apoorv is confused about why 0.1 + 0.2 is 0.3000000000000004. The explanation in the book is not satisfying for him.
3. I am not sure if data types, integer division is completely clear to him. Let's see.
4. We stopped at "Test your knowledge - question 3" at the end of chapter 4.

# Day 5: Aug 22, 2014
1. He was able to solve the challenging question at the end of chapter 4 with a hint. He made a program to round off numbers.
2. Started chapter 5.
3. He asked an interesting question today - "How to make printer print something using Python?"


## Day 10: September 9, 2014 (Skipping a few)

We decided that he'd do computers and Python on Tuesdays (during the weekdays). I, as a parent, (almost) hate homework (but that's a topic for the other day) and he unfortunately has to complete it, that's why we decided on Tuesday.

He's zoomed past the initial chapters and is now doing basic loops. I think he gets the idea. One problem he faced was with this simple program that I asked him to write:

> Write a program to print the digits of a given number, one by one, starting with the unit place.

I think he was trying hard to 'extract' the digits from the number and finally understood how to do it, but there again, I realized how abstract the concept of 'place-value system' really is. Most of the kids (and perhaps adults) do not get that idea however 'taken for granted' it is.

The other program he stumbled with was:

> Write a program to convert the given decimal number into its binary representation.

The reason again, was the lack of understanding of the place-value system.

I think I should cover these things in an introductory programming book. Although I understand that children are ebullient by nature and have (very) short attention spans, we need to be able to explain to them that hard problems are just hard and that we may sometimes take hours, days, weeks ... to solve them in a way that we understand the problem solving process. I need to develop some technical literary skills (remembering late Richard Stevens!) to explain lucidly difficult-at-first concepts to young minds. A balance is needed. But this book is going through the syntactical part of the programming language and working well on making the child learn the 'programming ecosystem', leaving the algorithmic joy aside. Perhaps there's a room for improvement ...

OK, the current status is he's eager to get to the chapter 10 of the book. I give it to the authors that their style rather feeds and enhances my son's curiosity. 

## Day 13: September 28, 2014

Children love graphics. Everybody knows. Well, adults love graphics (secretly) too. So, now, he installed the pygame environment to start playing with sound and images. Images moving across the screen window gives an immense pleasure to a child; and it's quite understandable. One thing I observed was the ease with which he sailed through the installation problems. On that Linux box, he figured out that apt-get install is not having the sudo ritual. He understood that certain install.sh having 'apt-get install pygame' did not have sudo against it. Then I told him about the [xkcd-sandwich](http://xkcd.com/149/) reality and he appreciated that very much. It was nice to see the deftness with which he was manouvering the computer, installing packages, downloading images and so on. He finally downloaded the pygame, the qt bindings for it and then started playing with the graphics: drawing a circle, a semi-circle and so on. 

The book therefore introduced the 'objects' and I thought that was rather too early. Understanding objects before really delving into functions is rather premature I thought. But I have to yet achieve the functional nirvana yet and hence I did not object to his introduction to objects :).

## Day 14: October 04, 2014

He was frustrated, almost crying, hell crying that his beach ball was not loading. I told him, that maybe the .py file and .png file were not finding each other. Then we moved the beachball.png from ~/Downloads to ~/python and then it loaded and he was happy. Simple pleasures make them happy. That's awesome. I wish I had that quality. 

Then I continued with my exploring the possibility of inculcating the love for simple algorithms. Nothing seemed more attractive than the [FizzBuzz](http://imranontech.com/2007/01/24/using-fizzbuzz-to-find-developers-who-grok-coding/). He thought that the problem is rather too simple. His first attempt was not doing it right.
I told him the importance of:
1. reading the specifications correctly.
2. relaxing before you start 'keying in', and perhaps trying the program first on a paper (this is one thing he seems to get now).
3. debugging.

On second attempt, after realizing that the condition '(num % 3 == 0 and num % 5 == 0)' should preceed the other two in an if-else clause, he was happy. I am glad he could 'get' the idea behind this simple problem. In my opinion, the FizzBuzz is still a decent test to catch confident programmers 'off-guard'.

